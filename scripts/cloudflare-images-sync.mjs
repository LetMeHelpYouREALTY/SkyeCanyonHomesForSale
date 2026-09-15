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
 *   node scripts/cloudflare-images-sync.mjs
 *
 * Custom IDs match src/lib/cloudflare-images.ts cloudflareImageId().
 */
import { readdir, readFile, stat, writeFile } from 'fs/promises';
import path from 'path';
import {
  cloudflareImageId,
  hashFromVariantUrl,
  shouldUploadToCloudflare,
} from './cloudflare-image-id.mjs';

const ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_IMAGES_TOKEN || process.env.CLOUDFLARE_API_TOKEN;
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

if (!ACCOUNT_ID || !TOKEN) {
  console.log('::warning::Cloudflare Images credentials not set. Git backup remains in public/images/.');
  console.log('Set GitHub secrets CF_ACCOUNT_ID and CF_IMAGES_TOKEN.');
  console.log('The Action commits src/lib/cloudflare-account-hash.ts after the first successful upload so Vercel can serve imagedelivery.net URLs without a dashboard env var.');
  console.log('Optional: Vercel NEXT_PUBLIC_CF_IMAGES_BASE_URL and a DNS-only CNAME for images.skyecanyonhomesforsale.com. Do not orange-cloud Vercel.');
  process.exit(0);
}

const files = await walk(ROOT);
const relSet = new Set(files.map((file) => file.rel));
let uploaded = 0;
let failed = 0;
let deliveryHash = null;

for (const file of files) {
  if (!shouldUploadToCloudflare(file.rel, relSet)) {
    console.log(`skip   ${file.rel} (jpeg original uploaded)`);
    continue;
  }

  const id = cloudflareImageId(file.rel);
  const info = await stat(file.full);
  if (info.size < 500) {
    continue;
  }

  const body = new FormData();
  body.set('id', id);
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
      console.log(`exists ${id}`);
      uploaded += 1;
      continue;
    }
    console.error(`fail   ${id}`, json.errors ?? json);
    failed += 1;
    continue;
  }

  console.log(`upload ${id}`);
  uploaded += 1;
}

if (!deliveryHash) {
  const listRes = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1?per_page=1`,
    { headers: { Authorization: `Bearer ${TOKEN}` } },
  );
  const listJson = await listRes.json();
  const variant = listJson?.result?.images?.[0]?.variants?.[0] ?? listJson?.result?.[0]?.variants?.[0];
  deliveryHash = hashFromVariantUrl(variant);
}

await persistHash(deliveryHash);

console.log(`\nCloudflare Images sync: ${uploaded} ok, ${failed} failed`);
if (failed > 0) {
  process.exit(1);
}
