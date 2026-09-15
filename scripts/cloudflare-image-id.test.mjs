import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  cloudflareImageId,
  hashFromVariantUrl,
  shouldUploadToCloudflare,
} from './cloudflare-image-id.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('maps git keys to Cloudflare custom IDs', () => {
  assert.equal(cloudflareImageId('heroes/home.jpg'), 'skye-canyon/heroes/home');
  assert.equal(cloudflareImageId('/images/heroes/home.webp'), 'skye-canyon/heroes/home');
  assert.equal(cloudflareImageId('heroes/home-mobile.jpg'), 'skye-canyon/heroes/home');
  assert.equal(
    cloudflareImageId('gbp/google-review-qr.png'),
    'skye-canyon/gbp/google-review-qr',
  );
  assert.equal(cloudflareImageId('heroes/schools.jpg'), 'skye-canyon/heroes/schools');
  assert.equal(cloudflareImageId('gbp/community-map.jpg'), 'skye-canyon/gbp/community-map');
});

test('skips webp when a jpeg original exists', () => {
  const files = new Set(['heroes/home.jpg', 'heroes/home.webp']);
  assert.equal(shouldUploadToCloudflare('heroes/home.jpg', files), true);
  assert.equal(shouldUploadToCloudflare('heroes/home.webp', files), false);
  assert.equal(shouldUploadToCloudflare('gbp/google-review-qr.png', files), true);
});

test('extracts the Images account hash from a variant URL', () => {
  assert.equal(
    hashFromVariantUrl(
      'https://imagedelivery.net/Vi7wi5KSItxGFsWRG2Us6Q/skye-canyon/heroes/home/public',
    ),
    'Vi7wi5KSItxGFsWRG2Us6Q',
  );
});

test('dry-run lists custom IDs without Cloudflare credentials', () => {
  const result = spawnSync(process.execPath, ['scripts/cloudflare-images-sync.mjs'], {
    cwd: repoRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      CF_IMAGES_DRY_RUN: '1',
      CF_ACCOUNT_ID: '',
      CF_IMAGES_TOKEN: '',
      CLOUDFLARE_API_TOKEN: '',
    },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Cloudflare Images dry-run: \d+ files/);
  assert.match(result.stdout, /skye-canyon\/gbp\/cover/);
  assert.match(result.stdout, /skye-canyon\/heroes\/home/);
  assert.match(result.stdout, /skye-canyon\/heroes\/schools/);
});

test('missing credentials skip upload and stay on git backup', () => {
  const result = spawnSync(process.execPath, ['scripts/cloudflare-images-sync.mjs'], {
    cwd: repoRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      CF_IMAGES_DRY_RUN: '',
      CF_ACCOUNT_ID: '',
      CF_IMAGES_TOKEN: '',
      CLOUDFLARE_API_TOKEN: '',
    },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /CLOUDFLARE_IMAGES_SYNC_SKIPPED=1/);
  assert.match(result.stdout, /docs\/CLOUDFLARE-IMAGES\.md/);
});
