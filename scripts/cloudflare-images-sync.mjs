/**
 * Upload git-backed images to Cloudflare Images (primary CDN).
 * Requires CF_ACCOUNT_ID and CF_IMAGES_TOKEN (or CLOUDFLARE_API_TOKEN).
 * GitHub Action: .github/workflows/cloudflare-images-sync.yml
 * Secrets: CF_ACCOUNT_ID, CF_IMAGES_TOKEN (optional CLOUDFLARE_API_TOKEN).
 * Zone skyecanyonhomesforsale.com already uses Cloudflare nameservers
 * (DNS-only / gray cloud for Vercel). After secrets exist, CNAME
 * images.skyecanyonhomesforsale.com to the Cloudflare Images custom domain.
 *
 * Usage:
 *   CF_IMAGES_DRY_RUN=1 node scripts/cloudflare-images-sync.mjs
 *   node scripts/cloudflare-images-sync.mjs
 *
 * Custom IDs match src/lib/cloudflare-images.ts cloudflareImageId().
 * Runbook: docs/CLOUDFLARE-IMAGES.md
 */
import { appendFile, readdir, readFile, stat, writeFile } from 'fs/promises';
import path from 'path';
import {
  cloudflareImageId,
  hashFromVariantUrl,
  shouldUploadToCloudflare,
} from './cloudflare-image-id.mjs';

const ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_IMAGES_TOKEN || process.env.CLOUDFLARE_API_TOKEN;
const DRY_RUN = process.env.CF_IMAGES_DRY_RUN === '1';
const ROOT = 'public/images';
const HASH_FILE = 'src/lib/cloudflare-account-hash.ts';

async function walk(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full, rel)));
    } else if (/\.(jpe?g|webp|png)$/i.test(entry.name) && !entry.name.includes('-mobile')) {
      files.push({ rel, full });
    }
  }
  return files;
}

async function plannedUploads() {
  const files = await walk(ROOT);
  const relSet = new Set(files.map((file) => file.rel));
  const planned = [];
  const skippedWebp = [];
  const skippedSmall = [];

  for (const file of files) {
    if (!shouldUploadToCloudflare(file.rel, relSet)) {
      skippedWebp.push(file.rel);
      continue;
    }
    const info = await stat(file.full);
    if (info.size < 500) {
      skippedSmall.push(file.rel);
      continue;
    }
    planned.push({
      rel: file.rel,
      full: file.full,
      id: cloudflareImageId(file.rel),
      bytes: info.size,
    });
  }

  return { planned, skippedWebp, skippedSmall };
}

function hashFileContents(hash) {
  const value = hash ? `'${hash}'` : 'null';
  return `/**
 * Cloudflare Images account hash used to build imagedelivery.net URLs.
 * Overwritten by \`scripts/cloudflare-images-sync.mjs\` after a successful upload.
 * Leave null until GitHub secrets CF_ACCOUNT_ID + CF_IMAGES_TOKEN exist.
 */
export const CF_IMAGES_ACCOUNT_HASH: string | null = ${value};
`;
}

async function persistHash(hash) {
  if (!hash) {
    return false;
  }
  const next = hashFileContents(hash);
  const current = await readFile(HASH_FILE, 'utf8').catch(() => '');
  if (current === next) {
    console.log(`hash   ${hash} (unchanged)`);
    return false;
  }
  await writeFile(HASH_FILE, next);
  console.log(`hash   wrote ${HASH_FILE} → ${hash}`);
  return true;
}

async function writeStepSummary(markdown) {
  const file = process.env.GITHUB_STEP_SUMMARY;
  if (!file) {
    return;
  }
  await appendFile(file, `${markdown.trim()}\n`);
}

function missingCredsMessage() {
  return [
    '::warning::Cloudflare Images credentials not set. Git backup remains in public/images/.',
    'Set GitHub secrets CF_ACCOUNT_ID and CF_IMAGES_TOKEN.',
    'The Action commits src/lib/cloudflare-account-hash.ts after the first successful upload so Vercel can serve imagedelivery.net URLs without a dashboard env var.',
    'Optional: Vercel NEXT_PUBLIC_CF_IMAGES_BASE_URL and a DNS-only CNAME for images.skyecanyonhomesforsale.com. Do not orange-cloud Vercel.',
    'Runbook: docs/CLOUDFLARE-IMAGES.md',
    'CLOUDFLARE_IMAGES_SYNC_SKIPPED=1',
  ].join('\n');
}

const { planned, skippedWebp, skippedSmall } = await plannedUploads();

if (DRY_RUN) {
  console.log(`Cloudflare Images dry-run: ${planned.length} files`);
  for (const item of planned) {
    console.log(`${item.id}\t${item.rel}\t${item.bytes}`);
  }
  if (skippedWebp.length > 0) {
    console.log(`skip webp with jpeg: ${skippedWebp.length}`);
  }
  if (skippedSmall.length > 0) {
    console.log(`skip <500 bytes: ${skippedSmall.length}`);
  }
  await writeStepSummary(`## Cloudflare Images — dry-run

- planned uploads: **${planned.length}**
- skipped WebP (JPEG original exists): ${skippedWebp.length}
- skipped under 500 bytes: ${skippedSmall.length}

Custom IDs use \`skye-canyon/{path without extension}\`. No Cloudflare API call was made.
`);
  process.exit(0);
}

if (!ACCOUNT_ID || !TOKEN) {
  console.log(missingCredsMessage());
  await writeStepSummary(`## Cloudflare Images — blocked

Credentials are empty. Git \`/images\` backup stays live. See \`docs/CLOUDFLARE-IMAGES.md\`.
`);
  process.exit(0);
}

let uploaded = 0;
let failed = 0;
let deliveryHash = null;

for (const file of planned) {
  const body = new FormData();
  body.set('id', file.id);
  body.set('file', new Blob([await readFile(file.full)]), path.basename(file.full));

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}` },
      body,
    },
  );

  const json = await res.json();
  const variant = json?.result?.variants?.[0];
  if (variant) {
    deliveryHash = hashFromVariantUrl(variant) || deliveryHash;
  }

  if (!res.ok || json.success === false) {
    const already = JSON.stringify(json.errors ?? json).includes('Duplicate');
    if (already) {
      console.log(`exists ${file.id}`);
      uploaded += 1;
      continue;
    }
    console.error(`fail   ${file.id}`, json.errors ?? json);
    failed += 1;
    continue;
  }

  console.log(`upload ${file.id}`);
  uploaded += 1;
}

if (!deliveryHash) {
  const listRes = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1?per_page=1`,
    { headers: { Authorization: `Bearer ${TOKEN}` } },
  );
  const listJson = await listRes.json();
  const variant =
    listJson?.result?.images?.[0]?.variants?.[0] ?? listJson?.result?.[0]?.variants?.[0];
  deliveryHash = hashFromVariantUrl(variant);
}

const wroteHash = await persistHash(deliveryHash);

console.log(`\nCloudflare Images sync: ${uploaded} ok, ${failed} failed`);
await writeStepSummary(`## Cloudflare Images — uploaded

- uploaded or already present: **${uploaded}**
- failed: **${failed}**
- account hash: \`${deliveryHash ?? 'none'}\`
- hash file written: ${wroteHash ? 'yes' : 'no'}
`);

if (failed > 0) {
  process.exit(1);
}
