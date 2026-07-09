#!/usr/bin/env node
/**
 * Deploy OG images to production (git add, commit, push).
 *
 * Usage:
 *   npm run og:deploy
 *   npm run og:deploy -- "Update social share preview image"
 */
import { execSync } from 'child_process';

const message =
  process.argv.slice(2).join(' ').trim() ||
  'Update Open Graph / Twitter share images';

try {
  const status = execSync('git status --porcelain public/images/og', {
    encoding: 'utf8',
  }).trim();

  if (!status) {
    console.log('No changes in public/images/og — nothing to deploy.');
    process.exit(0);
  }

  execSync('git add public/images/og/', { stdio: 'inherit' });
  execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('\nOG images pushed to main (Vercel production deploy).');
} catch (error) {
  const err = error instanceof Error ? error : new Error(String(error));
  console.error(err.message);
  process.exit(1);
}
