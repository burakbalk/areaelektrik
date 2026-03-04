#!/usr/bin/env node
// Copies pre-rendered HTML files from prerendered/ to out/ after vite build.
// This allows Vercel to serve pre-rendered HTML without needing Chrome/puppeteer.
// The HTML references fixed asset filenames (no hash) so it's safe to reuse.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, copyFileSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';

const prerenderedDir = join(process.cwd(), 'prerendered');
const outDir = join(process.cwd(), 'out');

// Check if prerendered directory exists
if (!existsSync(prerenderedDir)) {
  console.log('No prerendered/ directory found. Skipping.');
  process.exit(0);
}

function copyHtmlFiles(srcDir, destDir) {
  const entries = readdirSync(srcDir);
  for (const entry of entries) {
    const srcPath = join(srcDir, entry);
    const destPath = join(destDir, entry);
    const stat = statSync(srcPath);
    if (stat.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyHtmlFiles(srcPath, destPath);
    } else if (entry.endsWith('.html')) {
      // Read and clean the HTML before copying
      let html = readFileSync(srcPath, 'utf-8');

      // Remove render-blocking stylesheet links (keep only async ones)
      html = html.replace(/<link rel="stylesheet" crossorigin="" href="\/assets\/[^"]+\.css">/g, '');
      html = html.replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]+>/g, (match) => {
        if (match.includes('media=') || match.includes('onload=')) return match;
        return '';
      });
      html = html.replace(/<link rel="stylesheet" href="https:\/\/cdn\.jsdelivr\.net\/npm\/remixicon[^>]+>/g, (match) => {
        if (match.includes('media=') || match.includes('onload=')) return match;
        return '';
      });

      writeFileSync(destPath, html);
      console.log(`Deployed: ${destPath.replace(outDir, '')}`);
    }
  }
}

copyHtmlFiles(prerenderedDir, outDir);
console.log('Pre-rendered HTML deployment complete.');
