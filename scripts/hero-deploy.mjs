#!/usr/bin/env node
/**
 * Deploy hero images to production (git add, commit, push).
 *
 * Usage:
 *   npm run hero:deploy
 *   npm run hero:deploy -- "Add eaglepointe subdivision hero"
 */
import { execSync } from 'child_process';

const message =
  process.argv.slice(2).join(' ').trim() ||
  'Update hero images in public/images/heroes';

try {
  const status = execSync('git status --porcelain public/images/heroes', {
    encoding: 'utf8',
  }).trim();

  if (!status) {
    console.log('No changes in public/images/heroes — nothing to deploy.');
    process.exit(0);
  }

  execSync('git add public/images/heroes/', { stdio: 'inherit' });
  execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('\nHero images pushed to main (Vercel production deploy).');
} catch (error) {
  const err = error instanceof Error ? error : new Error(String(error));
  console.error(err.message);
  process.exit(1);
}
