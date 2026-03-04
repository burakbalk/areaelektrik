#!/usr/bin/env node
// Orchestrates pre-rendering: tries react-snap first (needs Chrome), falls back to committed HTML
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const cwd = process.cwd();

// Try to find a Chrome/Brave executable for react-snap
const chromePaths = [
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

const availableChrome = chromePaths.find(p => existsSync(p));

if (availableChrome) {
  console.log(`Found browser: ${availableChrome}`);
  // Update react-snap config temporarily via env
  process.env.PUPPETEER_EXECUTABLE_PATH = availableChrome;
  try {
    execSync('react-snap', { stdio: 'inherit', cwd, env: { ...process.env } });
    execSync('node scripts/postprocess.js', { stdio: 'inherit', cwd });
    // Update the prerendered/ directory with fresh output
    execSync('node scripts/update-prerendered.js', { stdio: 'inherit', cwd });
    console.log('Pre-rendering complete (live).');
  } catch (e) {
    console.log('react-snap failed, falling back to committed pre-rendered HTML.');
    execSync('node scripts/deploy-prerendered.js', { stdio: 'inherit', cwd });
  }
} else {
  console.log('No Chrome found. Using committed pre-rendered HTML.');
  execSync('node scripts/deploy-prerendered.js', { stdio: 'inherit', cwd });
}
