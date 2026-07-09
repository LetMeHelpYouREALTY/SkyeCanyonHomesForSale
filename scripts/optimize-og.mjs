/**
 * Optimize Open Graph / Twitter share image (1200×630).
 *
 * Usage:
 *   npm run optimize:og
 *   npm run optimize:og -- /path/to/source.jpg
 *   node scripts/optimize-og.mjs [sourcePath] [outputName]
 */
import { mkdir, stat } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const DEFAULT_SOURCE = '/opt/cursor/artifacts/assets/skye-canyon-og-source.jpg';
const OUT_DIR = 'public/images/og';
const OUTPUT_NAME = process.argv[3] ?? 'skye-canyon-homes';
const SOURCE = process.argv[2] ?? DEFAULT_SOURCE;

await mkdir(OUT_DIR, { recursive: true });

let inputStat;
try {
  inputStat = await stat(SOURCE);
} catch {
  console.error(`OG source not found: ${SOURCE}`);
  console.error('Save generated image to /opt/cursor/artifacts/assets/skye-canyon-og-source.jpg');
  process.exit(1);
}

if (inputStat.size < 1000) {
  console.error(`Source file too small (${inputStat.size} bytes) — likely corrupt`);
  process.exit(1);
}

const jpgOut = path.join(OUT_DIR, `${OUTPUT_NAME}.jpg`);
const webpOut = path.join(OUT_DIR, `${OUTPUT_NAME}.webp`);

await sharp(SOURCE)
  .rotate()
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(jpgOut);

await sharp(SOURCE)
  .rotate()
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
  .webp({ quality: 82 })
  .toFile(webpOut);

const meta = await sharp(jpgOut).metadata();
const jpgStat = await stat(jpgOut);
const webpStat = await stat(webpOut);

console.log(`OK OG ${OUTPUT_NAME}: ${meta.width}x${meta.height}`);
console.log(`  JPEG: ${Math.round(jpgStat.size / 1024)} KB → ${jpgOut}`);
console.log(`  WebP: ${Math.round(webpStat.size / 1024)} KB → ${webpOut}`);
console.log('\nUsed by src/lib/metadata.ts → defaultOgImage');
console.log('Deploy: npm run og:deploy');
