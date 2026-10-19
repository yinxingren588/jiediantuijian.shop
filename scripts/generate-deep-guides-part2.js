/**
 * scripts/generate-deep-guides-part2.js
 * Generates the remaining 19 in-depth, production-grade tutorials (12 to 30)
 * for jiediantuijian.shop
 */

import fs from 'fs';
import path from 'path';

const guidesDir = path.resolve('src/content/guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}

function writeGuide(slug, data) {
  const filePath = path.join(guidesDir, `${slug}.md`);
  const content = `---
title: "${data.title}"
description: "${data.description}"
platform: "${data.platform}"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
${data.recommendedClients.map(c => `  - "${c}"`).join('\n')}
---

${data.body.trim()}
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[Generated Part 2] ${slug}.md (${Buffer.byteLength(content, 'utf8')} bytes)`);
}

// -------------------------------------------------------------
// 12. macOS: Clash Verge Rev
// -------------------------------------------------------------
writeGuide('macos-clash-verge-rev', {
  title: 'macOS 平台 Clash Verge Rev 完整配置指南 (兼容 Apple Silicon M系列与Intel芯片)',
  description: '面向 macOS Sequoia / Sonoma 苹果用户的 Clash Verge Rev 部署实战。详解 Apple Silicon M1~M4 架构原生适配、系统级网络扩展授权、TUN 虚拟网卡模式及终端开发极速代理。',
  platform: 'macOS',
  recommendedClients: ['Clash Verge Rev for Mac', 'Apple Silicon M1-M4', 'Mihomo Core'],
  body: `## 一、macOS 平台代理演进与架构选型

在苹果 Mac 生态中，早期的 ClashX / ClashX Pro 与 Clash for Windows 已全面停止维护。目前针对 macOS（支持最新的 macOS Sequoia 15 与 Sonoma 14），基于 Rust + Tauri 框架的 **Clash Verge Rev** 成为生产力环境的绝对首选。

### 为什么 Mac 用户应当首选 Clash Verge Rev？
1. **原生编译适配 Apple Silicon 芯片**：专门针对 M1/M2/M3/M4 系列芯片编译 ARM64 架构二进制，运行能耗极低，几乎不消耗 MacBook 电池续航，彻底告别旧版 Electron 应用发热卡顿。
2. **底层内置 Mihomo (Clash.Meta) 内核**：原生支持 Hysteria2、TUIC、VLESS-Reality 等现代抗审查协议。
3. **系统级 TUN 虚拟网卡接管**：通过 macOS Network Extensions 驱动，透明接管 Terminal、iTerm2、Homebrew、Docker 及 Git 等终端开发环境。

---

## 二、官方正版下载与安全性权限授权

### 1. 软件获取与架构选择
- 访问官方 GitHub Releases 页面，根据你的 Mac 处理器架构下载：
  - **Apple Silicon 芯片 (M1/M2/M3/M4 系列)**：下载 \`Clash.Verge_x.x.x_aarch64.dmg\`
  - **Intel 处理器芯片**：下载 \`Clash.Verge_x.x.x_x64.dmg\`
- 双击 DMG 镜像，将 \`Clash Verge\` 应用程序图标拖入系统的 \`Applications (应用程序)\` 目录。

### 2. 绕过 Gatekeeper 未识别开发者拦截
首次启动若系统弹窗提示“无法打开，因为来自未识别的开发者”：
1. 打开 Mac **“系统设置” -> “隐私与安全性”**。
2. 向下滑动至“安全性”区域，会看到“已阻止 Clash Verge，因为其非来自已识别的开发者”。
3. 点击旁边的 **“仍要打开”**，输入 Mac 开机密码确认授权即可。

---

## 三、导入机场订阅与自动化更新策略

1. 登录您选购的机场后台（如本站实测推荐的 [隐形人](/review/yinxingren/) 或 [暮光网络](/review/muguang/)）。
2. 在用户控制台复制 **“Clash 订阅地址”**。
3. 打开 Clash Verge Rev，点击左侧导航栏 **“订阅 (Profiles)”**。
4. 在上方地址栏粘贴该 URL，命名为例如“隐形人-高速专线”，点击 **“导入”**。
5. 导入成功后，右键点击该订阅卡片，开启 **“定时更新”**，时间间隔建议设为 1440 分钟（24小时）。

---

## 四、核心工作模式与策略分流编排

点击左侧 **“代理 (Proxies)”** 页面：
- **规则 (Rule) 模式**【日常主力】：国内网站（百度、腾讯视频、网易云等）自动走 \`DIRECT\` 本地光纤直连；海外资源走代理，兼顾访问速度与流量节约。
- **全局 (Global) 模式**：所有流量强制走选定节点。
- **直连 (Direct) 模式**：绕过代理内核。

### 开启系统代理：
点击界面右上角的 **“System Proxy (系统代理)”** 开关。此时 Safari、Chrome、Edge 浏览器均已成功连通全球互联网。

---

## 五、高级实战：开启 TUN 模式接管终端开发流量

对于 Mac 程序员与科研人员，终端里的 \`git clone\`、\`brew install\`、\`pip install\` 默认不读取系统的 HTTP 代理环境变量：
1. 打开 Clash Verge Rev 的 **“设置 (Settings)”**。
2. 找到 **“TUN 模式”** 开关并开启。
3. 系统会弹出钥匙串提权弹窗，提示“Clash Verge 想要安装辅助工具并修改网络设置”，输入 Mac 管理员开机密码允许。
4. 授权完毕后，内核在系统底层注入虚拟网卡设备。此时打开 Terminal 终端，无需配置任何代理环境变量，所有命令行发包已自动全透明加速！

更多适合 macOS 平台的低延迟专线与高性价比节点，欢迎随时查阅本站 [综合实力排行榜](/ranking/overall/) 与 [机场对比工具](/compare/)。`
});

// -------------------------------------------------------------
// 13. macOS: Surge 5
// -------------------------------------------------------------
writeGuide('macos-surge', {
  title: 'macOS 顶级网络调试神器 Surge 5 从入门到精通：规则集与本地重写',
  description: '面向苹果 Mac 高端技术用户的工业级网络工具 Surge 5 深度教程。涵盖托管配置导入、MitM HTTPS 证书解密、本地规则覆写与独立网关模式搭建。',
  platform: 'macOS',
  recommendedClients: ['Surge for Mac', 'Surge 5', 'PonPlugin'],
  body: `## 一、Surge 5 在 macOS 生态中的巅峰地位

在所有苹果 macOS 平台的网络代理与抓包调试软件中，**Surge for Mac** 无论在架构严密性、系统稳定性还是协议调优深度上，都处于无可争议的行业天花板水准。它专为网络工程师、跨境站长及高端极客量身打造，支持：

1. **工业级流量审计与实时抓包**：毫秒级捕获整机每一个进程发起的所有 TCP/UDP 连接、DNS 解析延迟与 TLS 握手时长。
2. **强大的策略组嵌套与逻辑控制**：支持 \`select\` (手动选择)、\`url-test\` (自动优选最低延迟)、\`fallback\` (主备故障自动切换) 以及 \`load-balance\` (多节点并发负载均衡)。
3. **独立网关旁路由模式 (Enhanced Mode / Gateway)**：单台 Mac 可直接充当全家局域网的透明科学上网旁路由！

---

## 二、订阅导入与配置架构设计

### 1. 导入托管配置文件 (Managed Profile)
1. 启动 Surge 5，点击顶部状态栏的 Surge 图标。
2. 选择 **“Profile” -> “Download from URL...”**。
3. 粘贴机场提供的 Surge 专属托管配置链接，命名为“Surge 生产主配置”。
4. 点击下载，下载成功后右键该配置选择 **“Set as Active Profile”** 激活。

### 2. 生产级策略组分流架构参考
Surge 强大的核心在于其层级清晰的策略树（Policy Tree）：

\`\`\`ini
[Proxy Group]
# 主策略组：手动挑选主力专线
Proxy = select, 🇭🇰 香港-IEPL专线, 🇯🇵 日本-IEPL专线, 🇺🇸 美国-双ISP住宅, DIRECT

# 4K 流媒体专用策略：绑定原生解锁节点
Streaming = select, 🇭🇰 香港-IEPL专线, 🇹🇼 台湾-原生解锁, 🇯🇵 日本-IEPL专线

# ChatGPT / Claude 生产力专用：锁定双 ISP 纯净出口
AI-Services = select, 🇺🇸 美国-双ISP住宅, 🇯🇵 日本-IEPL专线

# 自动测速选优组
AutoTest = url-test, 🇭🇰 香港-IEPL专线, 🇯🇵 日本-IEPL专线, url=http://cp.cloudflare.com/generate_204, interval=300, tolerance=50

[Rule]
# 优先匹配特定应用与域名
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/OpenAI/OpenAI.list,AI-Services
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/YouTube/YouTube.list,Streaming
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Netflix/Netflix.list,Streaming

# 国内直连与局域网放行
RULE-SET,SYSTEM,DIRECT
GEOIP,CN,DIRECT
FINAL,Proxy,dns-failed
\`\`\`

---

## 三、开启增强模式 (Enhanced Mode) 与网关接管

1. 点击 Surge 菜单栏图标，勾选 **“Enhanced Mode (增强模式)”**。
2. 首次开启需根据系统提示安装特权辅助程序（Privileged Helper Tool）。
3. 开启后，Surge 接管整机所有网络接口的发包，包括终端命令行、Docker、甚至虚拟机内的全部请求。

Surge 对节点底层吞吐有极高要求，建议在 [稳定性专线榜单](/ranking/stable/) 中挑选具备全 IEPL 内网专线与 BGP 优质入口的服务商，以发挥 Surge 极致的网络调度实力。`
});

// -------------------------------------------------------------
// 14. macOS: Loon for Mac
// -------------------------------------------------------------
writeGuide('macos-loon', {
  title: 'macOS 平台 Loon 独立客户端轻量化配置实操与插件扩展',
  description: '面向苹果 Mac 用户的现代轻巧网络工具 Loon 独立版本使用指南。节点健康自动检测、模块化插件市场安装与全自动分流规则链构建。',
  platform: 'macOS',
  recommendedClients: ['Loon for Mac', 'Loon Plugin', 'Apple Silicon'],
  body: `## 一、Loon for Mac 的核心魅力

**Loon for Mac** 是一款既具备 Surge 级别的高阶网络规则控制能力，又拥有类似小火箭般清爽现代 UI 的代理工具。它原生基于 SwiftUI 构建，对苹果生态的集成极其深入。

### 突出特色：
- **现代化可视化图表**：节点列表原生展示地理旗帜、实时握手延迟曲线与协议类型。
- **模块化插件生态 (Plugin)**：一键安装去网页广告、流媒体解锁检测、重写脚本。
- **iCloud 云端无缝互通**：如果在 iPhone 或 iPad 上同样配置了 Loon，Mac 端打开即可通过 iCloud 云端全自动同屏同步！

---

## 二、配置与订阅添加全流程

1. 在 Mac App Store 中搜索并安装官方正版 **Loon**。
2. 启动应用，点击左侧菜单栏 **“配置” -> “订阅”**。
3. 点击右上角“+”号添加新订阅，填入机场后台的专属订阅 URL，支持正则筛选（如过滤无效节点）。
4. 保存后点击“刷新”，所有可用节点即刻加载完毕。
5. 点击仪表盘主开关，输入系统密码授予 VPN 权限，即可开启无感高速体验。`
});

// -------------------------------------------------------------
// 15. macOS: Shadowrocket for Mac
// -------------------------------------------------------------
writeGuide('macos-shadowrocket', {
  title: 'Mac (Apple Silicon) 运行 Shadowrocket 小火箭配置全技巧',
  description: '在 M系列芯片 Mac 上通过 App Store 直接运行经典 iOS 软件 Shadowrocket 小火箭的安装方法、代理规则设置与快捷键操作。',
  platform: 'macOS',
  recommendedClients: ['Shadowrocket', 'Apple Silicon M1-M4', 'iPadOS App on Mac'],
  body: `## 一、为什么在 Mac 上使用小火箭？

拥有 Apple Silicon (M1/M2/M3/M4) 芯片的 Mac 电脑原生支持直接运行 iOS 应用。如果您已经在 iPhone 上购买了 **Shadowrocket (小火箭)**，无需额外再为 Mac 购买任何高昂的商业翻墙软件，可直接将其无损运行在 macOS 桌面！

---

## 二、下载与安装操作流程

1. 打开 Mac 系统自带的 **App Store**。
2. 点击左下角您的个人账户头像，进入“已购项目”。
3. 在上方分类标签页中，点击切换至 **“iPhone 与 iPad App”**。
4. 找到您此前购买过的 **Shadowrocket**，点击云朵下载图标直接装入 Mac 应用程序文件夹。
5. 打开应用，点击右上角加号通过扫码或输入 URL 导入机场订阅。
6. 全局路由选择 **“配置 (Config)”**，轻触顶部开关即可开启全速翻墙！`
});

// -------------------------------------------------------------
// 16. iOS: Quantumult X
// -------------------------------------------------------------
writeGuide('ios-quantumult-x', {
  title: 'iOS 平台 Quantumult X (圈X) 进阶教程：策略组构建、重写与分流规则',
  description: 'iOS 高端代理神器 Quantumult X 从零到精通教程。深入剖析节点分流策略组设计、远程分流规则集引用、图标定制与自动化测速。',
  platform: 'iOS',
  recommendedClients: ['Quantumult X (圈X)', 'JavaScript 自动化脚本'],
  body: `## 一、为什么高阶极客深爱 Quantumult X？

**Quantumult X**（中文圈通称“圈X”）以其极其精密的代码化配置底座、模块化的 JavaScript 脚本重写引擎以及纯净无广告的设计，被誉为 iOS 端最具极客精神的网络调试软件。

---

## 二、订阅资源导入与策略组引用

1. 打开圈X，点击右下角的“彩色风车”图标进入设置界面。
2. 在“节点”分类下，点击 **“节点资源 (Server Remote)”**。
3. 点击右上角添加图标，填入机场专属的圈X订阅链接，开启“自动更新”开关。
4. 在“分流”分类下，点击 **“分流资源 (Filter Remote)”**，引用常用国内直连与海外代理规则集。
5. 返回主界面，长按右下角小风车图标可一键批量测速。`
});

// -------------------------------------------------------------
// 17. iOS: Loon for iOS
// -------------------------------------------------------------
writeGuide('ios-loon', {
  title: 'iOS 平台 Loon 客户端保姆级教程：节点订阅、抓包与自动化脚本',
  description: '功能强大且界面亲和的 iOS 现代网络工具 Loon 图文实战指南。涵盖节点健康检查、插件市场与分流策略组图形化管理。',
  platform: 'iOS',
  recommendedClients: ['Loon iOS', 'Plugins Ecosystem'],
  body: `## 一、Loon 的易用与强大兼顾

与传统复杂的配置文件编辑软件不同，**Loon** 在 iOS 平台主打现代化图形交互。用户无需面对数百行晦涩的代码，即可在干净清爽的 UI 界面中完成订阅导入、分流策略编排与插件安装。

---

## 二、三分钟极速上手指南

1. 通过外区 Apple ID 购买并安装 Loon。
2. 点击底部菜单栏 **“配置” -> “订阅”**，输入机场订阅 URL，支持开启更新时自动测试健康度。
3. 切换至“插件”标签页，支持直接搜索安装主流流媒体检测、YouTube 去广告等实用插件。
4. 点击顶部开关激活 VPN 描述文件，即可享受极速分流体验。`
});

// -------------------------------------------------------------
// 18. iOS: Stash (Clash for iOS)
// -------------------------------------------------------------
writeGuide('ios-stash', {
  title: 'iOS 平台 Stash (Clash for iOS) 深度使用指南：规则覆写与仪表盘解析',
  description: '在 iPhone 和 iPad 上获得原生 Clash 体验。Stash 客户端的订阅导入、仪表盘网络监控、分流规则覆写与本地模式实战。',
  platform: 'iOS',
  recommendedClients: ['Stash', 'Clash Core for iOS'],
  body: `## 一、什么是 Stash？为什么称它为 Clash for iOS？

**Stash** 完整移植了桌面端 Clash 的核心规则与配置逻辑体系。如果您平时习惯了在电脑端使用 Clash Verge Rev，在 iPhone 上使用 Stash 可以做到配置思路 100% 平滑迁移。

---

## 二、一键导入与连接诊断

1. 打开 Stash，进入配置页面，点击右上角加号从 URL 下载。
2. 粘贴任何标准的 Clash / Meta 订阅链接，Stash 即可全自动识别并编译为本地可用配置。
3. 点击底部“仪表盘”，可以实时监控当前手机每一个 App 的上传与下载速率，点击“连接”可精准排查每一条连接走了哪个节点。`
});

// -------------------------------------------------------------
// 19. Android: v2rayNG
// -------------------------------------------------------------
writeGuide('android-v2rayng', {
  title: 'Android 平台 v2rayNG 最新版配置教程：分应用代理与订阅自动更新',
  description: '安卓手机使用最广泛的开源免费代理工具 v2rayNG 详尽图文教程。涵盖分应用代理设置、节点真连接测速、路由规则与电量保活。',
  platform: 'Android',
  recommendedClients: ['v2rayNG', 'Xray-core Android'],
  body: `## 一、安卓开源装机必备：v2rayNG

**v2rayNG** 是一款在 Android 平台拥有数千万下载量的经典开源免费工具。它兼容小米、华为、OPPO、vivo 等各类国产品牌手机，操作界面极其质朴，运行极其稳定。

---

## 二、配置与分应用免流实操

1. 从官方 GitHub 下载正版 APK 安装包。
2. 点击左侧三道杠菜单进入 **“订阅分组设置”**，点击加号填入机场订阅链接并保存。
3. 返回主界面，点击右上角三点菜单选择 **“更新订阅”** 载入节点。
4. **关键设置（分应用代理）**：
   - 打开侧边栏“设置” -> “分应用代理”，勾选开启。
   - 将国内应用（微信、支付宝、淘宝、美团）设为绕过代理直连；将 Chrome、YouTube、Twitter、ChatGPT 设为走代理。不仅节省流量，还能杜绝国内 App IP 异常跳变导致的封号风控！
5. 点击右下角圆形按钮启动连接。`
});

// -------------------------------------------------------------
// 20. Android: Clash Meta for Android (CMFA)
// -------------------------------------------------------------
writeGuide('android-clash-meta', {
  title: 'Android 平台 Clash Meta (CMFA) 客户端深度配置实操指南',
  description: '针对安卓平台的现代化 Clash Meta for Android 实战教程。全面支持 Hysteria2 协议、分流规则组管理与桌面浮窗测速。',
  platform: 'Android',
  recommendedClients: ['Clash Meta for Android', 'Mihomo Core'],
  body: `## 一、CMFA：安卓端的现代 Clash 旗舰

在原版 Clash for Android 停更后，社区维护的 **Clash Meta for Android (CMFA)** 成为目前安卓端最全能的规则分流利器，原生支持 Hysteria2、TUIC、VLESS-Reality 等前沿协议。

---

## 二、下载与日常使用

1. 下载 \`cmfa-meta-arm64-v8a.apk\` 并完成安装。
2. 点击“配置 (Profiles)” -> 导入机场提供的 Clash 订阅链接。
3. 选中配置文件，切换至“代理”标签页，模式选择为 **“规则 (Rule)”**。
4. 勾选心仪的专线节点，点击主界面“启动”即可。建议在系统电池设置中将 CMFA 设为 **“允许无限制后台自启动”** 防止息屏断连。`
});

// -------------------------------------------------------------
// 21. Android: SFA (Sing-box for Android)
// -------------------------------------------------------------
writeGuide('android-sing-box', {
  title: 'Android 平台 SFA (Sing-box for Android) 现代网络分流实战',
  description: '在安卓手机上发挥 Sing-box 的极致效能。SFA 客户端的安装、订阅配置导入、DNS 防污染配置与前后台长效省电保活方案。',
  platform: 'Android',
  recommendedClients: ['Sing-box for Android', 'SFA'],
  body: `## 一、SFA 的超低能耗与高并发特性

**Sing-box for Android (SFA)** 专门针对安卓移动终端优化，核心内存占用仅有 20MB 左右，发热与待机耗电几乎可以忽略不计，尤其适合老旧千元机或对续航极度敏感的用户。

---

## 二、配置添加与启动

1. 安装官方 APK 后进入应用。
2. 在 Profiles 页面点击 New Profile 添加远程 Sing-box 订阅。
3. 切换到 Dashboard 页面开启连接，享受无感流畅上网。`
});

// -------------------------------------------------------------
// 22. Android: NekoBox for Android
// -------------------------------------------------------------
writeGuide('android-nekobox', {
  title: 'Android 平台 NekoBox 教程：支持 Hysteria2、TUIC 与内网直连',
  description: '安卓平台最全能的通用客户端之一 NekoBox 使用指南。多核心切换、全协议支持、自定义分流与防封锁实操。',
  platform: 'Android',
  recommendedClients: ['NekoBox Android', 'Sing-box Core'],
  body: `## 一、安卓全能瑞士军刀 NekoBox

**NekoBox for Android** 原生支持切换内核，全面支持抗高丢包的 Hysteria2 与 TUIC 协议，在晚高峰网络拥堵时表现极为优越。

---

## 二、快速导入与分流配置

1. 安装 \`NekoBox-arm64-v8a.apk\`。
2. 点击加号添加订阅，长按节点列表进行真实 HTTP 测速。
3. 在左侧菜单勾选“绕过局域网及大陆”，启动后国内国外流量智能精准分流。`
});

// -------------------------------------------------------------
// 23. Linux: Sing-box CLI
// -------------------------------------------------------------
writeGuide('linux-sing-box-cli', {
  title: 'Linux / VPS 命令行无 GUI 环境 Sing-box 系统级代理配置实战',
  description: '服务器运维与学术科研人员必备：在 Ubuntu / Debian / CentOS 无桌面环境下通过 systemd 守护进程运行 Sing-box，实现整机透明加速。',
  platform: 'Linux',
  recommendedClients: ['Sing-box CLI', 'systemd daemon'],
  body: `## 一、Linux 命令行无 GUI 环境的代理难题

在云服务器、AI GPU 算力集群（如 AutoDL、恒源云）或远程 VPS 上，由于没有图形桌面，下载 GitHub 源码、拉取 Docker 镜像经常超时。使用 **Sing-box 命令行二进制** 搭配 systemd 守护进程是最轻巧强大的工业级解法。

---

## 二、五分钟部署流程

\`\`\`bash
# 1. 下载官方 Linux 二进制
curl -Lo sing-box.tar.gz https://github.com/SagerNet/sing-box/releases/latest/download/sing-box-linux-amd64.tar.gz
tar -zxvf sing-box.tar.gz
sudo mv sing-box-*/sing-box /usr/local/bin/

# 2. 放置配置并配置守护进程
sudo mkdir -p /etc/sing-box
# 将机场订阅配置保存至 /etc/sing-box/config.json

# 3. 开启服务
sudo systemctl enable --now sing-box
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
curl -I https://www.google.com
\`\`\``
});

// -------------------------------------------------------------
// 24. Linux: Clash Verge Rev
// -------------------------------------------------------------
writeGuide('linux-clash-verge', {
  title: 'Linux 桌面端 (Ubuntu/Debian/Arch) Clash Verge Rev 部署与提权',
  description: '针对 Linux 桌面发行版用户的 Clash Verge Rev 安装手册。解决 AppImage 权限、Deb/AUR 安装、虚拟网卡驱动提权与系统托盘适配。',
  platform: 'Linux',
  recommendedClients: ['Clash Verge Rev Linux', 'AppImage / Deb / AUR'],
  body: `## 一、Linux 桌面用户的现代化体验

在 Ubuntu、Fedora 或 Arch Linux 桌面系统上，**Clash Verge Rev** 提供了原生美观的图形交互体验，支持桌面托盘与 TUN 虚拟网卡全流量接管。

---

## 二、安装与权限设置

\`\`\`bash
# 1. Ubuntu/Debian 直接安装 deb 包
sudo dpkg -i clash-verge_*.deb

# 2. 关键：为 TUN 模式赋予网络特权
sudo setcap cap_net_admin,cap_net_bind_service=+ep /usr/bin/clash-verge
\`\`\`
在软件设置中打开 TUN 模式，即可免配置环境变量，整机所有软件全自动出海。`
});

// -------------------------------------------------------------
// 25. 路由器: OpenClash
// -------------------------------------------------------------
writeGuide('openwrt-openclash', {
  title: 'OpenWrt 路由器 OpenClash 内核选择与开发者高级分流配置深度指南',
  description: '软路由发烧友必看的 OpenClash 全功能配置手册。Mihomo 内核切换、混合模式、Fake-IP 与 Redir-Host 选型、绕过局域网与规则集优化。',
  platform: '路由器',
  recommendedClients: ['OpenClash', 'Mihomo Core OpenWrt'],
  body: `## 一、OpenClash：软路由最强分流引擎

**OpenClash** 凭借强大的规则引擎、Fake-IP 秒级解析与可视化 Yacd 仪表盘，是打造全屋透明网关的终极工具。

---

## 二、Fake-IP 模式核心优势

在高级设置中，强烈推荐选择 **Fake-IP (增强模式)**：路由器拦截所有外部 DNS 请求并瞬间返回内部保留 IP (198.18.x.x)，将真实解析交由远端专线节点完成，彻底杜绝本地 DNS 劫持与解析延迟，网页秒开体验极佳。`
});

// -------------------------------------------------------------
// 26. 路由器: GL.iNet
// -------------------------------------------------------------
writeGuide('gl-inet-router', {
  title: 'GL.iNet 便携式出国路由节点配置教程：出差旅行即插即用实战',
  description: '面向海外差旅与数字游民的 GL.iNet 便携路由器配置攻略。支持酒店 Wi-Fi 中继、内置 VPN 客户端配置及全设备随身透明翻墙。',
  platform: '路由器',
  recommendedClients: ['GL.iNet 随身路由', 'Beryl AX / Slate AX'],
  body: `## 一、数字游民差旅利器 GL.iNet

经常出差旅行的商务人士，使用 **GL.iNet 便携路由器** 可以省去在每台随身手机、电脑、iPad 上繁琐配置软件的烦恼。

---

## 二、酒店 Wi-Fi 中继与无感翻墙

1. 在酒店插上电源，手机连接 GL.iNet 默认 Wi-Fi。
2. 登录后台 \`192.168.8.1\`，进入“互联网” -> “中继”，连接酒店公共网络。
3. 在“VPN 客户端”中导入机场订阅，开启连接后，随身所有设备自动出海，安全又私密！`
});

// -------------------------------------------------------------
// 27. 智能设备: Apple TV
// -------------------------------------------------------------
writeGuide('tv-apple-tv-proxy', {
  title: 'Apple TV 配合 Surge / Stash 独立旁路由实现 4K 极速大屏观影教程',
  description: '让客厅大屏电视享受 4K HDR 极致画质。Apple TV tvOS 平台的 Surge / Stash 客户端独立运行与家庭透明网关配置全流程。',
  platform: '智能设备',
  recommendedClients: ['Apple TV 4K', 'tvOS Stash', 'tvOS Surge'],
  body: `## 一、客厅大屏观影的终极形态

在最新版 tvOS 中，苹果官方开放了网络扩展能力。**Stash for tvOS** 与 **Surge for tvOS** 能够直接独立常驻运行在 Apple TV 上，无需额外购置工控软路由，电视本身即可成为全家的旁路由网关！

---

## 二、配置与 4K 流媒体调优

1. 在 Apple TV 上登录海外 Apple ID，直接下载已购的 Stash 或 Surge。
2. 通过手机局域网推送或扫描屏幕二维码将订阅同步至电视。
3. 将 Netflix、YouTube、Disney+ 分流至具备原生解锁属性的高速专线节点，畅享 4K 杜比视界极致震撼画质。`
});

// -------------------------------------------------------------
// 28. 智能设备: Android TV
// -------------------------------------------------------------
writeGuide('tv-android-tv-clash', {
  title: 'Android TV / 索尼电视安装 Clash 与 v2rayNG 遥控器适配全攻略',
  description: '解决电视端没有触屏无法操作的痛点！在小米电视、索尼电视、Chromecast 及外贸电视盒子上配置 Clash 与 v2rayNG 的保姆级指南。',
  platform: '智能设备',
  recommendedClients: ['Android TV', 'Clash for Android TV', 'v2rayNG TV'],
  body: `## 一、电视端核心痛点：遥控器难操控

很多用户把手机 APK 拷贝到电视后，发现由于没有触摸屏，遥控器无法点击按钮。针对大屏设备，必须使用适配过 TV 焦点的专用安装包。

---

## 二、局域网 Web 极速导入订阅

1. 下载专为 TV 优化的 \`ClashForAndroid-tv.apk\` 并安装到电视。
2. 打开应用选择“从局域网导入”，电视屏幕会展示一个本地局域网网址（如 \`http://192.168.1.150:8080\`）。
3. 用手机浏览器打开该网址，直接粘贴机场订阅链接，电视端瞬间同步成功，按遥控器选中节点即可连通！`
});

// -------------------------------------------------------------
// 29. 游戏: PS5 / Switch / Xbox
// -------------------------------------------------------------
writeGuide('ps5-switch-gaming-proxy', {
  title: 'PS5 / Nintendo Switch / Xbox 主机联机加速与 NAT 类型优化配置教程',
  description: '主机玩家告别联机丢包！通过 PC 局域网共享代理或软路由网关，将主机 NAT 类型提升为 NAT Type 2 / Type A，实现低延迟顺畅联机。',
  platform: '游戏与主机',
  recommendedClients: ['Fullcone NAT', 'LAN Proxy Share'],
  body: `## 一、为什么主机联机总是频繁掉线？

主机玩家在游玩《怪物猎人》、《任天堂大乱斗》、《EA FC》等联机游戏时，经常遭遇 NAT 严格导致无法匹配队友。其核心在于国内运营商光猫防火墙层层阻断，且索尼和任天堂联机中继服务器均在海外。

---

## 二、电脑局域网共享极速提速

1. 电脑端开启 Clash Verge Rev，在设置中打开 **“允许局域网连接 (Allow LAN)”**。
2. 记录电脑的本地 IP（如 \`192.168.1.50\`）与端口 \`7890\`。
3. 打开 PS5 / Switch 网络设置，选择手动设置 Proxy 服务器，填入电脑 IP 和端口。
4. 测试成功后，NAT 类型瞬间跃升为 Open/Type A，游戏联机秒速匹配，下载跑满物理带宽！`
});

// -------------------------------------------------------------
// 30. 社交: Telegram / Twitter
// -------------------------------------------------------------
writeGuide('telegram-twitter-proxy-setup', {
  title: 'Telegram MTProto / Socks5 直连代理与推特媒体极速加载设置教程',
  description: '电报与 Twitter 高清视频秒开指南。配置 Telegram 内部专属代理通道、防封号防风控、自动重连与媒体下载加速全攻略。',
  platform: '社交与办公',
  recommendedClients: ['Telegram Socks5', 'MTProto Proxy'],
  body: `## 一、Telegram 频繁转圈连接中？内置直连教程

很多新手即使开启了全局翻墙软件，Telegram 依然卡在“Connecting...”转圈。通过在电报内部配置直连代理通道，可彻底解决该问题。

---

## 二、配置步骤

1. 打开 Telegram -> Settings -> Data and Storage -> Proxy Settings。
2. 点击 Add Proxy，选择 **SOCKS5**。
3. 服务器填 \`127.0.0.1\`，端口填客户端本地 Socks 端口（如 \`7890\` 或 \`10808\`）。
4. 开启连接后立即秒速连通，海量聊天群组消息与视频瞬间完成加载！`
});

console.log('Finished writing Part 2 deep guides!');
