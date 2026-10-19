/**
 * Internal Link Verification Script
 * Checks all internal href links across all HTML files in dist/
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

function getAllHtmlFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

export interface BrokenLink {
  sourceFile: string;
  sourceUrl: string;
  targetHref: string;
  expectedFile: string;
}

export function runLinkCheck(): { pass: boolean; totalLinks: number; brokenLinks: BrokenLink[] } {
  console.log('[Check-Links] 开始全站内部链接连通性检查...');
  const files = getAllHtmlFiles(DIST_DIR);
  const brokenLinks: BrokenLink[] = [];
  let totalLinks = 0;

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relative = path.relative(DIST_DIR, filePath).replace(/\\/g, '/');
    const sourceUrl = '/' + relative.replace(/index\.html$/, '');

    // Strip scripts and styles so inline JS templates are not mistaken for real DOM links
    const htmlWithoutScripts = content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    // Extract all href attributes on <a> tags
    const aTagMatches = htmlWithoutScripts.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi);

    for (const match of aTagMatches) {
      const rawHref = match[1].trim();

      // Skip external links, anchors, mailto, javascript, tel
      if (
        rawHref.startsWith('http://') ||
        rawHref.startsWith('https://') ||
        rawHref.startsWith('//') ||
        rawHref.startsWith('#') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('javascript:') ||
        rawHref.startsWith('tel:')
      ) {
        continue;
      }

      totalLinks++;

      // Clean anchor and query string from href
      const cleanHref = rawHref.split('#')[0].split('?')[0];
      if (!cleanHref || cleanHref === '') continue;

      // Resolve file path in dist/
      let normalized = cleanHref;
      if (normalized.startsWith('/')) {
        normalized = normalized.slice(1);
      }

      // Check potential physical file locations
      const candidatePaths = [
        path.join(DIST_DIR, normalized),
        path.join(DIST_DIR, normalized, 'index.html'),
        path.join(DIST_DIR, `${normalized}.html`),
      ];

      const exists = candidatePaths.some(p => fs.existsSync(p));

      if (!exists) {
        brokenLinks.push({
          sourceFile: relative,
          sourceUrl,
          targetHref: rawHref,
          expectedFile: path.join('dist', normalized),
        });
      }
    }
  }

  console.log(`[Check-Links] 检查完成: 共分析 ${totalLinks} 个内部链接，发现 ${brokenLinks.length} 个断链。`);

  if (brokenLinks.length > 0) {
    console.error('[Check-Links] 发现以下失效内部链接:');
    brokenLinks.forEach(b => {
      console.error(`   ✗ [页面: ${b.sourceUrl}] -> 目标失效: ${b.targetHref}`);
    });
  }

  const pass = brokenLinks.length === 0;
  console.log(`[Check-Links] 判定结果: ${pass ? 'PASS ✓' : 'FAIL ✗'}`);
  return { pass, totalLinks, brokenLinks };
}

// Always execute when run as script
const { pass } = runLinkCheck();
if (!pass) process.exit(1);
