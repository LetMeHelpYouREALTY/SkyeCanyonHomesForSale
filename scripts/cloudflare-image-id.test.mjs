import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  cloudflareImageId,
  hashFromVariantUrl,
  shouldUploadToCloudflare,
} from './cloudflare-image-id.mjs';

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
