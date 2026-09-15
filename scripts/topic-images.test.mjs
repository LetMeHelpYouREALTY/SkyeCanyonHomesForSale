import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesRoot = path.join(root, 'public/images');

const expectedFiles = [
  'gbp/community-map.jpg',
  'gbp/cover.jpg',
  'gbp/park.jpg',
  'gbp/recreation.jpg',
  'gbp/clubhouse.jpg',
  'gbp/profile.jpg',
  'gbp/google-review-qr.png',
  'heroes/schools.jpg',
  'heroes/northwest.jpg',
  'heroes/market.jpg',
  'heroes/community.jpg',
  'heroes/las-vegas.jpg',
  'heroes/new-construction.jpg',
  'sections/new-construction.jpg',
  'sections/luxury-interior.jpg',
  'sections/listings.jpg',
];

describe('heading-appropriate photography exists in git backup', () => {
  for (const file of expectedFiles) {
    it(`has ${file}`, () => {
      assert.equal(fs.existsSync(path.join(imagesRoot, file)), true);
    });
  }
});
