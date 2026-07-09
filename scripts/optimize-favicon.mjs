/**
 * Generate favicon + PWA icons from source artwork.
 *
 * Usage:
 *   npm run optimize:favicon
 *   node scripts/optimize-favicon.mjs [sourcePath]
 */
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const SOURCE =
  process.argv[2] ?? '/opt/cursor/artifacts/assets/favicon-source.png';
const ICONS_DIR = 'public/icons';
const MANIFEST_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const ICO_SIZES = [16, 32, 48];

await mkdir(ICONS_DIR, { recursive: true });
await mkdir('src/app', { recursive: true });

const pipeline = sharp(SOURCE).rotate().resize(512, 512, {
  fit: 'cover',
  position: 'centre',
});

// Next.js App Router file-based metadata
await pipeline
  .clone()
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toFile('src/app/icon.png');

await pipeline
  .clone()
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile('src/app/apple-icon.png');

// PWA manifest icons
for (const size of MANIFEST_SIZES) {
  await pipeline
    .clone()
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
}

// favicon.ico (multi-size)
const icoPaths = [];
for (const size of ICO_SIZES) {
  const icoPath = path.join(ICONS_DIR, `icon-${size}x${size}.png`);
  await pipeline
    .clone()
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(icoPath);
  icoPaths.push(icoPath);
}

const icoBuffer = await pngToIco(icoPaths);
await writeFile('public/favicon.ico', icoBuffer);

console.log('Favicon assets generated:');
console.log('  src/app/icon.png (32×32)');
console.log('  src/app/apple-icon.png (180×180)');
console.log('  public/favicon.ico');
console.log(`  public/icons/icon-{${MANIFEST_SIZES.join(',')}}.png`);
