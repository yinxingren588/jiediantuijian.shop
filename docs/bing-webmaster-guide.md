# Bing Webmaster Tools (必应站长平台) 完整配置与实操指南

本站针对 **Bing 搜索引擎** 进行深度技术优化，正式域名为：`https://jiediantuijian.shop`。

在网站部署上线到 Cloudflare Pages 或自有服务器后，请按照以下步骤完成在 Bing Webmaster Tools 的官方接入与验证。

---

## 一、网站所有权验证 (Site Verification)

> **操作提示**：此步骤需要人工访问 [Bing Webmaster Tools](https://www.bing.com/webmasters) 并使用 Microsoft 账号登录。

### 推荐方法：DNS CNAME 验证 或 HTML 标签验证
1. 登录 Bing Webmaster Tools 后，点击左上角“添加网站”。
2. 输入网站正式 URL：`https://jiediantuijian.shop`。
3. 选择验证方式：
   - **方式 A (推荐)：导入 Google Search Console (GSC)**：如果你已在 GSC 验证域名所有权，点击一键授权导入即可秒级通过。
   - **方式 B：DNS CNAME 记录**：在域名解析商（如 Cloudflare DNS）添加 Bing 指定的 CNAME 记录。
   - **方式 C：HTML Meta 标签验证**：将 Bing 给出的 `<meta name="msvalidate.01" content="..." />` 填入 `src/components/SEO.astro` 并重新发布。

---

## 二、Sitemap (网站地图) 提交

1. 在 Bing 站长后台左侧导航栏点击 **“站点地图” (Sitemaps)**。
2. 点击右上角 **“提交站点地图”**。
3. 输入本站自动生成的标准 XML Sitemap 索引地址：
   ```text
   https://jiediantuijian.shop/sitemap-index.xml
   ```
4. 点击“提交”。
5. 提交后系统状态将显示为“已处理”，Bingbot 将定期循着索引抓取全站各分类与文章页面。

---

## 三、IndexNow 实时推送验证

本站已完整集成 IndexNow 协议：
- **验证 Key**：`d7a5e8c1b92049e7b28d6139f40e79ac`
- **验证文件 URL**：`https://jiediantuijian.shop/d7a5e8c1b92049e7b28d6139f40e79ac.txt`
- **本地推送命令**：`npm run indexnow`

### 验证步骤：
1. 网站上线后，浏览器直接打开 `https://jiediantuijian.shop/d7a5e8c1b92049e7b28d6139f40e79ac.txt`，确保返回纯文本 Key 且 HTTP 状态码为 200。
2. 在 Bing Webmaster Tools 后台，进入 **“IndexNow”** 仪表盘。
3. 可以在后台直观看到最近通过 API 接收到的 URL 列表及接收时间戳。

---

## 四、URL Inspection (网址检查与即时提交)

当发布了新文章或对重点排行榜页面进行了大版本更新时：
1. 在顶部搜索框直接输入目标 URL，例如：
   `https://jiediantuijian.shop/ranking/overall/`
2. 点击“检查” (Inspect)。
3. 系统将展示该页面当前在 Bing 索引库中的状态（抓取成功、索引状态、Canonical 匹配情况）。
4. 点击 **“请求编入索引” (Request Indexing)**，加速搜索引擎蜘蛛的重访。

---

## 五、Search Performance (搜索效果监测)

在 **“搜索效果”** 报表中重点跟踪本次指定的四大核心关键词表现：
- `节点推荐`
- `机场推荐`
- `机场节点推荐`
- `机场节点`

重点观察指标：
- **展现量 (Impressions)**
- **点击量 (Clicks)**
- **平均点击率 (CTR)**
- **平均排名 (Average Position)**

---

## 六、Index Coverage & Crawl Issues (抓取与收录异常排查)

1. **抓取控制 (Crawl Control)**：可在后台设置抓取时段，根据需要配置 Bingbot 在北京时间凌晨发起深度抓取。
2. **抓取问题 (Crawl Issues)**：定期查看是否有 4xx、5xx 错误。本站静态构建已完全根除死链与动态服务器崩溃风险。
3. **Robots.txt 测试工具**：后台自带 robots 测试器，确保 `https://jiediantuijian.shop/robots.txt` 规则被正确解析，无重要页面被意外拦截。
