#!/usr/bin/env node
/**
 * Full hero image workflow: optimize → deploy.
 *
 * Usage:
 *   npm run hero:publish -- new-page
 *   npm run hero:publish -- new-page "Custom commit message"
 *
 * Prerequisite: save source to /opt/cursor/artifacts/assets/new-page.jpg
 */
import { execSync } from 'child_process';

const name = process.argv[2];
const commitMessage = process.argv.slice(3).join(' ').trim();

if (!name) {
  console.error('Usage: npm run hero:publish -- <hero-name> [commit message]');
  console.error('Example: npm run hero:publish -- eaglepointe');
  process.exit(1);
}

execSync(`node scripts/optimize-heroes.mjs ${name}`, { stdio: 'inherit' });

console.log(`\nRegister in src/data/hero-images.ts if needed:`);
console.log(`  '${name}': hero('${name}', 'Alt text for ${name}'),`);

const deployMsg = commitMessage || `Add hero image: ${name}`;
execSync(`node scripts/hero-deploy.mjs ${JSON.stringify(deployMsg)}`, { stdio: 'inherit' });
