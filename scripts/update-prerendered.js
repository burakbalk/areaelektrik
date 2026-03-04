#!/usr/bin/env node
// Updates the prerendered/ directory from the current out/ build output.
// Run this after react-snap + postprocess to keep prerendered/ in sync.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const outDir = join(process.cwd(), 'out');
const prerenderedDir = join(process.cwd(), 'prerendered');

mkdirSync(prerenderedDir, { recursive: true });

function syncHtmlFiles(srcDir, destDir) {
  if (!existsSync(srcDir)) return;
  const entries = readdirSync(srcDir);
  for (const entry of entries) {
    const srcPath = join(srcDir, entry);
    const destPath = join(destDir, entry);
    const stat = statSync(srcPath);
    if (stat.isDirectory() && !['assets', 'images'].includes(entry)) {
      mkdirSync(destPath, { recursive: true });
      syncHtmlFiles(srcPath, destPath);
    } else if (entry === 'index.html' || (entry.endsWith('.html') && srcDir === outDir)) {
      const content = readFileSync(srcPath, 'utf-8');
      writeFileSync(destPath, content);
      console.log(`Updated prerendered: ${destPath.replace(prerenderedDir, '')}`);
    }
  }
}

syncHtmlFiles(outDir, prerenderedDir);
console.log('prerendered/ directory updated.');
