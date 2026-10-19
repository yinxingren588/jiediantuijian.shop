# 节点推荐网 (jiediantuijian.shop) - Bing SEO 专业中文机场推荐建站系统

> 专为 **Bing 搜索引擎自然流量** 深度定制的高性能中文机场与网络节点资讯门户系统。采用 Astro SSG 架构、Tailwind CSS、TypeScript 与结构化数据体系。

---

## 一、核心技术特性

- **静态优先 (SSG)**：全站 45+ 页面在构建时完全生成纯 HTML，Bingbot 蜘蛛直接抓取正文，零 JavaScript 渲染依赖。
- **Bing SEO 专项优化**：
  - 规范化 `https://jiediantuijian.shop/` 正式域名与尾斜杠策略。
  - 自动生成 `sitemap-index.xml` 与爬虫友好 `robots.txt`。
  - 全站嵌入 Organization, WebSite, BreadcrumbList, TechArticle 及 FAQPage 结构化数据 (JSON-LD)。
  - 原生集成 **IndexNow 协议**（防泛滥增量推送模块）。
- **统一机场数据模型 (`src/data/airports.ts`)**：
  - 包含 5 大代表性经过实测核验的服务商（FlyCloud、WestData、StarNet、LightSpeed、SpeedCat）。
  - 单一数据源驱动卡片、横评表、详情页与对比工具，拒绝数据重复硬编码。
- **四大排行榜与对比工具**：
  - 综合实力榜、高性价比单价榜（自动折算倍率）、稳定性专线榜、低预算月付榜。
  - 客户端交互式多维对比工具（支持 2-4 家自由挑选与动态渲染）。
- **全平台使用教程与博客体系**：
  - Windows、Android、iOS、macOS 完整新手客户端实战指南。
  - 选购避坑指南、双机场容灾备份、延迟丢包科普与 ChatGPT 访问受限深度排查。

---

## 二、项目目录结构

```text
├── docs/                         # SEO 关键词地图、验收报告与部署指南
│   ├── keyword-map.csv           # Bing 主攻关键词落地映射表
│   ├── final-audit.md            # 全站自动化 QA 验收报告 (14项全部 PASS)
│   ├── bing-webmaster-guide.md   # 必应站长平台官方接入实操指南
│   └── cloudflare-deployment.md  # Cloudflare Pages 部署说明
├── public/                       # 静态公开资源
│   ├── favicon.svg               # 原创品牌矢量图标
│   ├── robots.txt                # 蜘蛛引导规则
│   └── d7a5e8c1...txt            # IndexNow API 验证文件
├── scripts/                      # 自动化工程脚本
│   ├── indexnow.ts               # IndexNow 增量推送工具 (npm run indexnow)
│   ├── audit-seo.ts              # SEO 标题/描述/H1/Canonical 自动化审计
│   ├── check-links.ts            # 全站内部链接连通性检查 (零死链)
│   └── validate-content.ts       # 全站内容真实性与数据模型核验
├── src/
│   ├── components/               # UI 与 SEO 核心组件
│   ├── content/                  # Markdown 内容合集 (教程、博客、专业词典)
│   ├── data/airports.ts          # 统一结构化机场数据库与加权算法
│   ├── layouts/                  # BaseLayout 与 ArticleLayout
│   └── pages/                    # 路由落地页 (首页、专题、排行、评测、对比)
├── astro.config.mjs              # Astro 配置文件
├── tailwind.config.mjs           # Tailwind CSS 配置文件
└── package.json                  # 依赖与脚本
```

---

## 三、常用命令

```bash
# 本地开发调试
npm run dev

# 生产环境构建 (生成 dist/ 静态目录)
npm run build

# 本地预览构建产物
npm run preview

# 自动化全套 QA 验收测试 (SEO审计 + 链接检查 + 内容核验)
npm run qa

# 执行 IndexNow 增量实时推送 (向 Bing 蜘蛛推送最新更新)
npm run indexnow
```

---

## 四、部署与上线

本站已完整适配 **Cloudflare Pages**：
- **构建命令**：`npm run build`
- **构建输出目录**：`dist`
- **正式绑定域名**：`jiediantuijian.shop`
- 详细图文部署指引请参阅 [docs/cloudflare-deployment.md](docs/cloudflare-deployment.md)。
