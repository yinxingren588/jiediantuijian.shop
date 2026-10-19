# Cloudflare Pages 部署与生产环境配置指南

本站 `jiediantuijian.shop` 专为 Cloudflare Pages 的全球边缘静态分发网络进行优化。

---

## 一、一键连接 GitHub 部署

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)。
2. 点击左侧导航栏 **“Workers 与 Pages”**。
3. 点击 **“创建应用程序” (Create application)** → 选择 **“Pages”** 标签页。
4. 点击 **“连接到 Git” (Connect to Git)**。
5. 授权访问你的 GitHub 账户，并选择仓库：
   ```text
   yinxingren588/jiediantuijian.shop
   ```
6. 点击“开始设置”。

---

## 二、构建参数配置 (Build Settings)

在构建配置页面填写以下参数：

| 配置项 | 推荐值 | 说明 |
| :--- | :--- | :--- |
| **项目名称** | `jiediantuijian` | 自定义名称 |
| **生产分支 (Production branch)** | `main` | 默认主分支 |
| **框架预设 (Framework preset)** | `Astro` | 自动识别 |
| **构建命令 (Build command)** | `npm run build` | 静态编译生成 |
| **构建输出目录 (Output directory)** | `dist` | Astro 输出目标目录 |
| **根目录 (Root directory)** | `/` | 留空或默认根目录 |

### 环境变量 (Environment Variables)
在“环境变量 (Environment variables)”部分添加（确保使用现代 Node 版本）：

| 变量名 | 变量值 |
| :--- | :--- |
| `NODE_VERSION` | `20.18.0` (或 `22.x`) |

点击 **“保存并部署” (Save and Deploy)**。
Cloudflare Pages 将在 1-2 分钟内自动完成依赖安装、静态页面生成并全球 CDN 分发。

---

## 三、绑定自定义正式域名 (Custom Domain)

1. 部署完成后，在 Pages 项目详情页点击 **“自定义域” (Custom domains)** 标签页。
2. 点击 **“设置自定义域”**。
3. 输入域名：`jiediantuijian.shop`（以及可选的 `www.jiediantuijian.shop`）。
4. 如果你的域名托管在 Cloudflare DNS：系统将自动配置 CNAME 记录并秒级下发免费 SSL/TLS 证书。
5. 如果域名在其他注册商：按照提示添加 CNAME 记录指向你的 `pages.dev` 分配地址。

---

## 四、推荐 Cloudflare 性能与安全设置

在 Cloudflare 仪表盘对 `jiediantuijian.shop` 开启以下推荐选项：
- **SSL/TLS 加密模式**：`完全 (Full)` 或 `完全 (严格) (Full (Strict))`。
- **始终使用 HTTPS (Always Use HTTPS)**：开启。
- **自动缩小 (Auto Minify)**：HTML、CSS、JS 全部勾选。
- **Brotli 压缩**：开启（相比 Gzip 提升 15-20% 压缩率）。
- **早期提示 (Early Hints)**：开启。

---

## 五、持续集成与自动化流水线 (CI/CD)

每次你通过 `git push origin main` 提交新的评测、教程或资费更新后，Cloudflare Pages 会自动监听 Webhook 并触发自动化增量构建与发布，无需人工干预。
部署成功后，在本地终端运行：
```bash
npm run indexnow
```
即可将新发布或更新的 URL 秒级同步推送给 Bing 搜索引擎蜘蛛！
