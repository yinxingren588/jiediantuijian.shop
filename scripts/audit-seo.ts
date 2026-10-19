/**
 * SEO Automated Audit Script
 * Audits all generated HTML files in dist/
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const DOMAIN = 'https://jiediantuijian.shop';

export interface PageAuditResult {
  file: string;
  urlPath: string;
  title: string | null;
  description: string | null;
  h1Count: number;
  h1Text: string | null;
  canonical: string | null;
  hasRobots: boolean;
  hasSchema: boolean;
  unreplacedVars: string[];
  issues: string[];
}

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

function auditHtml(filePath: string): PageAuditResult {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relative = path.relative(DIST_DIR, filePath).replace(/\\/g, '/');
  const urlPath = '/' + relative.replace(/index\.html$/, '');

  const issues: string[] = [];

  // 1. Title
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) {
    issues.push('缺失 <title> 标签');
  }

  // 2. Meta Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
    || content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;
  if (!description && !relative.includes('404')) {
    issues.push('缺失 meta description');
  }

  // 3. H1 Tags count
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h1Count = h1Matches.length;
  const h1Text = h1Matches.length > 0 ? h1Matches[0].replace(/<[^>]+>/g, '').trim() : null;
  if (h1Count === 0) {
    issues.push('页面缺少 H1 标签');
  } else if (h1Count > 1) {
    issues.push(`页面存在多个 H1 标签 (发现 ${h1Count} 个)`);
  }

  // 4. Canonical
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i)
    || content.match(/<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;
  if (!canonical && !relative.includes('404')) {
    issues.push('缺失 Canonical 标签');
  } else if (canonical && !canonical.startsWith(DOMAIN) && !canonical.startsWith('http')) {
    issues.push(`Canonical URL 未使用正式域名: ${canonical}`);
  }

  // 5. Robots
  const hasRobots = /<meta\s+name=["']robots["']/i.test(content);
  if (!hasRobots) {
    issues.push('缺少 robots meta 标签');
  }

  // 6. Schema JSON-LD
  const hasSchema = /<script\s+type=["']application\/ld\+json["']/i.test(content);
  if (!hasSchema && !relative.includes('404')) {
    issues.push('缺少 Schema.org 结构化数据');
  }

  // 7. Check unreplaced template variables
  const unreplacedVars: string[] = [];
  const varMatches = content.match(/\{\{[^}]+\}\}/g) || [];
  for (const vm of varMatches) {
    unreplacedVars.push(vm);
    issues.push(`发现未替换模板变量: ${vm}`);
  }
  if (/href=["']https?:\/\/(localhost|127\.0\.0\.1)/i.test(content) || /src=["']https?:\/\/(localhost|127\.0\.0\.1)/i.test(content)) {
    issues.push('发现开发环境残留链接 (localhost/127.0.0.1)');
  }

  return {
    file: relative,
    urlPath,
    title,
    description,
    h1Count,
    h1Text,
    canonical,
    hasRobots,
    hasSchema,
    unreplacedVars,
    issues,
  };
}

export function runSeoAudit(): { pass: boolean; results: PageAuditResult[]; duplicateTitles: string[] } {
  console.log('[Audit-SEO] 开始扫描 dist/ 目录生成的所有 HTML 页面...');
  const files = getAllHtmlFiles(DIST_DIR);
  if (files.length === 0) {
    console.error('[Audit-SEO] 错误: dist 目录为空，请先运行 build！');
    return { pass: false, results: [], duplicateTitles: [] };
  }

  const results: PageAuditResult[] = [];
  const titleMap = new Map<string, string[]>();

  for (const file of files) {
    const res = auditHtml(file);
    results.push(res);

    if (res.title) {
      const existing = titleMap.get(res.title) || [];
      existing.push(res.urlPath);
      titleMap.set(res.title, existing);
    }
  }

  const duplicateTitles: string[] = [];
  for (const [title, urls] of titleMap.entries()) {
    if (urls.length > 1) {
      duplicateTitles.push(`重复标题 "${title}" 出现在: ${urls.join(', ')}`);
    }
  }

  let totalIssues = 0;
  for (const res of results) {
    if (res.issues.length > 0) {
      console.warn(`\n[Audit-SEO] 页面问题: ${res.urlPath}`);
      res.issues.forEach(iss => console.warn(`   - ${iss}`));
      totalIssues += res.issues.length;
    }
  }

  if (duplicateTitles.length > 0) {
    console.warn('\n[Audit-SEO] 发现重复 Title:');
    duplicateTitles.forEach(d => console.warn(`   - ${d}`));
    totalIssues += duplicateTitles.length;
  }

  const pass = totalIssues === 0;
  console.log(`\n[Audit-SEO] 扫描完成: 共 ${results.length} 个页面，问题数: ${totalIssues}`);
  console.log(`[Audit-SEO] 判定结果: ${pass ? 'PASS ✓' : 'FAIL ✗'}`);

  return { pass, results, duplicateTitles };
}

// Always execute when run as script
const { pass } = runSeoAudit();
if (!pass) process.exit(1);
