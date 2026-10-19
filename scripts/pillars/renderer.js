import fs from 'fs';
import path from 'path';

export function renderArticle(data) {
  // If Schema B is used (Pillars 7 - 10)
  if (data.coreConceptContent || data.summaryPoints) {
    const tags = data.tags || [
      "节点推荐",
      "机场推荐",
      data.tag,
      data.focus
    ].filter(Boolean);

    const tableMarkdown = (data.specTableHeaders && data.specTableRows) ? `
### 关键技术指标与多方案对比

| ${data.specTableHeaders.join(' | ')} |
| ${data.specTableHeaders.map(() => ':---').join(' | ')} |
${data.specTableRows.map(row => `| ${row.join(' | ')} |`).join('\n')}
` : '';

    const codeMarkdown = data.codeContent ? `
### ${data.codeBlockTitle || '生产级配置与实操代码'}

\`\`\`${data.codeLanguage || 'yaml'}
${data.codeContent.trim()}
\`\`\`
` : '';

    const stepsMarkdown = (data.actionPlanSteps && data.actionPlanSteps.length > 0) ? `
#### 推荐实施执行路线
${data.actionPlanSteps.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}
` : '';

    const troubleshootingMarkdown = (data.troubleshootingScenarios && data.troubleshootingScenarios.length > 0) ? `
## 常见疑难故障排查与实战应对
${data.troubleshootingScenarios.map((sc, idx) => `
### 场景 ${idx + 1}：${sc.symptom}
- **底层成因分析**：${sc.cause}
- **针对性解决方案**：${sc.solution}
`).join('\n')}
` : '';

    const summaryBlock = (data.summaryPoints && data.summaryPoints.length > 0) ? `
> **核心导读与技术画像**：
> - **适用对象**：${data.targetAudience || '开发者与出海用户'}
> - **技术难度**：${data.difficulty || '进阶实操'} | **建议阅读时间**：${data.readingTime || '10 分钟'}
> - **核心要点**：
${data.summaryPoints.map(p => `>   - ${p}`).join('\n')}
` : '';

    return `---
title: "${data.title}"
description: "${data.description}"
publishDate: "${data.publishDate}"
updatedDate: "${data.updatedDate || '2026-03-29'}"
author: "节点推荐评测编辑部"
category: "${data.category}"
tags:
${tags.map(t => `  - "${t}"`).join('\n')}
---
${summaryBlock}
## ${data.coreConceptTitle || '核心技术原理与架构剖析'}

${data.coreConceptContent ? data.coreConceptContent.trim() : ''}
${tableMarkdown}
---

## 生产级配置与工程落地指南
${codeMarkdown}${stepsMarkdown}
---
${troubleshootingMarkdown}
---

## 编辑部结论与权威选型指引

${data.verdict || '在出海业务与工程化实践中，根据实际场景科学选型与合规配置，是保障网络高可用与数据安全的基石。'}

---

> **延伸阅读与进阶推荐**：
> - [2026 最新机场推荐与综合测评](/review/) - 全网主流品牌深度横评与测速表现
> - [机场多维度综合对比工具](/compare/) - 多维度对比各品牌核心优势与延迟
> - [2026 年度机场性能排行榜](/ranking/overall/) - 实时更新的权威综合实力与性价比排名
`;
  }

  // Schema A (Pillars 1 - 6)
  const tags = data.tags || [
    "节点推荐",
    "机场推荐",
    data.category
  ];

  const tableMarkdown = data.table ? `
### ${data.tableTitle || '关键参数与技术选型对比'}

| ${data.table.headers.join(' | ')} |
| ${data.table.headers.map(() => ':---').join(' | ')} |
${data.table.rows.map(row => `| ${row.join(' | ')} |`).join('\n')}
` : '';

  const codeMarkdown = data.codeSnippet ? `
### 生产级配置与实操代码

\`\`\`${data.codeType || 'yaml'}
${data.codeSnippet.trim()}
\`\`\`
` : '';

  const stepsMarkdown = (data.actionSteps && data.actionSteps.length > 0) ? `
#### 核心实施要点
${data.actionSteps.map((step, idx) => `${idx + 1}. **${step.title}**：${step.detail}`).join('\n')}
` : '';

  const troubleshootingMarkdown = (data.troubleshootingItems && data.troubleshootingItems.length > 0) ? `
## ${data.h2_troubleshoot || '常见故障排查与实战避坑指南'}

${data.troubleshootingItems.map((item, idx) => `
### 场景 ${idx + 1}：${item.symptom}
- **底层原因剖析**：${item.reason}
- **针对性解决对策**：${item.solution}
`).join('\n')}
` : '';

  const conclusionMarkdown = (data.conclusionPoints && data.conclusionPoints.length > 0) ? `
## ${data.h2_conclusion || '编辑部总结与科学选型建议'}

${data.conclusionPoints.map((pt, idx) => `${idx + 1}. **${pt.title}**：${pt.content}`).join('\n\n')}
` : '';

  const relatedLinksMarkdown = (data.callToActionLinks && data.callToActionLinks.length > 0) ? `
---

> **相关资源与深度评测导航**：
${data.callToActionLinks.map(l => `- [${l.text}](${l.url}) - ${l.desc}`).join('\n')}
` : '';

  return `---
title: "${data.title}"
description: "${data.description}"
publishDate: "${data.publishDate}"
updatedDate: "${data.updatedDate || '2026-03-29'}"
author: "节点推荐评测编辑部"
category: "${data.category}"
tags:
${tags.map(t => `  - "${t}"`).join('\n')}
---

## ${data.h2_intro || '背景与行业现状分析'}

${(data.introParagraphs || []).join('\n\n')}

---

## ${data.h2_deepdive || '技术原理解析与运作机制'}

${(data.deepdiveParagraphs || []).join('\n\n')}
${tableMarkdown}
---

## ${data.h2_action || '实操配置与工程化方案'}
${codeMarkdown}${stepsMarkdown}
---
${troubleshootingMarkdown}
---
${conclusionMarkdown}${relatedLinksMarkdown}
`;
}

export function saveArticle(data, blogDir) {
  const filePath = path.join(blogDir, `${data.slug}.md`);
  const content = renderArticle(data);
  fs.writeFileSync(filePath, content, 'utf8');
}
