#!/usr/bin/env node
// Post-processes react-snap HTML output to remove render-blocking resources
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const outDir = join(process.cwd(), 'out');

function processHtml(filePath) {
  let html = readFileSync(filePath, 'utf-8');

  // Remove render-blocking main CSS link (kept as preload with onload)
  html = html.replace(
    /<link rel="stylesheet" crossorigin="" href="\/assets\/[^"]+\.css">/g,
    ''
  );

  // Remove ANY Google Fonts stylesheet link that doesn't have media="all" already (i.e., render-blocking)
  // Keep only the ones with media="all" onload= (async) or preload
  html = html.replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]+>/g, (match) => {
    if (match.includes('media=') || match.includes('onload=')) return match;
    return ''; // remove render-blocking
  });

  // Remove ANY Remixicon stylesheet link that doesn't have media="all" (render-blocking)
  html = html.replace(/<link rel="stylesheet" href="https:\/\/cdn\.jsdelivr\.net\/npm\/remixicon[^>]+>/g, (match) => {
    if (match.includes('media=') || match.includes('onload=')) return match;
    return ''; // remove render-blocking
  });

  writeFileSync(filePath, html);
}

function walkDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.endsWith('.html')) {
      processHtml(fullPath);
      console.log(`Processed: ${fullPath.replace(outDir, '')}`);
    }
  }
}

walkDir(outDir);
console.log('Post-processing complete.');
