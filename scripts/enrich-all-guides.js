/**
 * scripts/enrich-all-guides.js
 * Extensively enriches the remaining guides to 3,500 ~ 5,000+ bytes each.
 */

import fs from 'fs';
import path from 'path';

const guidesDir = path.resolve('src/content/guides');

function updateGuide(slug, title, platform, clients, body) {
  const filePath = path.join(guidesDir, `${slug}.md`);
  const content = `---
title: "${title}"
description: "面向资深用户的${title}。深入解析核心网络架构、订阅自动化导入、DNS 防污染防泄漏、策略组智能分流与高频报错排除。"
platform: "${platform}"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
${clients.map(c => `  - "${c}"`).join('\n')}
---

${body.trim()}
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[Enriched] ${slug}.md (${Buffer.byteLength(content, 'utf8')} bytes)`);
}

// -------------------------------------------------------------
// ios-quantumult-x
// -------------------------------------------------------------
updateGuide('ios-quantumult-x', 'iOS 平台 Quantumult X (圈X) 进阶教程：策略组构建、重写与分流规则', 'iOS', ['Quantumult X', 'JavaScript 引擎', 'MitM 证书'], `
## 一、Quantumult X 的核心定位与极客属性

在 iOS 平台的代理网络工具中，**Quantumult X**（通常被称为“圈X”）以其高度现代化的代码化配置理念、纯净的原生界面以及极度自由的 URL Rewrite / MitM 扩展能力，被公认为高阶极客与重度移动办公用户的首选武器。

### 圈X不可替代的核心优势：
1. **精密的策略分流控制**：支持嵌套策略组，支持基于 SSID（家庭 Wi-Fi / 蜂窝网络）自动切换节点或直连。
2. **极速测速引擎**：支持向真实海外服务器发送 HEAD 请求，毫秒级反映各专线节点的真实可用性。
3. **原生高效的 JavaScript 脚本支持**：在数据包流转阶段动态执行轻量脚本，实现去广告、自动签到与流量统计。

---

## 二、海外下载与环境准备

1. **获取海外 Apple ID**：需使用海外（如美区、港区或日区）Apple ID 登录 App Store。
2. **购买下载正版**：认准开发者 **CrossUtility**，售价约为 $7.99 美元。切勿在淘宝购买所谓的共享账号以免设备被恶意锁定。

---

## 三、生产级订阅导入与自动更新

### 1. 节点资源引用 (Server Remote)
1. 启动圈X，点击右下角的“彩色小风车”图标进入设置界面。
2. 找到 **“节点”** 模块，点击 **“节点资源 (Server Remote)”**。
3. 点击右上角“+”号添加新资源：
   - 资源路径：粘贴机场后台提供的专属 Quantumult X 订阅链接或标准 Clash 订阅。
   - 资源标签：填入机场名称（如“隐形人IEPL”或“微风网络”）。
   - 开启 **“自动更新”**。
4. 返回主界面，向左滑动资源卡片，点击“更新”，全部可用节点将自动展开呈现。

### 2. 标准生产级策略组 YAML 结构
在配置文件中，我们可以构建针对 AI、4K 影视与国内直连的三级策略拓扑：

\`\`\`ini
[policy]
# 静态手动选择主力
static=主力节点, 🇭🇰 香港-IEPL专线, 🇯🇵 日本-IEPL专线, 🇸🇬 新加坡-专线, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png

# 自动测速选优
url-latency-benchmark=自动优选, 🇭🇰 香港-IEPL专线, 🇯🇵 日本-IEPL专线, check-interval=600, tolerance=50

# 生产力 AI 专用
static=AI生产力, 🇺🇸 美区住宅-双ISP, 🇯🇵 日本-双ISP, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Bot.png

# 4K 流媒体专用
static=流媒体解锁, 🇭🇰 香港-IEPL专线, 🇹🇼 台湾-原生解锁, 🇯🇵 日本-IEPL专线
\`\`\`

---

## 四、分流规则集引用 (Filter Remote)

在设置界面点击 **“分流” -> “分流资源 (Filter Remote)”**，建议引用业界公认的远程规则集（如 ACL4SSR 或 Loyalsoldier）：
- **OpenAI 规则集**：绑定至 \`AI生产力\` 策略组。
- **YouTube / Netflix 规则集**：绑定至 \`流媒体解锁\` 策略组。
- **ChinaMax 规则集**：绑定至 \`DIRECT\`，国内流量绝不走代理。

长按右下角小风车图标，点击 **“全部测速”**，挑选低延迟节点，开启顶部主开关即可畅享高速体验。选购适合圈X的专线节点，欢迎查阅本站 [综合实力排行榜](/ranking/overall/) 与 [节点横向对比工具](/compare/)。
`);

// -------------------------------------------------------------
// android-v2rayng
// -------------------------------------------------------------
updateGuide('android-v2rayng', 'Android 平台 v2rayNG 最新版配置教程：分应用代理与订阅自动更新', 'Android', ['v2rayNG', 'Xray-core', 'GeoIP/GeoSite'], `
## 一、Android 平台装机国民神器：v2rayNG

作为 Android 系统上用户体量最大、代码完全开源且持续迭代维护的代理客户端，**v2rayNG** 凭借其对 Xray 内核与新版 Sing-box 内核的无缝驱动，以及对所有安卓定制 ROM（MIUI/HyperOS、ColorOS、OriginOS、鸿蒙 HarmonyOS 等）的完美适配，成为安卓用户的必备基础工具。

---

## 二、官方正版安装与权限配置

1. **官方渠道下载**：
   - 访问官方 GitHub Releases 页面，认准 \`v2rayNG_x.x.x_arm64-v8a.apk\`。
   - 切勿从不明搜索引擎广告或第三方破解软件站下载，防止 APK 被注入恶意后门或隐私监控插件。
2. **系统底层权限授予**：
   - 在安装时允许系统建立本地 VPN 虚拟网络接口。
   - 在安卓系统“电池与性能”设置中，将 v2rayNG 设置为 **“无限制 / 允许后台自启动”**，防止手机熄屏 5 分钟后内核被省电机制强行杀死断网。

---

## 三、导入机场订阅并实现自动化定时同步

1. 登录您在 [机场排行榜](/ranking/overall/) 中选购的服务商仪表盘（如 [微风网络](/review/breezenet/) 或 [光速云](/review/lightspeed/)）。
2. 在控制台找到“快捷导入”，点击复制 **“V2Ray / 通用订阅”**。
3. 打开 v2rayNG，点击左上角侧边栏菜单（三道杠），选择 **“订阅分组设置”**。
4. 点击右上角加号，在“可选地址 (url)”中长按粘贴刚才复制的 URL，备注输入机场名称。
5. 返回主界面，点击右上角三点菜单，选择 **“更新订阅”**。所有节点即刻在列表中排列展示。

---

## 四、分应用代理设置（解决国内免流与防止银行风控）

许多安卓用户发现：开了代理后，虽然能上 Google，但国内手机银行（如招商、工商、中国银行）提示异地登录甚至限制转账，微信支付也变得缓慢。通过 **“分应用代理”** 可彻底根治：

1. 打开 v2rayNG 左侧侧边栏 -> 进入 **“设置”**。
2. 找到并勾选 **“分应用代理”**。
3. 点击进入应用勾选列表：
   - 顶部搜索框依次搜索并勾选需要翻墙的 App：如 **Chrome、YouTube、X (Twitter)、Telegram、ChatGPT、Instagram、Google Play 商店**。
   - 所有未勾选的国内应用（微信、支付宝、网易云、抖音、高德地图、各大银行 App）将百分之百直接走本地移动蜂窝数据，完全绕过代理内核！
4. 既保障了国内生态的速度与免流，又保证了海外连接的畅通无阻。

---

## 五、路由设置与真延迟批量排查

1. **路由模式选型**：在主界面“设置”中，将“路由模式”设为 **“绕过局域网及大陆地址”**。
2. **测试真实延迟**：点击右上角三点菜单，选择 **“测试所有配置真连接”**。v2rayNG 将模拟真实浏览器发起握手，绿色毫秒数值代表网络健康可用。
3. 点击右下角圆形小飞机图标，即可一键享受高速跨境网络！
`);

// -------------------------------------------------------------
// android-clash-meta
// -------------------------------------------------------------
updateGuide('android-clash-meta', 'Android 平台 Clash Meta (CMFA) 客户端深度配置实操指南', 'Android', ['Clash Meta for Android', 'Mihomo', 'Hysteria2'], `
## 一、CMFA：安卓端规则分流的最佳接班人

在原作者停更传统 Clash for Android 之后，开源社区基于强大的 **Mihomo (原 Clash.Meta)** 内核构建了全新的 **Clash Meta for Android (CMFA)**。它是目前安卓生态下功能最为强悍、支持协议最全且支持复杂规则集（Rule Providers）的专业客户端。

### 核心亮点：
- **完整协议栈支持**：全面兼容 Hysteria2、TUIC v5、VLESS-Reality、Trojan、Shadowsocks 等所有主流新代协议。
- **现代化桌面浮窗与悬浮测速**：支持在屏幕边缘显示实时上下行吞吐速率与当前活跃策略组。
- **底层 TUN 网络栈优化**：内置高级 gVisor / System 双网络栈驱动，大幅降低高负载时的 CPU 发热与丢包。

---

## 二、安装与订阅导入实战

1. 从官方 GitHub 仓库下载 \`cmfa-x.x.x-meta-arm64-v8a.apk\` 并完成安装。
2. 启动应用，点击主界面上方 **“配置 (Profiles)”**。
3. 点击右上角加号 **“+”**，选择 **“URL (从 URL 导入)”**。
4. 填写配置名称，将机场后台复制的 Clash 订阅链接粘贴进 URL 输入框。
5. 自动更新时间建议设定为 **1440 分钟（24小时）**。
6. 点击右上角软盘保存图标，客户端将下载并解析配置文件。

---

## 三、策略组编排与日常操作技巧

1. 返回主界面，点击“配置”选中刚才下载完成的配置文件。
2. 切换至 **“代理 (Proxy)”** 标签页，在顶部运行模式中确保勾选 **“规则 (Rule)”**。
3. 展开策略组列表，根据需求切换节点：
   - 办公用户可锁定在低延迟的香港或日本 IEPL 专线。
   - 追剧用户可锁定在支持 Netflix 4K 原生解锁的节点上。
4. 返回主界面，点击中心大按钮 **“启动”**，系统弹窗提示网络连接请求，点击允许即可开始使用。

如需选购适合安卓手机大带宽、晚高峰不卡顿的专线服务商，欢迎参考本站 [低预算平价机场专题](/recommend/budget/) 与 [机场综合排行榜](/ranking/overall/)。
`);

// -------------------------------------------------------------
// openwrt-openclash
// -------------------------------------------------------------
updateGuide('openwrt-openclash', 'OpenWrt 路由器 OpenClash 内核选择与开发者高级分流配置深度指南', '路由器', ['OpenClash', 'Mihomo Core', 'Fake-IP 模式'], `
## 一、OpenClash 在智能家居与局域网拓扑中的核心价值

在工控软路由（如 J4125、N100、R2S/R4S）与硬路由上，**OpenClash** 是最受高级网络玩家青睐的网关软件。通过在主路由或旁路由上运行 OpenClash，局域网内的所有设备（包括电视盒子、游戏机、扫地机器人及物联网设备）无需任何客户端即可无缝享受透明网络。

---

## 二、运行模式选择：Fake-IP vs Redir-Host

进入 OpenClash **“插件设置” -> “模式设置”**，选择正确的运行模式是成败的关键：

| 评估维度 | Fake-IP (增强模式)【强烈推荐】 | Redir-Host (兼容模式) |
| :--- | :--- | :--- |
| **首包解析延迟** | **接近 0ms (秒开网页)** | 50ms~300ms (需等待本地DNS解析) |
| **DNS 防污染能力** | **绝对免疫 (远端节点代理解析)** | 需依赖本地白名单过滤 |
| **工作原理** | 路由器拦截解析直接返回 198.18.x.x 虚地址 | 本地解析出真实公网 IP 后再路由 |
| **适用环境** | 绝大多数普通家庭、4K影视、外贸办公 | 局域网有私有 Active Directory 域控环境 |

---

## 三、内核版本选择与订阅更新

1. 进入 **“版本更新”** 标签页，内核编译版本推荐选择 **Meta (Mihomo) 内核**，确保对 Hysteria2 及新版规则集的原生支持。
2. 切换至 **“配置文件订阅”**，输入机场提供的标准 Clash 订阅链接，勾选“自动更新”，时间设在凌晨闲时。
3. 启动 OpenClash，在电脑浏览器打开 \`http://192.168.1.1:9090/ui\`，即可调出炫酷的 Yacd 仪表盘，实时管理全家每台联网设备的网络流向。
`);

// -------------------------------------------------------------
// tv-apple-tv-proxy
// -------------------------------------------------------------
updateGuide('tv-apple-tv-proxy', 'Apple TV 配合 Surge / Stash 独立旁路由实现 4K 极速大屏观影教程', '智能设备', ['Apple TV 4K', 'tvOS Stash', 'tvOS Surge'], `
## 一、客厅影音霸主 Apple TV 的网络解放

凭借强大的 A15 仿生芯片、全链路杜比视界（Dolby Vision）与杜比全景声（Dolby Atmos）支持，**Apple TV 4K** 是公认的家庭影音终极终端。在最新的 tvOS 系统中，苹果正式开放了 VPN Network Extension 底层接口，使得 **Stash for tvOS** 与 **Surge for tvOS** 能够直接独立在电视上运行！

这意味着：**您无需购买昂贵的软路由，仅凭 Apple TV 自身即可充当全家局域网的科学上网旁路由！**

---

## 二、下载与跨设备配置同步

1. 在 Apple TV 上切换登录海外区域 Apple ID。
2. 打开电视自带的 App Store，搜索并下载已购的 **Stash** 或 **Surge**（支持苹果生态一次购买全平台通用）。
3. 启动应用后，电视屏幕会展示一个专属二维码与局域网同步 URL。
4. 用同一 Wi-Fi 下的 iPhone 扫码或在电脑浏览器打开该网址，一键粘贴机场订阅链接，电视端瞬间完成节点载入！

---

## 三、针对 4K 流媒体的专属分流调优

1. 在策略组中，将 Netflix、YouTube、Disney+、Infuse、Emby 等流媒体影视应用指定为走具有原生流媒体解锁标签的高速专线节点。
2. 进入 Apple TV 设置 -> “音频与视频”，将显示格式设为 **“4K SDR + 动态范围匹配”**，即可彻底告别画质降级与卡顿转圈，尽享满血原画质！
`);

// -------------------------------------------------------------
// linux-sing-box-cli
// -------------------------------------------------------------
updateGuide('linux-sing-box-cli', 'Linux / VPS 命令行无 GUI 环境 Sing-box 系统级代理配置实战', 'Linux', ['Sing-box CLI', 'systemd daemon', 'Server Proxy'], `
## 一、Linux 命令行无 GUI 环境的代理挑战

在开发测试服务器、AI 训练集群（如 AutoDL、阿里云 GPU 算力）或无桌面的 Ubuntu/Debian VPS 上，下载 GitHub 源码、拉取 Docker 镜像或更新依赖时频繁遭遇网络超时。使用 **Sing-box 命令行二进制内核** 搭配 systemd 守护进程是行业公认的最高效解决方案。

---

## 二、完整部署脚本与持久化托管

\`\`\`bash
# 1. 下载官方最新 amd64 二进制发行包
curl -Lo sing-box.tar.gz https://github.com/SagerNet/sing-box/releases/latest/download/sing-box-linux-amd64.tar.gz
tar -zxvf sing-box.tar.gz
sudo mv sing-box-*/sing-box /usr/local/bin/
sudo chmod +x /usr/local/bin/sing-box

# 2. 创建配置目录并保存配置文件
sudo mkdir -p /etc/sing-box
# 将机场提供的 config.json 复制到 /etc/sing-box/config.json

# 3. 创建 systemd 托管服务
sudo tee /etc/systemd/system/sing-box.service << 'EOF'
[Unit]
Description=sing-box service
After=network.target nss-lookup.target

[Service]
CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_BIND_SERVICE CAP_NET_RAW
AmbientCapabilities=CAP_NET_ADMIN CAP_NET_BIND_SERVICE CAP_NET_RAW
ExecStart=/usr/local/bin/sing-box run -c /etc/sing-box/config.json
Restart=on-failure
RestartSec=10s
LimitNOFILE=infinity

[Install]
WantedBy=multi-user.target
EOF

# 4. 重新加载并立即启动服务
sudo systemctl daemon-reload
sudo systemctl enable --now sing-box
sudo systemctl status sing-box

# 5. 验证网络畅通性
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
curl -I https://www.google.com
\`\`\`
`);

console.log('Finished enriching remaining key tutorials!');
