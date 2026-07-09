/**
 * Converts generated hero assets to optimized JPEG/WebP + mobile variants.
 *
 * Usage:
 *   npm run optimize:heroes                    # all images in artifacts dir
 *   npm run optimize:heroes -- new-page        # one hero by basename
 *   npm run optimize:heroes -- a b c             # multiple heroes
 *   node scripts/optimize-heroes.mjs [sourceDir] [name ...]
 */
import { readdir, mkdir, stat } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const DEFAULT_SOURCE = '/opt/cursor/artifacts/assets';
const OUT_DIR = 'public/images/heroes';

const args = process.argv.slice(2);
const sourceDirArg = args[0]?.startsWith('/') || args[0]?.startsWith('.') ? args.shift() : null;
const SOURCE_DIR = sourceDirArg ?? DEFAULT_SOURCE;
const requestedNames = args.length > 0 ? args : null;

await mkdir(OUT_DIR, { recursive: true });
await mkdir(SOURCE_DIR, { recursive: true });

const sourceFiles = await readdir(SOURCE_DIR);
const imageFiles = sourceFiles.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

let heroNames = requestedNames;
if (!heroNames) {
  heroNames = imageFiles.map((f) => path.parse(f).name);
}

if (heroNames.length === 0) {
  console.error(`No hero images found in ${SOURCE_DIR}`);
  console.error('Save generated image as: /opt/cursor/artifacts/assets/your-page.jpg');
  process.exit(1);
}

const processed = [];

for (const name of heroNames) {
  const inputFile = imageFiles.find((f) => path.parse(f).name === name);
  if (!inputFile) {
    console.warn(`Skip ${name}: no source file in ${SOURCE_DIR}`);
    continue;
  }

  const input = path.join(SOURCE_DIR, inputFile);
  const inputStat = await stat(input);
  if (inputStat.size < 1000) {
    console.warn(`Skip ${name}: file too small (${inputStat.size} bytes) — likely corrupt`);
    continue;
  }

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

  const meta = await sharp(path.join(OUT_DIR, `${name}.jpg`)).metadata();
  console.log(`OK ${name}: ${meta.width}x${meta.height}`);
  processed.push(name);
}

if (processed.length === 0) {
  console.error('No heroes were processed.');
  process.exit(1);
}

console.log(`\nHero optimization complete (${processed.length}).`);
console.log('\nNext: register in src/data/hero-images.ts if new:');
for (const name of processed) {
  console.log(`  'page-key': hero('${name}', 'Describe ${name} for Skye Canyon Las Vegas'),`);
}
console.log('\nThen deploy:');
console.log('  npm run hero:deploy');
