/**
 * Upload git-backed images to Cloudflare Images (primary CDN).
 * Requires CF_ACCOUNT_ID and CF_IMAGES_TOKEN (or CLOUDFLARE_API_TOKEN).
 * GitHub Action: .github/workflows/cloudflare-images-sync.yml
 * Secrets: CF_ACCOUNT_ID, CF_IMAGES_TOKEN (optional CLOUDFLARE_API_TOKEN).
 * Then set NEXT_PUBLIC_CF_IMAGES_BASE_URL or NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH
 * in Vercel so siteImage() serves from Cloudflare with git as backup.
 *
 * Usage:
 *   node scripts/cloudflare-images-sync.mjs
 *
 * Custom IDs match src/lib/cloudflare-images.ts IMAGE_IDS.
 */
import { readdir, readFile, stat } from 'fs/promises';
import path from 'path';

const ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_IMAGES_TOKEN || process.env.CLOUDFLARE_API_TOKEN;
const ROOT = 'public/images';

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

if (!ACCOUNT_ID || !TOKEN) {
  console.log('Cloudflare Images credentials not set.');
  console.log('Git backup remains in public/images/. Set CF_ACCOUNT_ID and CF_IMAGES_TOKEN to sync.');
  console.log('Primary CDN URL: NEXT_PUBLIC_CF_IMAGES_BASE_URL or NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH');
  process.exit(0);
}

const files = await walk(ROOT);
let uploaded = 0;
let failed = 0;

for (const file of files) {
  const id = `skye-canyon/${file.rel.replace(/\.(jpe?g|webp|png)$/i, '')}`;
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

console.log(`\nCloudflare Images sync: ${uploaded} ok, ${failed} failed`);
if (failed > 0) {
  process.exit(1);
}
