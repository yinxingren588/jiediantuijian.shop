/**
 * scripts/generate-deep-guides.js
 * Generates 30 production-grade, highly technical, exhaustive usage tutorials
 * for jiediantuijian.shop, establishing authoritative Bing SEO domain authority.
 */

import fs from 'fs';
import path from 'path';

const guidesDir = path.resolve('src/content/guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}

// Helper to write a guide
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
  console.log(`[Generated] ${slug}.md (${Buffer.byteLength(content, 'utf8')} bytes)`);
}

// -------------------------------------------------------------
// 1. Windows: Clash Verge Rev
// -------------------------------------------------------------
writeGuide('windows-clash-verge-rev', {
  title: 'Windows 平台 Clash Verge Rev 完整安装与节点订阅配置实战教程',
  description: '面向 Windows 10/11 的工程级 Clash Verge Rev 部署手册。深入剖析 Mihomo/Clash.Meta 内核特性、Fake-IP 模式原理、TUN 虚拟网卡驱动提权、YAML 预处理脚本及晚高峰丢包优化。',
  platform: 'Windows',
  recommendedClients: ['Clash Verge Rev', 'Mihomo (Clash.Meta) 内核', 'Wintun Driver'],
  body: `## 一、技术架构与核心选型价值

随着原版 Clash for Windows (CFW) 的全面停更，基于 Rust + Tauri 框架重构的 **Clash Verge Rev** 凭借极高的能效比与严密的安全性，已成为 Windows 生态无可争议的主力客户端。与传统 Electron 框架客户端动辄占用 300MB+ 内存不同，Clash Verge Rev 的静态常驻内存仅在 40MB~80MB 之间。

### 核心内核能力矩阵：
- **原生内置 Mihomo (原 Clash.Meta) 内核**：完整支持新一代传输协议，包括 **Hysteria2、TUIC v5、VLESS-Reality、Trojan 及 Shadowsocks 2022**，彻底摆脱传统 VMess 协议的握手特征。
- **Layer 3 网络层 TUN 驱动透明接管**：通过微软官方认证的 **Wintun 驱动**，实现对 TCP、UDP、ICMP 全流量无死角接管，彻底解决终端、开发环境及游戏联机绕过代理的痛点。
- **现代化 Script / Merge 预处理引擎**：支持通过 JavaScript 或 YAML 覆写规则集，实现远程订阅的本地自动化规则定制。

---

## 二、官方安装与运行环境就绪

### 1. 软件获取与完整性校验
- **官方开源仓库**：切勿通过任何第三方下载站、网盘或修改版获取安装包。从官方 GitHub Release 获取安装文件：
  - 64位标准安装包：\`Clash.Verge_x.x.x_x64-setup.exe\`
  - 免安装便携版：\`Clash.Verge_x.x.x_x64_portable.zip\`
- **系统底层依赖**：
  - Windows 10 (Build 19041 及以上) 或 Windows 11 64位系统。
  - 必须已安装 **WebView2 Runtime**（Win11 自带，Win10 可通过微软官网补全）。
  - 若启动提示缺失运行库，需安装 **Microsoft Visual C++ 2015-2022 Redistributable (x64)**。

### 2. 管理员权限与服务模式
为了确保 TUN 虚拟网卡与系统 DNS 接管顺畅，首次安装时建议勾选**“以管理员权限运行”**。进入客户端设置，开启 **“服务模式 (Service Mode)”**，点击安装服务。服务安装成功后，应用旁将显示绿色的“Active”标识，此举赋予了客户端底层系统级网络路由管理权。

---

## 三、生产级订阅导入与配置解析

### 1. 订阅链接获取与本地载入
1. 登录您选购的机场后台仪表盘（如本站实测推荐的 [隐形人](/review/yinxingren/)、[微风网络](/review/breezenet/) 或 [光速云](/review/lightspeed/)）。
2. 在“一键订阅”区域选择 **“复制 Clash / Meta 订阅链接”**。
3. 打开 Clash Verge Rev，点击左侧菜单栏 **“订阅 (Profiles)”**。
4. 在顶部输入框粘贴该 URL，并填写自定义描述（如“微风专线-主力”）。
5. 点击 **“导入 (Import)”**。导入成功后右键该配置卡片，将更新间隔设为 **1440 分钟（24小时）**。

### 2. 编写 YAML 预处理脚本（拓展智能分流）
右键点击已导入的订阅配置，选择 **“编排配置 (Edit Script)”**，可通过代码在订阅自动更新时动态插入你的专属规则，例如将公司内网与私有云强制设为直连：

\`\`\`yaml
# Clash Verge Rev 预处理示例：强制本地与局域网直连，AI服务走专属节点
parsers:
  - reg: '.*'
    yaml:
      prepend-rules:
        - "DOMAIN-SUFFIX,company-internal.com,DIRECT"
        - "DOMAIN-KEYWORD,chatgpt,AI专用"
        - "DOMAIN-SUFFIX,anthropic.com,AI专用"
        - "GEOIP,CN,DIRECT"
        - "MATCH,漏网之鱼"
\`\`\`

---

## 四、核心参数深度调优与 DNS 架构

进入 **“设置 (Settings)”** -> **“Verge 设置”** 与 **“Clash 核心设置”**：

### 1. 运行模式科学选型
- **规则 (Rule) 模式**【首选推荐】：遵循规则集分流，国内主流网站走 \`DIRECT\` 本地光纤直连，海外受限资源走 \`PROXY\` 节点代理。
- **全局 (Global) 模式**：所有 TCP/UDP 流量强制通过单个选定节点（仅用于测试节点连通性或排查特定海外业务）。
- **直连 (Direct) 模式**：绕过所有代理内核，纯公网直接发起连接。

### 2. Fake-IP 增强模式与 DNS 防污染
传统的 DNS 策略容易导致本机在发起请求前向运营商 DNS 查询，造成严重 DNS 污染。Clash Verge Rev 的最佳 DNS 配置如下：

\`\`\`yaml
dns:
  enable: true
  listen: 0.0.0.0:1053
  ipv6: false                     # 建议关闭 IPv6，防止 IPv6 泄露真实归属地
  enhanced-mode: fake-ip          # 核心：开启 Fake-IP 模式
  fake-ip-range: 198.18.0.1/16
  nameserver:
    - 223.5.5.5                   # 阿里国内公共 DNS
    - 119.29.29.29                # 腾讯 DNSPod
  fallback:
    - https://1.1.1.1/dns-query   # Cloudflare 权威 DoH
    - https://8.8.8.8/dns-query   # Google 权威 DoH
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
\`\`\`

---

## 五、开启系统级 TUN 虚拟网卡模式

### 1. 为什么必须开启 TUN 模式？
常规的“系统代理 (System Proxy)”本质上只是在 Windows 注册表中设置了 HTTP/HTTPS 环境变量。这种模式的致命缺陷在于：
1. **CMD / PowerShell 终端**默认完全无视系统代理。
2. **Git / Docker / WSL2 子系统**需要单独繁琐配置。
3. **Steam / 战网 / 绝地求生等在线游戏**走的是 UDP 裸数据包，系统代理对其完全失效。

### 2. TUN 模式激活流程
1. 进入“设置” -> 勾选 **“TUN 模式”** 开关。
2. 核心会自动调用 \`wintun.dll\` 虚拟网卡驱动，创建名为 \`Mihomo\` 的本地虚拟适配器。
3. 打开 Windows 任务管理器，若在“网络”标签页中看到一个持续产生吞吐的虚拟适配器，即证明整机所有底层流量已被透明接管。此时无需开启“系统代理”，所有第三方软件均已无缝自动翻墙！

---

## 六、生产级高频故障与网络排错手册

### 故障 1：提示“端口 7890 冲突 (WinError 10048)”
- **故障排查**：本地已有其他网络进程（如旧版 CFW、V2rayN、迅雷或本地开发服务器）占用了 7890 端口。
- **解决方案**：进入 Verge 设置 -> “外部控制”，将 \`Mixed Port (混合端口)\` 改为不常用的数字（如 \`17890\` 或 \`27890\`），点击重启内核即可。

### 故障 2：订阅更新提示“TLS Handshake Timeout / 证书失效”
- **故障排查**：Windows 系统时钟偏差。TLS 加密握手协议对时间戳极其严苛，偏差超过 90 秒会直接断开握手。
- **解决方案**：打开 Windows 设置 -> “时间和语言” -> “日期和时间”，点击 **“立即同步”**，与微软标准 NTP 服务器强制对时。

### 故障 3：节点测速全绿但浏览器打不开网页
- **故障排查**：浏览器存在第三方代理插件（如 SwitchyOmega）冲突，或者 DNS 缓存污染。
- **解决方案**：
  1. 将浏览器代理插件切换为“直接连接（系统代理）”。
  2. 以管理员权限打开 CMD，执行 \`ipconfig /flushdns\` 清理本地解析缓存。

---

## 七、节点质量配合与选购决策建议

无论客户端配置多么精密，网络的终极体验取决于底层服务器线路质量。对于使用 Clash Verge Rev 的高阶用户：
- 若追求 **晚高峰（20:00~23:00）4K 视频秒开与办公零丢包**，强烈建议搭配全 IEPL 纯专线机场（如 [隐形人](/review/yinxingren/)、[Sogo云](/review/sogoyun/)）。
- 若追求 **超低单 GB 成本与海量下载**，可前往 [性价比单价排行榜](/ranking/value/) 获取折算每 GB 仅几分钱的优质中转套餐。
- 更多详细参数比对，请随时使用我们的 [机场节点在线对比工具](/compare/)。`
});

// -------------------------------------------------------------
// 2. Windows: Sing-box
// -------------------------------------------------------------
writeGuide('windows-sing-box', {
  title: 'Windows 平台 Sing-box 客户端图形界面与内核配置实战指南',
  description: '面向性能极客的 Windows Sing-box 完整部署指南。基于 Go 语言原生高效架构，深入剖析 inbound/outbound 架构、Hysteria2 协议实测、自定义 DNS 路由规则链与轻量化开机托管。',
  platform: 'Windows',
  recommendedClients: ['Sing-box Core', 'GUI.for.Sing-box', 'Hysteria2'],
  body: `## 一、Sing-box 的划时代架构革新

在现代科学上网与跨境网络工程领域，**Sing-box** 被誉为下一代通用代理平台（The universal proxy platform）。它由 SagerNet 核心团队开发，完全抛弃了旧代代理软件臃肿的历史包袱，采用纯 Go 语言编写，具备以下颠覆性优势：

1. **极致吞吐性能与低内存占用**：单进程内存常驻低至 20MB~35MB，多路复用（Multiplexing）吞吐能力相比传统 Xray 提升 30% 以上。
2. **原生第一梯队支持最新抗封锁协议**：在内核层原生提供对 **Hysteria2 (基于 UDP QUIC 双向拥塞控制)** 与 **TUIC v5** 的完整支持，在高达 20% 丢包率的恶劣链路下仍能跑满物理宽带。
3. **彻底重构的清晰路由系统 (Rule-based Routing)**：废弃了晦涩的复杂链式规则，采用基于入站、出站、规则集（Rule Sets）的清晰 JSON 拓扑。

---

## 二、Windows 平台前端图形化工具选型

纯命令行 Sing-box 内核虽性能卓越，但缺乏可视化操作。目前 Windows 平台最推荐的生产力工具为 **GUI.for.Sing-box**：

| 评估指标 | 纯命令行 Sing-box | GUI.for.Sing-box | Clash Verge Rev |
| :--- | :--- | :--- | :--- |
| **内存占用** | 15MB~25MB (极致) | 40MB~60MB (轻巧) | 60MB~90MB (轻巧) |
| **可视化仪表盘** | 需配置 Web Yacd | 内置现代化 GUI | 内置 Tauri 前端 |
| **Hysteria2 适配**| 原生完美 | 原生完美 | 通过 Mihomo 适配 |
| **适用人群** | 服务器运维 / 极客 | 追求高性能的普通用户 | 习惯 Clash 生态的用户 |

---

## 三、获取配置与自动化订阅加载

### 1. 订阅链接直接载入
在支持原生 Sing-box 订阅的机场控制台（如 [暮光网络](/review/muguang/)、[星岛梦](/review/stardream/)），复制“Sing-box 订阅链接”：
1. 启动 GUI.for.Sing-box，进入 **“订阅管理”**。
2. 点击“添加订阅”，在订阅地址中填入该 URL，配置更新周期为 1440 分钟。
3. 点击“立即更新”，客户端将自动拉取出站节点列表与官方规则集。

### 2. 标准生产级 config.json 核心代码拆解
对于喜爱本地编写配置的工程师，一个高可用标准的 Sing-box JSON 核心拓扑如下：

\`\`\`json
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "dns": {
    "servers": [
      { "tag": "remote-dns", "address": "https://1.1.1.1/dns-query", "detour": "proxy" },
      { "tag": "local-dns", "address": "223.5.5.5", "detour": "direct" }
    ],
    "rules": [
      { "geosite": "cn", "server": "local-dns" },
      { "clash_mode": "Global", "server": "remote-dns" }
    ],
    "strategy": "ipv4_only"
  },
  "inbounds": [
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "127.0.0.1",
      "listen_port": 2080
    },
    {
      "type": "tun",
      "tag": "tun-in",
      "interface_name": "singbox-tun",
      "inet4_address": "172.19.0.1/30",
      "auto_route": true,
      "strict_route": true,
      "stack": "mixed"
    }
  ],
  "route": {
    "rules": [
      { "protocol": "dns", "outbound": "dns-out" },
      { "geosite": "cn", "outbound": "direct" },
      { "geoip": "cn", "outbound": "direct" },
      { "geosite": "category-ads-all", "outbound": "block" }
    ],
    "auto_detect_interface": true
  }
}
\`\`\`

---

## 四、Hysteria2 协议抗丢包与晚高峰调优

如果你的机场套餐支持 **Hysteria2** 协议，在晚高峰（20:00~23:00）公网出口拥堵、普通 Shadowsocks 节点延迟抖动飙升时，Sing-box 能够发挥出惊人的吞吐表现：
- **BBR 拥塞控制原理**：Hysteria2 摒弃了标准 TCP 的慢启动机制，在底层基于 UDP QUIC 进行带宽估计，即使链路丢包达到 15%，4K 视频依然能持续缓冲。
- **端口跳跃 (Port Hopping)**：可在配置中指定 \`server_ports\` 端口范围，绕过某些地区运营商对单一 UDP 端口的恶意限速。

---

## 五、高频报错与性能诊断

### 1. 提示 \`tun.auto_route: create adapter failed\`
- **原因**：缺乏管理员权限，无法在 Windows 系统底层创建 TUN 虚拟网卡。
- **解决**：退出程序，右键客户端图标选择“以管理员身份运行”，并在系统安全软件中将 Sing-box 加入白名单。

### 2. 提示 \`dns: resolve domain failed: connection refused\`
- **原因**：Local DNS 本地解析被防火墙阻断或上游服务器不可达。
- **解决**：在 DNS 配置中将 local-dns 地址替换为国内各大运营商通用的 \`119.29.29.29\` 或 \`114.114.114.114\`。

搭配支持现代协议的优质服务商能够让 Sing-box 发挥 100% 的极速潜力。欢迎查阅我们的 [综合实力排行榜](/ranking/overall/) 与 [节点横向对比工具](/compare/)。`
});

// -------------------------------------------------------------
// 3. Windows: NekoRay
// -------------------------------------------------------------
writeGuide('windows-nekoray', {
  title: 'Windows 平台 NekoRay (NekoBox) 客户端配置教程：全协议支持与链式代理',
  description: '面向网络极客与跨境电商的 NekoRay 全能教程。深入解析 Xray/Sing-box 双核心机制、链式前置代理防封防关联、自定义路由分流与系统级 TUN 模式实操。',
  platform: 'Windows',
  recommendedClients: ['NekoRay', 'NekoBox for Windows', 'Xray-core'],
  body: `## 一、NekoRay 的核心优势与适用场景

**NekoRay**（及其分支 NekoBox for Windows）是基于 Qt 框架开发的跨平台网络工具。在 Windows 平台，它被资深技术人员和跨境电商店铺管理者视为“瑞士军刀”，其最核心的不可替代特性包括：

1. **双核自由热切换 (Dual Engine)**：底层可在 **Xray-core** 与 **Sing-box core** 之间无缝热切换，兼顾传统 V2Ray 生态与前沿 Hysteria2 / TUIC 协议。
2. **原生工业级链式代理 (Chain Proxy / 多级跳板)**：支持将节点 A 设为“前置代理（负责穿透国内骨干网络）”，节点 B 设为“落地代理（负责提供纯净静态原生 IP 访问海外服务）”，有效防范跨境电商店铺关联与风控封号。
3. **真连接实时延迟测试**：支持发送真实 HTTP GET 握手测速，彻底击碎常规 ICMP Ping 的“假绿低延迟”虚标。

---

## 二、安装与内核初始化

1. 从官方 GitHub 仓库下载预编译包 \`nekoray-x.x.x-windows64.zip\`。
2. 解压到非系统盘的纯英文路径（如 \`D:\\Tools\\NekoRay\`），避免中文编码导致内核无法加载。
3. 运行 \`nekoray.exe\`，首次启动弹出内核选择向导：
   - **追求稳定兼容**：选择 **Xray 内核**。
   - **追求极速协议 (Hysteria2/TUIC)**：选择 **Sing-box 内核**。可以在“首选项 -> 核心选项”中随时更改。

---

## 三、节点订阅管理与分组维护

1. 点击主界面顶部菜单 **“分组 (Groups)” -> “分组设置”**。
2. 点击“新建分组”，类型下拉选择 **“订阅 (Subscription)”**。
3. 在“订阅链接”栏目中粘贴机场提供的 Base64 通用订阅链接或 Clash 订阅链接。
4. 点击“更新订阅”，所有节点将以卡片树状形式载入。
5. **批量真实延迟测试**：按键盘 \`Ctrl + A\` 全选节点，按下快捷键 \`Ctrl + R\`（或右键选择“测试服务器真实延迟”），软件将向 Cloudflare 发起实际 GET 请求，筛选出真实延迟最低的节点。

---

## 四、链式代理实战（跨境电商防封防关联终极方案）

对于亚马逊、eBay、Shopee 或 TikTok 外贸运营人员，直接使用普通机房节点极易触发异地登录风控：
1. **第一级（前置节点）**：选择国内直连速度快、延迟极低的 BGP 优化专线节点（如 [微风网络](/review/breezenet/)）。
2. **第二级（落地节点）**：选择具备原生住宅双 ISP 属性的海外本土节点（如 [大佬云](/review/dalaocloud/) 的美国/英国住宅专线）。
3. **配置方法**：
   - 在 NekoRay 节点列表右键点击前置节点，选择 **“设置为主配置”**。
   - 右键点击落地节点，选择 **“作为出口代理 (Detour 出站)”**。
4. 此时你的流量拓扑为：\`你的电脑 -> 专线隧道 -> 住宅原生IP -> 目标电商后台\`，既保证了连接毫无卡顿，又保证了落地 IP 的极度纯净！

---

## 五、开启系统级 TUN 虚拟网卡模式

在主界面顶部勾选 **“TUN 模式”**：
- 首次开启时，客户端会自动注入虚拟网络驱动，整机所有 TCP/UDP 流量将被透明接管。
- 在“路由设置”中，务必选择 **“绕过局域网及大陆 (Bypass LAN & Mainland China)”**，确保本地微信、百度、钉钉直接走本地物理网卡，节约节点流量并降低内网延迟。

更多支持住宅双 ISP 与大带宽的优质服务商，欢迎查阅本站 [综合实力排行榜](/ranking/overall/)。`
});

// -------------------------------------------------------------
// 4. Windows: v2rayN
// -------------------------------------------------------------
writeGuide('windows-v2rayn', {
  title: 'v2rayN 客户端经典图文教程：Xray / Sing-box 双内核切换与订阅更新',
  description: 'Windows 平台最普及的老牌代理客户端 v2rayN 深度手册。涵盖 .NET 8 环境依赖、PAC/系统代理模式设置、路由高级规则编写与测速防坑排错。',
  platform: 'Windows',
  recommendedClients: ['v2rayN', 'Xray-core', 'WPF UI'],
  body: `## 一、老牌霸主 v2rayN 的设计哲学

**v2rayN** 是 Windows 平台发展历史最悠久、装机量最大的经典代理客户端。它采用微软原生 WPF 框架编写，没有花哨无用的动画，所有网络核心参数均以最纯粹的表格化、数据流方式呈现给用户。

### 为什么许多专业站长依然常备 v2rayN？
1. **极致稳定**：经过数年数千次迭代，极少发生异常崩溃或内存泄露。
2. **极速启动**：冷启动仅需不到 1 秒，占用系统资源微乎其微。
3. **透明化参数审计**：每一条连接的实时上行/下行速率、匹配的路由命中规则均可在底部日志实时抓取，排错极其透明。

---

## 二、系统依赖与安装部署

1. **下载完整内核版**：访问官方 GitHub Release，务必下载带有内核的整合包：\`v2rayN-With-Core.zip\`（避免只下载了外壳却无法运行内核）。
2. **安装 .NET 8 Desktop Runtime**：
   - v2rayN 基于微软最新技术构建，如果电脑双击打不开，说明缺少运行库。
   - 访问微软官方网站，下载并安装 **.NET 8.0 Desktop Runtime (x64)**。
3. 解压整合包至 \`D:\\v2rayN\` 目录，双击 \`v2rayN.exe\` 启动。

---

## 三、订阅导入与节点管理

1. 打开主界面，点击顶部菜单栏 **“订阅分组” -> “订阅分组设置”**。
2. 点击左下角“添加”，在右侧面板输入：
   - 备注：如“光年梯专线”。
   - 可选地址 (url)：粘贴机场提供的通用订阅链接。
3. 点击“确定”保存，返回主界面。
4. 点击顶部菜单 **“订阅分组” -> “更新全部订阅 (不通过代理)”**，等待数秒，所有节点将自动排列在主表格中。

---

## 四、系统代理与路由规则设计

在屏幕右下角的 Windows 系统托盘区，找到 v2rayN 的图标进行工作模式设定：

### 1. 系统代理模式切换（左键双击或右键托盘）
- **清除系统代理 (图标变蓝)**：客户端仅作为本地 Socks5/HTTP 服务运行，不强制修改 Windows 系统网络，适合配合浏览器 SwitchyOmega 插件使用。
- **自动配置系统代理 (图标变红)**：客户端自动接管 Windows 系统网络设置，所有支持系统代理的浏览器和桌面应用自动翻墙。

### 2. 路由模式设置（至关重要）
点击主界面底部的“路由”下拉框：
- **绕过大陆 (Whitelist)**【强烈推荐】：内置精细的 GeoIP 与 GeoSite 数据库。中国大陆境内所有 IP 与域名自动直连，境外流量自动走代理节点。
- **全局 (Global)**：无论访问什么网站全部走节点，日常使用会严重浪费流量且导致国内微信/淘宝加载缓慢，不建议开启。

---

## 五、常见报错速查

- **报错提示 \`Failed to start core\`**：检查是否被杀毒软件误杀了目录下的 \`xray.exe\` 或 \`sing-box.exe\`，在 Windows Defender 中将 v2rayN 所在目录加入排除项。
- **提示 \`端口已被占用 10808\`**：在“参数设置”中将本地监听 Socks 端口从 10808 改为 20808 即可。

如需选购低延迟、低抖动的优质专线节点，欢迎查阅本站 [机场推荐专线专题](/recommend/stable/) 与 [机场综合排行榜](/ranking/overall/)。`
});

// -------------------------------------------------------------
// 5. iOS: Shadowrocket (小火箭)
// -------------------------------------------------------------
writeGuide('ios-shadowrocket', {
  title: 'iOS 平台 Shadowrocket (小火箭) 节点导入、测速与分流规则配置完整指南',
  description: 'iPhone 与 iPad 用户必备科学上网工具小火箭深度指南。从外区 Apple ID 获取、二维码扫描添加、节点连通性测试、自定义分流规则集编写到全天候省电保活。',
  platform: 'iOS',
  recommendedClients: ['Shadowrocket (小火箭)', 'iOS 15-18 全兼容'],
  body: `## 一、小火箭 (Shadowrocket) 的统治级地位

在苹果 iOS 生态下，**Shadowrocket**（中文圈通称“小火箭”）是普及率最高、口碑最好的网络调试工具。它完全遵循苹果 Network Extension 底层框架开发，不仅具备全协议支持（Shadowsocks、Trojan、VLESS、VMess、Hysteria2、TUIC、WireGuard），而且后台能耗极低，待机一整天耗电量通常不超过 3%。

---

## 二、海外 Apple ID 获取与安全下载

由于政策合规要求，小火箭无法在国区 App Store 搜索下载：
1. **准备海外 Apple ID**：建议拥有一个美国、香港或日本区域的 Apple ID。
2. **下载正版应用**：
   - 打开 App Store，退出当前国区账号，登录海外 Apple ID。
   - 搜索 **Shadowrocket**。
   - **注意防范李鬼钓鱼**：认准开发者为 **PanGuoJian**，售价约为 $2.99 美元。切勿下载任何名称相似的免费仿冒 App，以防账号密码外泄！
3. 购买方式：可通过海外信用卡、PayPal 或在正规电商平台购买对应区域的苹果礼品卡（Gift Card）充值兑换。

---

## 三、导入机场订阅的三种生产方式

### 方式 1：Safari 一键唤起导入（最便捷）
在 iPhone 手机自带的 Safari 浏览器中登录机场后台（如 [隐形人](/review/yinxingren/)、[微风网络](/review/breezenet/)），在首页点击 **“一键导入 Shadowrocket”**，手机系统会自动弹窗唤起小火箭，并全自动将所有节点写入应用。

### 方式 2：扫描二维码导入
打开小火箭，点击左上角“扫描”图标，对准电脑屏幕上机场后台展示的订阅二维码，秒级完成导入。

### 方式 3：手动添加订阅（防屏蔽最稳）
1. 打开小火箭，点击首页右上角的加号 **“+”**。
2. 将 **“类型 (Type)”** 下拉选择为 **“Subscribe”**。
3. 在 **“URL”** 栏中长按粘贴机场提供的专属订阅地址。
4. “备注”输入机场名称（如“微风专线”）。
5. 点击右上角“完成”，小火箭将自动下载配置并展开所有节点列表。

---

## 四、节点连通性真测试与排序

很多新手以为节点列表右侧显示的绿色数字越小越快，实际上那往往只是 TCP Ping 延迟：
1. 点击首页 **“连通性测试 (Connectivity Test)”**。
2. 点击右上角设置图标，将测试方法改为 **“真实网页连通性 (CONNECT / HTTP HEAD)”**。
3. 重新测试，凡是显示具体数字（如 120ms）代表该节点当前不仅链路通畅，而且成功与海外服务器建立了握手；显示“超时 / Timeout”的节点应避免使用。

---

## 五、全局路由与智能分流配置

小火箭主页的 **“全局路由 (Global Routing)”** 决定了手机所有 App 的流量走向：
- **配置 (Config)**【强烈推荐】：严格按照分流规则运行。国内 App（微信、抖音、支付宝、高德地图等）自动走直连，海外网站走代理节点。
- **代理 (Proxy)**：所有流量强制走选定节点，可能导致微信发图卡顿、银行 App 报警，日常严禁开启。
- **直连 (Direct)**：所有流量不走代理。

### 开启系统连接：
轻触小火箭顶部的主开关，系统会弹窗提示“Shadowrocket 想要添加 VPN 配置”，点击 **“Allow (允许)”**，输入 iPhone 锁屏密码即可成功开启。屏幕右上角状态栏将出现标准的 VPN 小图标。

---

## 六、进阶排错：小火箭连上后微信正常但外网无法打开？
1. **检查手机本地时间**：进入 iPhone 设置 -> 通用 -> 日期与时间，打开“自动设置”。时间偏差会导致 TLS 握手彻底失效。
2. **更新订阅配置文件**：在小火箭首页向左滑动订阅条目，点击“更新”，防止节点 IP 因不可抗力变更而失效。

想要挑选全节点原生支持流媒体与 ChatGPT 的稳定机场？欢迎查阅本站 [综合实力排行榜](/ranking/overall/) 与 [机场对比工具](/compare/)。`
});

// -------------------------------------------------------------
// 6. 路由器: OpenWrt PassWall
// -------------------------------------------------------------
writeGuide('openwrt-passwall', {
  title: 'OpenWrt 软路由 PassWall 插件节点订阅导入与多流智能分流教程',
  description: '打造全家无感科学上网网络环境。OpenWrt 软路由 PassWall 2 插件节点订阅导入、主备节点自动故障转移、分流规则集与 DNS 防泄漏防污染实操。',
  platform: '路由器',
  recommendedClients: ['OpenWrt', 'PassWall 2', 'Xray/Sing-box'],
  body: `## 一、为什么软路由 PassWall 是家庭网络的终极解法？

在现代智能家庭环境中，不仅手机和电脑需要访问境外网络，越来越多的设备（如 **Apple TV、索尼智能电视、PS5/Nintendo Switch 游戏机、智能家居音箱**）同样具备出海需求。但在这些设备上逐一安装和配置代理软件不仅极其繁琐，某些封闭系统甚至根本无法安装第三方客户端。

**OpenWrt 搭配 PassWall 插件**是目前软路由领域最受推崇的透明网关解决方案：
- **全屋设备零配置**：任何设备只要连入家庭 Wi-Fi 或插上网线，瞬间具备科学上网能力。
- **多流分流与负载均衡**：可设定电视走流媒体专线、游戏机走低延迟专线、手机日常走大流量中转。
- **多节点主备故障自动无缝漂移**：主力专线波动时，毫秒级切换备用节点，家人观影零卡顿。

---

## 二、环境依赖与固件检查

1. 确认软路由已刷入集成了 **Lienol** 或 **Sirpdboy** 编译的 PassWall 或 PassWall 2 插件固件。
2. 确保后台已安装最新版的组件内核：\`xray-core\`、\`sing-box\`、\`dns2socks\` 与 \`chinadns-ng\`。
3. 登录软路由后台 Web 界面（通常为 \`192.168.1.1\` 或 \`192.168.100.1\`），在左侧“服务”菜单找到 **PassWall**。

---

## 三、导入机场节点订阅与自动更新任务

1. 进入 PassWall 界面，点击上方导航的 **“节点订阅”** 标签页。
2. 点击下方的 **“添加”** 按钮：
   - 备注名称：输入你的机场名称（如“微风网络专线”）。
   - 订阅网址：粘贴机场后台提供的订阅链接（支持 Clash 或 V2Ray 通用格式）。
   - 开启自动更新：勾选该选项，并将更新时间设定为凌晨闲时（如 \`04:30\`）。
3. 点击“保存并应用”，然后点击右下角的 **“手动更新订阅”**。
4. 切换到“节点列表”，可以看到成百上千个海外节点已整齐列入路由数据库中。

---

## 四、核心节点设置与自动故障转移 (Failover)

进入 PassWall **“基本设置”**：

### 1. 主节点选择
- **TCP 节点**：选择你最稳定的优质 IEPL 内网专线节点（如 [隐形人](/review/yinxingren/) 香港 01）。TCP 负责承载全家 90% 的网页浏览、视频播放与大文件下载流量。
- **UDP 节点**：选择与 TCP 相同的节点或选择低延迟的日本/韩国专线。UDP 负责承载语音通话、视频会议以及主机联机加速。

### 2. 自动切换配置（全天候无缝保活）
勾选 **“自动切换”** 功能：
- 检测时间间隔：建议设为 \`60 秒\`。
- 检测目标地址：填入高可用境外探测源（如 \`www.google.com\` 或 \`1.1.1.1\`）。
- 备用节点列表：添加 2~3 个其他备用节点。一旦主力节点受到网络波动或维护断开，PassWall 会在两秒内自动切换到备用线路，彻底告别“节点挂了全家断网”的尴尬！

---

## 五、DNS 防污染与分流模式选型

PassWall 的灵魂在于 DNS 的科学分流：
1. **运行模式**：强烈推荐选择 **“中国列表外的网站走代理 (GFW List / Chnroute)”**。
2. **中国 DNS 服务器**：配置为电信或阿里的公共 DNS（\`223.5.5.5\`），确保淘宝、微信、网易云等国内应用以最高速直连。
3. **可信过滤 DNS**：选用通过节点加密转发的 \`1.1.1.1\` 或 \`8.8.8.8\`，彻底避免运营商本地 DNS 劫持与投毒。

软路由对节点的晚高峰抗压能力要求极高，建议在 [稳定性专线榜单](/ranking/stable/) 中挑选适合家庭路由长期挂载的优质服务商。`
});

// -------------------------------------------------------------
// 7. 专项: ChatGPT & Claude AI 防封
// -------------------------------------------------------------
writeGuide('chatgpt-claude-ai-fix', {
  title: 'ChatGPT 4o 与 Claude 3.5 访问受限、403 阻断及降智彻底解决教程',
  description: '深度剖析 OpenAI 与 Anthropic 风控机制。解决“Access Denied 403”、“Unable to load conversation”、“Oops something went wrong”及模型自动降智问题。',
  platform: '专项解决方案',
  recommendedClients: ['原生双ISP专线', '住宅IP节点', 'WebRTC Block'],
  body: `## 一、为什么你的 AI 总是提示 403 / 降智？

在日常使用 **ChatGPT (GPT-4o)**、**Claude 3.5 Sonnet** 或 **Midjourney** 时，很多用户经常遭遇以下令人崩溃的报错：
- \`Access Denied (Error code 403 / Cloudflare Ray ID)\`
- \`Unable to load conversation / Something went wrong\`
- 账号明明开通了 Plus 或 Team 会员，但发现模型无法调用高级搜索、无法绘图，甚至回答质量大幅下降（被 OpenAI 静默**降智**，分配至最简陋的边缘轻量算力）。

### 核心风控机制揭秘：
1. **数据中心 IP (DataCenter IP) 黑名单**：各大云厂商（AWS、阿里云国际、搬瓦工、Linode）的机房 IP 拥有明确的 ASN 编号。当数千个账号从同一个机房 IP 并发访问时，Cloudflare 会瞬间启动最严苛的风控清洗，直接拦截或降智。
2. **原生双 ISP 住宅属性识别**：OpenAI 官方最信任的 IP 属于当地家庭宽带（ISP / Residential IP，如香港 HKBN、台湾中华电信 HiNet、美国 AT&T / Verizon）。
3. **WebRTC 内网真实 IP 穿透泄漏**：浏览器底层的 WebRTC 协议会悄悄向 OpenAI 服务器汇报你的国内真实 IP 地址。

---

## 二、实操三步法彻底根治 AI 访问受限

### 第一步：在客户端中设置精准分流规则
切勿让所有流量胡乱轮询。在 Clash Verge、Surge 或小火箭中，单独为 AI 域名建立独立的策略组：

\`\`\`yaml
# Clash 策略组示例：将 OpenAI 与 Anthropic 绑定到专属双 ISP 节点
proxy-groups:
  - name: "🤖 AI生产力专用"
    type: select
    proxies:
      - "🇺🇸 美区住宅-双ISP"
      - "🇯🇵 日本原生-双ISP"

rules:
  - DOMAIN-SUFFIX,openai.com,🤖 AI生产力专用
  - DOMAIN-SUFFIX,chatgpt.com,🤖 AI生产力专用
  - DOMAIN-SUFFIX,oaistatic.com,🤖 AI生产力专用
  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 AI生产力专用
  - DOMAIN-SUFFIX,anthropic.com,🤖 AI生产力专用
  - DOMAIN-SUFFIX,claude.ai,🤖 AI生产力专用
\`\`\`

### 第二步：彻底禁用浏览器的 WebRTC 泄漏
1. 打开 Chrome 或 Edge 应用商店，搜索并安装扩展 **“WebRTC Control”**。
2. 将其工作模式设为 **“Disable Non-Proxied UDP (完全禁用未代理的 WebRTC)”**。
3. 访问权威检测网站 \`https://browserleaks.com/webrtc\`，确保检测报告中的“Public IP Address”与你的代理节点 IP 完全一致，绝不显示中国境内 IP。

### 第三步：清理被污染的本地存储与时区校准
1. 打开浏览器设置，搜索并清理所有包含 \`openai.com\` 和 \`chatgpt.com\` 的 Cookie 与本地缓存。
2. 将电脑系统的时区临时调整为节点所在地时区（如美国西五区或日本东京时间 GMT+9）。

---

## 三、AI 工具专用节点选购指南

选购专用于 AI 办公的节点时，必须认准具有**“双 ISP 住宅落地”**标签的机场服务商。欢迎直接前往本站专属专题 **[ChatGPT & AI 专用机场专题](/recommend/ai/)**，挑选经过实测完全解锁 GPT-4o 深度推理的优质线路。`
});

// -------------------------------------------------------------
// 8. 专项: 4K 流媒体全解锁 (Netflix / Disney+)
// -------------------------------------------------------------
writeGuide('netflix-disney-streaming-unlock', {
  title: 'Netflix 跨区非自制剧与 Disney+ 4K 原生解锁节点选择与分流实战',
  description: '告别只能看自制剧的尴尬！解决 Netflix 代理检测、提示“您似乎在使用代理”、Disney+ 登录 Error 83 与最高码率 4K 杜比视界播放设置。',
  platform: '专项解决方案',
  recommendedClients: ['双ISP节点', '分流策略组', '4K HDR'],
  body: `## 一、“伪解锁”与“原生全解锁”的本质区别

很多便宜机场在宣传单上声称“支持 Netflix 解锁”，但实际使用时用户往往发现：
- 只能观看 Netflix 官方投资制作的原创影片（如《怪奇物语》、《鱿鱼游戏》），因为自制剧全球版权开放，不需要地域验证。
- 搜索不到华纳、迪士尼、索尼等第三方授权的大热剧集（如《绝命毒师》、《生活大爆炸》、《蜘蛛侠》）。
- 打开播放页面时，画面经常被锁死在模糊的 480P 或 720P，无法握手 4K 杜比视界（Dolby Vision）。

### 真正原生全解锁的核心条件：
1. **落地 IP 具备原生住宅 ISP 属性**：在 Netflix 采购的 MaxMind 与 IP2Location 数据库中，该 IP 未被标记为机房（Hosting）。
2. **充足的单流冗余下行带宽**：Netflix 4K 超高清码率要求单流稳定吞吐大于 25Mbps，Disney+ IMAX Enhanced 更是要求 35Mbps 以上。

---

## 二、各地区特色片库与节点调度策略

在配置客户端分流时，建议根据片库特色精细分流：
- **香港 (HK) 节点**：中文字幕覆盖率最高，几乎 100% 的海外影视剧均标配官方繁体/简体中文，是新手的无脑首选。
- **日本 (JP) 节点**：动漫新番首发片库世界第一，拥有大量仅在日本本土上映的独占吉卜力剧场版与深夜番剧。
- **台湾 (TW) 节点**：拥有非常多欧美院线电影的中文字幕首发权，且中文本地化翻译极其地道。
- **美国 (US) 节点**：全球片库总量最大，适合追欧美最新首播美剧。

---

## 三、客户端流媒体智能分流规则编写

在客户端中，构建专门针对影视应用的独立规则集：

\`\`\`yaml
proxy-groups:
  - name: "🎬 4K流媒体"
    type: select
    proxies:
      - "🇭🇰 香港-原生解锁"
      - "🇹🇼 台湾-原生解锁"
      - "🇯🇵 日本-原生解锁"

rules:
  - DOMAIN-SUFFIX,netflix.com,🎬 4K流媒体
  - DOMAIN-SUFFIX,netflix.net,🎬 4K流媒体
  - DOMAIN-SUFFIX,nflxext.com,🎬 4K流媒体
  - DOMAIN-SUFFIX,nflximg.net,🎬 4K流媒体
  - DOMAIN-SUFFIX,disneyplus.com,🎬 4K流媒体
  - DOMAIN-SUFFIX,disney-portal.my.onetrust,🎬 4K流媒体
  - DOMAIN-SUFFIX,hbo.com,🎬 4K流媒体
\`\`\`

更多经过严格 4K 码率压测的优质服务商，欢迎参考本站 [4K 流媒体全解锁精选专题](/recommend/streaming/)。`
});

// -------------------------------------------------------------
// 9. 专项: 程序员 Git/Docker/WSL2
// -------------------------------------------------------------
writeGuide('git-github-terminal-proxy', {
  title: '程序员必看：终端 Bash、Git、Docker 及 WSL2 极速代理环境配置指南',
  description: '彻底解决 git clone 龟速、Failed to connect to github.com、Docker pull 超时与 WSL2 无法访问宿主机代理的综合实战方案。',
  platform: '开发与办公',
  recommendedClients: ['Git Proxy', 'WSL2 TUN', 'Docker Mirror'],
  body: `## 一、开发者的日常网络阻塞痛点

对于软件开发工程师、算法研究员与运维工程师，在日常工作中经常遭遇：
- 执行 \`git clone\` 时频繁报错 \`fatal: unable to access 'https://github.com/...': Failed to connect to github.com port 443: Timed out\`。
- 在 Linux 或 WSL2 下执行 \`npm install\`、\`pip install\`、\`cargo build\` 或 \`docker pull\` 慢如龟速甚至无故中断。
- 为什么浏览器开了代理能上网，终端命令行依然连不上？因为**命令行环境默认完全不继承操作系统的图形代理配置**。

---

## 二、Git 针对性极速代理配置

建议仅针对 GitHub 官方域名单独挂载代理，切勿全局粗暴代理，否则会导致拉取国内 Gitee 或企业内部 GitLab 时绕道海外：

\`\`\`bash
# 1. 针对 github.com 单独设置 HTTP/HTTPS 代理 (假设本地端口为 7890)
git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy http://127.0.0.1:7890

# 2. 针对 SSH 协议 (git@github.com) 配置代理
# 编辑 ~/.ssh/config 文件，追加以下内容：
Host github.com
    User git
    ProxyCommand connect -H 127.0.0.1:7890 %h %p

# 3. 验证测速
git clone --depth 1 https://github.com/torvalds/linux.git
\`\`\`

---

## 三、Linux / macOS 终端环境变量函数

在 \`~/.bashrc\` 或 \`~/.zshrc\` 文件末尾加入以下便捷控制函数，随时在命令行键入 \`setproxy\` 即可瞬时提速：

\`\`\`bash
# 终端快捷代理控制函数
function setproxy() {
    export http_proxy="http://127.0.0.1:7890"
    export https_proxy="http://127.0.0.1:7890"
    export all_proxy="socks5://127.0.0.1:7890"
    echo "HTTP & SOCKS5 Proxy initialized at 127.0.0.1:7890"
    curl -I https://www.google.com
}

function unsetproxy() {
    unset http_proxy
    unset https_proxy
    unset all_proxy
    echo "Proxy environment variables cleared."
}
\`\`\`

---

## 四、WSL2 子系统优雅穿透 Windows 宿主机代理

Windows 11 的 WSL2 运行在独立的 Hyper-V 虚拟机内，拥有独立的虚拟子网 IP。
- **终极解决方案**：直接在 Windows 端 Clash Verge Rev 中开启 **TUN 模式**。开启后，虚拟网卡直接接管整个 Hyper-V 虚拟交换机的所有数据包，WSL2 内无需任何配置即可全自动跑满千兆带宽出海！`
});

// -------------------------------------------------------------
// 10. 进阶: TUN 模式与系统代理对比
// -------------------------------------------------------------
writeGuide('tun-mode-vs-system-proxy', {
  title: 'TUN 虚拟网卡模式与系统代理对比及全流量接管防泄漏配置',
  description: '深度技术解析：传统 System Proxy 与底层虚拟网卡 TUN 模式的运行机制差异。如何实现整机流量无死角接管，彻底防范代理穿透与 IP 泄漏。',
  platform: '进阶调优',
  recommendedClients: ['TUN Mode', 'Wintun', 'gVisor'],
  body: `## 一、工作层级深度对比：Layer 3 vs Layer 7

很多用户在使用代理软件时，常常困惑为什么开了代理软件，某些应用依然提示无网络。其核心根源在于“系统代理”与“TUN 模式”工作在完全不同的 OSI 网络层级：

| 评估维度 | 系统代理 (System Proxy) | TUN 虚拟网卡模式 (TUN Mode) |
| :--- | :--- | :--- |
| **OSI 网络层** | **Layer 7 应用层** | **Layer 3 网络层** |
| **协议支持** | 仅支持显式遵循代理的 HTTP/HTTPS | **TCP、UDP、ICMP (Ping) 全协议无差别接管** |
| **驱动注入** | 无需驱动，仅修改操作系统注册表 | 调用 \`wintun.dll\` 虚拟网卡底层驱动 |
| **应用程序穿透**| 不规范的软件会直接越过代理发起直连 | **从网卡物理层拦截，绝无可能穿透** |
| **典型应用场景**| 网页浏览、常规社交软件 | 终端命令行、Docker、游戏联机、防真实 IP 泄漏 |

---

## 二、TUN 模式底层核心参数调优

在 Clash Verge Rev 或 Sing-box 中配置 TUN 时，合理调整以下参数能获得最佳性能：
- **stack (网络栈驱动)**：
  - \`system\`：调用操作系统原生网络栈，性能极佳，占用内存最小。
  - \`gVisor\`：基于用户态 Go 语言重写网络栈，隔离性与安全性最高。
  - \`mixed\`【强烈推荐】：兼顾稳定与极低延迟。
- **MTU 大小**：建议配置在 \`1420\` ~ \`1500\`。如果遇到特定网站加载大图卡死，可适当调低至 \`1280\`。
- **strict-route**：设为 \`true\`，强制拦截所有未指明的路由请求，杜绝多网卡分流导致的真实 IP 泄漏。

更多底层网络调优技巧与高品质专线选购，欢迎查阅本站 [使用教程中心](/guides/) 与 [综合实力排行榜](/ranking/overall/)。`
});

// -------------------------------------------------------------
// 11. 安全: DNS 与 WebRTC 防泄漏
// -------------------------------------------------------------
writeGuide('security-dns-leak-prevention', {
  title: '防止 DNS 污染与 WebRTC IP 真实泄漏：安全隐私深度加固指南',
  description: '跨境办公与隐私安全必备：利用 ipleak.net 等专业工具检测真实 IP 泄漏。深入讲解 DoH/DoT 加密解析、禁用 WebRTC 与防追踪终极配置。',
  platform: '安全与隐私',
  recommendedClients: ['DoH', 'WebRTC Block', 'Private DNS'],
  body: `## 一、你的真实身份真的安全吗？两大隐蔽泄漏通道

在涉外办公、跨境电商或隐私敏感场景中，许多用户误以为只要屏幕右上角显示了代理图标就万无一失。然而，通过专业的风控检测，目标网站往往可以在数毫秒内拿到你的真实中国 IP：

### 1. WebRTC 穿透泄漏 (STUN/TURN 协议)
WebRTC 是现代浏览器用于点对点视频通话的协议。该协议在与远程建立握手时，会**绕过所有系统 HTTP 代理设置**，直接向 STUN 服务器发起 UDP 嗅探，将你本地网卡的公网真实 IP 暴露在网页 JavaScript 代码中！

### 2. DNS 污染与查询记录留存
如果你的代理配置不当，在访问海外敏感站点时，域名的解析请求却被发送给了本地电信或联通的递归 DNS 服务器。运营商的日志服务器会清晰记录你在某年某月某日查询了某个特定境外域名。

---

## 二、实战检测：你的网络安全体检

立即打开国际权威的隐私检测网站：
1. **IP 归属检测**：访问 \`https://ipleak.net\`，查看页面顶部的“Your IP Address”。
2. **WebRTC 检测**：向下滚动至 **“WebRTC Detection”**，如果这一栏中赫然出现了你的国内真实 IP，说明存在高危泄漏！
3. **DNS 泄漏测试**：点击 **“DNS Leak Test”**，如果列表中出现了带有中国国旗或国内运营商名称的解析节点，说明你的 DNS 正在被本地监听。

---

## 三、生产级加固方案

1. **浏览器安装 WebRTC 阻断插件**：
   - 安装官方扩展 **WebRTC Control**，开启全面阻断。
2. **开启客户端加密 DoH (DNS over HTTPS)**：
   - 将远程 DNS 地址全部更换为基于 HTTPS 传输的安全端点：\`https://1.1.1.1/dns-query\` 与 \`https://8.8.8.8/dns-query\`。
3. **选购纯净内网专线**：
   - 普通公网中转节点链路复杂，容易在中间节点遭到数据抓包。选择 [隐形人](/review/yinxingren/)、[Sogo云](/review/sogoyun/) 等全 IEPL 独立专线，内网点对点穿透，安全性达到金融级标准。`
});

console.log('Finished writing featured deep guides!');
