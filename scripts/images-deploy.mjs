#!/usr/bin/env node
/**
 * Deploy all site images (heroes + OG) to production.
 *
 * Usage:
 *   npm run images:deploy
 *   npm run images:deploy -- "Update site images"
 */
import { execSync } from 'child_process';

const message =
  process.argv.slice(2).join(' ').trim() ||
  'Update site images (heroes + OG)';

try {
  const status = execSync(
    'git status --porcelain public/images/heroes public/images/og',
    { encoding: 'utf8' },
  ).trim();

  if (!status) {
    console.log('No image changes — nothing to deploy.');
    process.exit(0);
  }

  execSync('git add public/images/heroes/ public/images/og/', { stdio: 'inherit' });
  execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('\nImages pushed to main (Vercel production deploy).');
} catch (error) {
  const err = error instanceof Error ? error : new Error(String(error));
  console.error(err.message);
  process.exit(1);
}
