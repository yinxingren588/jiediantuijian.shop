import fs from 'fs';

const content = fs.readFileSync('C:/Users/user/.gemini/antigravity/brain/2fe0bbae-39df-4ba4-a1c5-f7602e9ccfb4/.system_generated/steps/326/content.md', 'utf-8');
const articles = content.match(/<article[\s\S]*?<\/article>/g) || [];

const results = [];

articles.forEach((art, idx) => {
  const h3Match = art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const name = h3Match ? h3Match[1].replace(/<[^>]+>/g, '').trim() : '';
  const reasonMatch = art.match(/<strong>推荐理由：<\/strong>([\s\S]*?)<\/p>/i);
  const reason = reasonMatch ? reasonMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const coreReasonMatch = art.match(/<strong>核心原因：<\/strong>([\s\S]*?)<\/p>/i);
  const coreReason = coreReasonMatch ? coreReasonMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  results.push({ index: idx + 1, name, coreReason, reason });
  console.log((idx + 1) + '. [' + name + ']');
  console.log('   核心原因: ' + coreReason);
  console.log('   推荐理由: ' + reason);
});

fs.writeFileSync('scripts/reasons.json', JSON.stringify(results, null, 2));
