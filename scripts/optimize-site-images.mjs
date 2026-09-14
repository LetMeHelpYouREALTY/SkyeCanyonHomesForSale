/**
 * Optimize generated site images into git-backed public/ paths.
 * Cloudflare remains the primary CDN when NEXT_PUBLIC_CF_IMAGES_* is set;
 * these files are the git backup and local/dev fallback.
 *
 * Usage:
 *   node scripts/optimize-site-images.mjs
 */
import { mkdir, readdir, stat } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = '/opt/cursor/artifacts/assets';

const HEROES = ['contact', 'schools'];
const SECTIONS = [
  'listings',
  'valuation',
  'golf',
  'recreation',
  'office-exterior',
  'luxury-interior',
  'new-construction',
];
const PROPERTIES = [
  'property-golf',
  'property-luxury',
  'property-new',
  'property-single',
];

async function findSource(name) {
  const files = await readdir(SOURCE_DIR);
  return files.find((f) => path.parse(f).name === name && /\.(jpg|jpeg|png|webp)$/i.test(f));
}

async function writeHero(name, input) {
  const outDir = 'public/images/heroes';
  await mkdir(outDir, { recursive: true });

  await sharp(input)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`));

  await sharp(input)
    .rotate()
    .resize({ width: 768, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(outDir, `${name}-mobile.jpg`));

  await sharp(input)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(outDir, `${name}.webp`));

  await sharp(input)
    .rotate()
    .resize({ width: 768, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(outDir, `${name}-mobile.webp`));

  const meta = await sharp(path.join(outDir, `${name}.jpg`)).metadata();
  console.log(`hero  ${name}: ${meta.width}x${meta.height}`);
}

async function writeSized(outDir, name, input, width) {
  await mkdir(outDir, { recursive: true });

  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`));

  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(outDir, `${name}.webp`));

  const meta = await sharp(path.join(outDir, `${name}.jpg`)).metadata();
  console.log(`${path.basename(outDir).padEnd(10)} ${name}: ${meta.width}x${meta.height}`);
}

const sourceFiles = await readdir(SOURCE_DIR);

for (const name of [...HEROES, ...SECTIONS, ...PROPERTIES]) {
  const file = sourceFiles.find(
    (f) => path.parse(f).name === name && /\.(jpg|jpeg|png|webp)$/i.test(f),
  );
  if (!file) {
    console.warn(`Skip ${name}: no source in ${SOURCE_DIR}`);
    continue;
  }
  const input = path.join(SOURCE_DIR, file);
  const info = await stat(input);
  if (info.size < 1000) {
    console.warn(`Skip ${name}: too small`);
    continue;
  }

  if (HEROES.includes(name)) {
    await writeHero(name, input);
  } else if (SECTIONS.includes(name)) {
    await writeSized('public/images/sections', name, input, 1400);
  } else {
    await writeSized('public/images/properties', name, input, 900);
  }
}

console.log('\nGit backup written under public/images/. Next: npm run images:cf-sync');
