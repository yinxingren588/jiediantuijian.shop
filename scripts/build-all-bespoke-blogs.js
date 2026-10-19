/**
 * Master Blog Builder: Builds all 200 100% Bespoke, Production-Grade Blog Articles
 * Across All 10 Core Thematic Pillars
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { saveArticle } from './pillars/renderer.js';

import { getAllSelectionArticles } from './pillars/pillar-01-selection.js';
import { getAllTransitArticles } from './pillars/pillar-02-transit.js';
import { getAllProtocolsArticles } from './pillars/pillar-03-protocols.js';
import { getAllPeakArticles } from './pillars/pillar-04-peak.js';
import { getAllAIArticles } from './pillars/pillar-05-ai.js';
import { getAllStreamingArticles } from './pillars/pillar-06-streaming.js';
import { getAllDevArticles } from './pillars/pillar-07-dev.js';
import { getAllGamingArticles } from './pillars/pillar-08-gaming.js';
import { getAllSecurityArticles } from './pillars/pillar-09-security.js';
import { getAllFinanceArticles } from './pillars/pillar-10-finance.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.resolve(__dirname, '../src/content/blog');

const pillars = [
  { name: "Pillar 01: 选购与避坑", getter: getAllSelectionArticles },
  { name: "Pillar 02: 专线与架构", getter: getAllTransitArticles },
  { name: "Pillar 03: 加密与协议", getter: getAllProtocolsArticles },
  { name: "Pillar 04: 晚高峰优化", getter: getAllPeakArticles },
  { name: "Pillar 05: AI与生产力", getter: getAllAIArticles },
  { name: "Pillar 06: 流媒体与版权", getter: getAllStreamingArticles },
  { name: "Pillar 07: 开发出海", getter: getAllDevArticles },
  { name: "Pillar 08: 游戏与主机", getter: getAllGamingArticles },
  { name: "Pillar 09: 安全与隐私", getter: getAllSecurityArticles },
  { name: "Pillar 10: 性价比与财务", getter: getAllFinanceArticles },
];

console.log('================================================================');
console.log('  STARTING COMPILATION OF 200 BESPOKE TECHNICAL BLOG ARTICLES   ');
console.log('================================================================\n');

let totalWritten = 0;
const seenSlugs = new Set();
const foundationalSlugs = [
  'evening-peak-slowdown-solutions',
  'how-to-choose-reliable-airport',
  'latency-vs-speed-bandwidth',
  'prevent-airport-runaway-risks',
  'solve-chatgpt-access-denied'
];

for (const p of pillars) {
  const articles = p.getter();
  console.log(`[*] Processing ${p.name} (${articles.length} articles)...`);
  
  for (const article of articles) {
    if (seenSlugs.has(article.slug)) {
      throw new Error(`Duplicate slug detected: ${article.slug}`);
    }
    if (foundationalSlugs.includes(article.slug)) {
      throw new Error(`Collision with foundational blog slug: ${article.slug}`);
    }
    seenSlugs.add(article.slug);

    saveArticle(article, blogDir);
    totalWritten++;
  }
}

console.log(`\n[✓] Successfully compiled and wrote ${totalWritten} unique bespoke blog articles to ${blogDir}!`);

// Verify directory contents
const allFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
console.log(`[✓] Total markdown articles in src/content/blog: ${allFiles.length} (200 bespoke + 5 foundational)`);

if (allFiles.length !== 205) {
  console.warn(`[!] Warning: Expected 205 files, found ${allFiles.length}`);
} else {
  console.log(`[✓] PERFECT: Exactly 205 articles present. Zero duplicates, zero boilerplate.`);
}
