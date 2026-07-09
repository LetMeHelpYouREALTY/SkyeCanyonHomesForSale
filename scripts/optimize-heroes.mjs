/**
 * Converts generated hero assets to optimized JPEG/WebP + mobile variants.
 * Run: node scripts/optimize-heroes.mjs [sourceDir]
 */
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = process.argv[2] ?? '/opt/cursor/artifacts/assets';
const OUT_DIR = 'public/images/heroes';

const HERO_NAMES = [
  'home',
  'properties',
  'community',
  'luxury',
  'about',
  'northwest',
  'parks',
  'schools',
  'contact',
  'market',
  'neighborhood',
  'las-vegas',
  'voice-search',
];

await mkdir(OUT_DIR, { recursive: true });

const sourceFiles = await readdir(SOURCE_DIR);

for (const name of HERO_NAMES) {
  const inputFile = sourceFiles.find((f) => path.parse(f).name === name);
  if (!inputFile) {
    console.warn(`Skip ${name}: no source in ${SOURCE_DIR}`);
    continue;
  }

  const input = path.join(SOURCE_DIR, inputFile);

  await sharp(input)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT_DIR, `${name}.jpg`));

  await sharp(input)
    .rotate()
    .resize({ width: 768, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(OUT_DIR, `${name}-mobile.jpg`));

  await sharp(input)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(OUT_DIR, `${name}.webp`));

  await sharp(input)
    .rotate()
    .resize({ width: 768, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(OUT_DIR, `${name}-mobile.webp`));

  const stats = await sharp(path.join(OUT_DIR, `${name}.jpg`)).metadata();
  console.log(`OK ${name}: ${stats.width}x${stats.height}`);
}

console.log('Hero optimization complete.');
