#!/usr/bin/env node
/**
 * Full OG image workflow: optimize → deploy.
 *
 * Usage:
 *   npm run og:publish
 *   npm run og:publish -- "Custom commit message"
 *   npm run og:publish -- /path/to/source.jpg "Custom commit message"
 */
import { execSync } from 'child_process';

const args = process.argv.slice(2);
const sourcePath = args[0]?.startsWith('/') ? args.shift() : undefined;
const deployMsg = args.join(' ').trim() || 'Update Open Graph / Twitter share image';

const optimizeCmd = sourcePath
  ? `node scripts/optimize-og.mjs ${JSON.stringify(sourcePath)}`
  : 'node scripts/optimize-og.mjs';

execSync(optimizeCmd, { stdio: 'inherit' });
execSync(`node scripts/og-deploy.mjs ${JSON.stringify(deployMsg)}`, { stdio: 'inherit' });
