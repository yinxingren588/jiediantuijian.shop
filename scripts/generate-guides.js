/**
 * scripts/generate-guides.js
 * Generates 30 highly professional, in-depth usage tutorials for jiediantuijian.shop
 */

import fs from 'fs';
import path from 'path';

const guidesDir = path.resolve('src/content/guides');

if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}

const tutorials = [
  {
    slug: 'windows-clash-verge-rev',
    platform: 'Windows',
    title: 'Windows 平台 Clash Verge Rev 完整安装与节点订阅配置实战教程',
    description: '深入详解 Windows 平台最新开源主流代理客户端 Clash Verge Rev 的下载、内核选择 (Mihomo/Alpha)、节点订阅导入、TUN 虚拟网卡模式及智能规则分流调优。',
    recommendedClients: ['Clash Verge Rev', 'Mihomo'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么推荐 Clash Verge Rev 作为 Windows 首选客户端？

在原作者停更传统 Clash for Windows 后，基于 Tauri 框架重构、内置现代化 **Mihomo (原 Clash.Meta)** 内核的 **Clash Verge Rev** 迅速成为 Windows 生态下最安全、性能最强且内存占用极低的开源客户端。

它原生支持包括 Shadowsocks、Trojan、VLESS、VMess 以及新一代 **Hysteria2** 和 **TUIC** 协议，支持一键接管系统网络，提供直观的节点测速、分流策略组切换及系统级 TUN 虚拟网卡模式。

---

## 一、客户端下载与环境准备

1. **官方正版开源获取**：
   - 务必从官方 GitHub Release 页面获取安装包（切勿从不明第三方软件站下载附带后门的修改版）。
   - 推荐下载：\`Clash.Verge_x.x.x_x64-setup.exe\`（64位安装包）或便携免安装版本。
2. **系统环境要求**：
   - Windows 10 (1809以上) 或 Windows 11 64位操作系统。
   - 首次使用需确保系统已安装 Microsoft Visual C++ 运行库与 WebView2 运行环境。

---

## 二、获取并导入机场节点订阅

1. 登录您所选购的机场后台控制台（如本站推荐的 [隐形人](/review/yinxingren/)、[微风网络](/review/breezenet/) 或 [光速云](/review/lightspeed/)）。
2. 在控制台首页的**“便捷导入”**或**“一键订阅”**区域，找到 **“Clash 订阅”**。
3. 点击“复制 Clash 订阅链接”（若机场支持一键导入，点击后浏览器将自动拉起客户端）。
4. 打开 Clash Verge Rev 客户端，点击左侧菜单栏的 **“订阅 (Profiles)”**。
5. 在顶部输入框粘贴刚才复制的订阅 URL，随后点击 **“导入 (Import)”** 按钮。
6. 等待右下角提示“订阅更新成功”，选中刚刚导入的订阅配置文件（右键可设置自动定时更新，建议设置为 1440 分钟/24小时）。

---

## 三、核心工作模式与策略分流配置

进入客户端左侧 **“代理 (Proxies)”** 界面，您将看到由机场预先编排的策略组：

1. **选择代理模式**：
   - **规则 (Rule) 模式**【强烈推荐】：国内流量（百度、微信、网易云等）自动走 DIRECT 直连，外网流量走代理，兼顾速度与节省机场配额。
   - **全局 (Global) 模式**：所有流量强制通过选定节点，仅在排查网络或特定冷门网站时临时使用。
   - **直连 (Direct) 模式**：完全不经代理。
2. **常用策略组切换**：
   - **节点选择 (PROXY)**：手动选择你希望使用的主力节点（如香港、日本、新加坡）。
   - **ChatGPT / OpenAI 专用策略组**：选择标有“双ISP”、“原生住宅”或“解锁”的节点，避免 403 阻断。
   - **自动测速 (Auto / UrlTest)**：由客户端每隔若干分钟自动 Ping 测试延迟，始终走响应最快的节点。

---

## 四、开启 TUN 虚拟网卡模式（解决游戏与终端不走代理）

很多用户发现：虽然开启了系统代理，但 Windows 命令行 (CMD/PowerShell)、Git、某些海外游戏或第三方应用依然连不上外网。这是因为传统系统代理仅接管遵循系统代理环境变量的 HTTP/HTTPS 请求。

**开启 TUN 模式的方法**：
1. 打开 Clash Verge Rev 的 **“设置 (Settings)”**。
2. 找到 **“TUN 模式”** 开关。
3. 首次开启时，请确保使用**管理员权限**运行客户端，客户端将自动安装虚拟网卡驱动（Wintun）。
4. 开启后，整机所有网络流量（包括 UDP 协议、游戏联机、无代理设置的应用）均将被底层虚拟网卡透明接管。

---

## 五、常见故障排除与网络自检

- **提示“端口冲突 7890 无法启动”**：打开设置，将默认的 Mixed Port (混合端口) 从 7890 更改为 7895 或 17890 即可。
- **订阅更新提示“Network Error / 证书错误”**：检查电脑本地系统时间是否准确（时间偏差超过 90 秒将导致 TLS 握手失败）；关闭冲突的安全防护软件。
- **网页无法打开但节点有延迟跑分**：检查浏览器是否安装了冲突的代理插件（如 SwitchyOmega），确保代理插件已交出控制权。

> 需要挑选晚高峰抗丢包的优质节点？欢迎查阅我们的 [机场综合排行榜](/ranking/overall/) 与 [机场节点横向对比工具](/compare/)。`
  },
  {
    slug: 'windows-sing-box',
    platform: 'Windows',
    title: 'Windows 平台 Sing-box 客户端图形界面与内核配置实战指南',
    description: '新一代网络通用代理内核 Sing-box 在 Windows 平台的详细部署手册。涵盖图形客户端选用、多协议分流规则构建与高性能内存优化。',
    recommendedClients: ['Sing-box', 'GUI.for.Sing-box'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 认识现代代理利器：Sing-box

**Sing-box** 是继 Clash 与 Xray 之后的现代化跨平台通用通用网络代理框架。凭借 Go 语言原生高性能架构与极低的内存占用，它在处理大流量并发、多路复用（Multiplex）及新一代 **Hysteria2** 和 **TUIC** 协议时表现出显著的吞吐优势。

在 Windows 平台，除了原生的命令行内核，目前广泛采用 **GUI.for.Sing-box** 或内置图形前端的集成发行版。

---

## 一、软件获取与安装

1. 从官方 GitHub 仓库下载 **GUI.for.Sing-box** 或官方 Windows 64位包。
2. 解压至无中文路径的本地磁盘目录（例如 \`D:\\Network\\SingBox\`）。
3. 建议将主程序发送桌面快捷方式，并右键勾选“以管理员身份运行”（以便顺利配置虚拟网络适配器）。

---

## 二、订阅链接获取与配置转换

1. **支持原生 Sing-box 订阅的机场**：在机场用户后台复制“Sing-box 订阅”，在客户端配置面板直接添加并更新。
2. **通过通用订阅转换导入**：若机场暂未直接提供 Sing-box 格式，可在客户端中使用内置的 Subconverter 将通用 Clash 或 V2Ray 订阅转化为 Sing-box JSON 格式规则。
3. 检查生成的 \`config.json\`，确保包含完整的 \`inbounds\` (入站)、\`outbounds\` (出站节点) 与 \`route\` (分流路由) 字段。

---

## 三、关键分流与 DNS 配置技巧

Sing-box 最具优势之处在于其对 DNS 泄漏与分流的精细控制：
- **Direct DNS (本地解析)**：配置国内公共 DNS（如 223.5.5.5 或 119.29.29.29），专门负责 \`.cn\` 与国内主流域名的快速解析。
- **Remote DNS (代理解析)**：配置经由节点转发的 8.8.8.8 或 1.1.1.1，彻底隔绝 DNS 劫持与污染。
- **Sniffing 嗅探**：开启 TLS ClientHello 嗅探，精准识别目标域名并自动应用分流规则。

---

## 四、总结与节点推荐

由于 Sing-box 深度支持 Hysteria2 等抗高丢包协议，在网络链路较差或晚高峰公网中转拥堵时，搭配支持最新协议的高质量机场（如 [暮光网络](/review/muguang/)、[星岛梦](/review/stardream/)）能获得立竿见影的提速效果。更多性能排行可查阅 [稳定性专线榜单](/ranking/stable/)。`
  },
  {
    slug: 'windows-nekoray',
    platform: 'Windows',
    title: 'Windows 平台 NekoRay (NekoBox) 客户端配置教程：全协议支持与链式代理',
    description: '针对复杂网络环境的高级通用客户端 NekoRay 深度指南。支持 Shadowsocks、Trojan、VLESS、NAH 及链式前置代理配置。',
    recommendedClients: ['NekoRay', 'NekoBox for Windows'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么选择 NekoRay？

**NekoRay**（基于 Qt 编写，核心驱动为 Xray-core / Sing-box core）是极客与跨境多链路用户极为钟爱的一款专业客户端。它的核心优势在于**全协议无缝兼容**、原生支持直连/全局/绕过大陆模式，并拥有强大的**链式代理（前置代理 + 落地出口）**构建能力。

---

## 一、安装与内核切换

1. 从官方 GitHub 下载最新 Release 的 \`nekoray-x.x-windows64.zip\`。
2. 解压后运行 \`nekoray.exe\`。
3. 首次启动会提示选择核心：
   - **Xray 内核**：适合传统 V2Ray、Trojan、Shadowsocks 生态。
   - **Sing-box 内核**：适合追求 Hysteria2、TUIC 新协议及极致吞吐的用户。可以在“首选项 -> 核心切换”随时调整。

---

## 二、分组管理与订阅同步

1. 点击顶部菜单 **“分组 (Groups)” -> “新建分组”**。
2. 分组类型选择 **“订阅 (Subscription)”**。
3. 将机场后台提供的订阅地址粘贴到订阅 URL 框中，点击确认并更新订阅。
4. 客户端将自动列出所有可用节点，右键点击列表可批量进行“Tcp Ping”或“Url Test 真实连通性测试”。

---

## 三、开启 TUN 系统模式与链式代理

1. 顶部勾选 **“TUN 模式”**，系统会自动接管整机网络流量。
2. **链式代理配置**（跨境电商店铺防关联必备）：
   - 在节点上点击右键选择“作为前置代理”。
   - 另一个节点选择“作为落地代理”，即可实现内网中转专线穿透 + 海外纯净住宅 IP 出口的完美多级链路！

针对需要纯净 IP 落地与高防内网的用户，建议在 [机场对比工具](/compare/) 中筛选支持“双ISP落地”的品牌。`
  },
  {
    slug: 'windows-v2rayn',
    platform: 'Windows',
    title: 'v2rayN 客户端经典图文教程：Xray / Sing-box 双内核切换与订阅更新',
    description: '历史最悠久、稳定性最高且持续更新的 Windows 经典客户端 v2rayN 详细使用步骤，涵盖核心参数设置与常见网络报错排查。',
    recommendedClients: ['v2rayN', 'Xray-core'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## v2rayN 的定位与适用人群

**v2rayN** 是 Windows 平台历史最长、用户基数最广的经典客户端之一。它以极高的稳定性和纯粹的工具属性著称，不捆绑任何冗余模块，是追求低资源消耗与极简操作用户的长青选择。

---

## 一、下载与安装要点

1. 访问官方 Release 页面，建议下载带内核包的完整版：\`v2rayN-With-Core.zip\`。
2. 解压到无空格与特殊符号的英文文件夹中。
3. 运行 \`v2rayN.exe\`。如果提示缺少 .NET Desktop Runtime，请根据提示下载安装微软官方 .NET 8 运行库。

---

## 二、订阅导入与节点管理

1. 点击菜单栏 **“订阅分组” -> “订阅分组设置”**。
2. 点击“添加”，在“可选地址 (url)”一栏粘贴你的机场订阅地址，备注输入机场名称（如“微风网络”或“大佬云”）。
3. 点击确定，随后在主界面点击 **“订阅分组” -> “更新全部订阅 (不通过代理)”**。
4. 节点载入后，按 \`Ctrl + A\` 全选，点击键盘右键选择 **“测试服务器真实延迟 (Ctrl+R)”**，列表将显示各节点实际网页打开响应时间。

---

## 三、系统代理模式设置

右键点击桌面右下角系统托盘的 v2rayN 蓝色“V”图标：
- **自动配置系统代理**：勾选后浏览器自动走代理，托盘图标变红。
- **路由模式**：强烈推荐选择 **“绕过大陆 (Whitelist) / 绕过局域网及大陆”**，确保访问国内淘宝、京东、B站时速度飞快且不消耗机场月度流量。`
  },
  {
    slug: 'macos-clash-verge-rev',
    platform: 'macOS',
    title: 'macOS 平台 Clash Verge Rev 完整配置指南 (兼容 Apple Silicon M系列与Intel芯片)',
    description: '针对 macOS 系统的 Clash Verge Rev 深度调优教程。解决系统权限授权、TUN 模式授权、开机自启动与电池续航优化策略。',
    recommendedClients: ['Clash Verge Rev for Mac', 'Mihomo'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## macOS 用户的现代化代理体验

对于苹果 Mac 用户，**Clash Verge Rev** 提供了原生适配 Apple Silicon (M1/M2/M3/M4) 架构的安装包，不仅运行极其丝滑，且相比老旧的 Electron 应用拥有更高的能效比，几乎不消耗电池续航。

---

## 一、安装与安全性权限授予

1. 下载适配架构的 dmg 文件：
   - 苹果芯片 (M1/M2/M3/M4 系列)：下载 \`x64-aarch64.dmg\`。
   - 老款 Intel 处理器芯片：下载 \`x64.dmg\`。
2. 打开 dmg 文件，将 Clash Verge 图标拖入 Applications (应用程序) 文件夹。
3. 首次启动若提示“无法打开，因为来自未识别的开发者”：
   - 打开 macOS **“系统设置” -> “隐私与安全性”**，在安全性区域点击“仍要打开”即可。

---

## 二、订阅更新与日常使用

1. 打开应用，点击“Profiles (订阅)”，粘贴你的机场订阅 URL 并点击 Import。
2. 点击“Proxies (代理)”，将模式设为 **Rule (规则)**，并根据需要展开分组选择心仪节点。
3. 开启右上角“System Proxy (系统代理)”开关，即可畅享高速跨境网络。

---

## 三、在 macOS 下启用高级 TUN 模式

在 Mac 上，许多开发者工具（如终端 Terminal、Homebrew、iTerm2、Docker）默认不走系统代理：
1. 打开 Clash Verge Rev 的 Settings。
2. 找到 TUN Mode 开关并打开。系统会弹窗要求输入 Mac 登录管理员密码以安装网络扩展驱动。
3. 授权成功后，终端中的 \`git clone\` 与所有网络请求均将自动加速！`
  },
  {
    slug: 'macos-surge',
    platform: 'macOS',
    title: 'macOS 顶级网络调试神器 Surge 5 从入门到精通：规则集与本地重写',
    description: '面向高阶 Mac 用户的工业级网络工具 Surge 5 深度教程。涵盖托管配置导入、MitM HTTPS 解密、本地规则覆写与网关模式搭建。',
    recommendedClients: ['Surge for Mac', 'PonPlugin'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么 Surge 是 Mac 生态的天花板？

对于网络工程师、跨境站长与重度学术科研用户，**Surge for Mac** 是功能最为强大、架构最精密稳定的网络开发与代理接管工具。它支持完整的网络流量捕获诊断、DNS 深度解析控制、智能多节点负载均衡以及卓越的旁路由网关模式。

---

## 一、配置导入与托管订阅

1. 打开 Surge 5，点击菜单栏图标选择 **“More” -> “Profile” -> “Download from URL”**。
2. 粘贴机场提供的 Surge 专属托管配置链接，命名后点击下载保存。
3. 点击菜单栏 **“Set as Active Profile”**，激活该配置文件。

---

## 二、策略组与分流矩阵设计

在 Surge 中，建议构建层次分明的策略架构：
- **Proxy 策略组**：作为主出站通道。
- **Streaming 策略组**：匹配 Netflix、Disney、YouTube 规则集，指向已解锁流媒体的专线节点。
- **AI 策略组**：专门针对 \`DOMAIN-SUFFIX,openai.com\` 与 \`DOMAIN-SUFFIX,anthropic.com\` 分流至双 ISP 住宅出口节点。
- **Domestic (国内) 策略组**：直接配置为 \`DIRECT\`。

结合本站 [机场排行榜](/ranking/overall/)，选购支持原生双 ISP 线路的服务商搭配 Surge，可享受极致顺畅的无感网络体验。`
  },
  {
    slug: 'macos-loon',
    platform: 'macOS',
    title: 'macOS 平台 Loon 独立客户端轻量化配置实操与插件扩展',
    description: 'Loon 桌面端完整实操手册。利用轻巧直观的 UI 完成节点管理、节点健康自动检测、去广告插件安装与分流规则链构建。',
    recommendedClients: ['Loon for Mac', 'Loon Plugin'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## Loon for Mac 的优雅与敏捷

随着苹果生态对通用 App 的支持，**Loon** 推出了独立适配 macOS 的版本。与传统复杂网络软件相比，Loon 拥有现代化的交互界面、直观的节点图表、模块化的插件系统，且完美支持 iCloud 云端跨设备同步配置。

---

## 一、订阅配置与 iCloud 同步

1. 在 Mac App Store 中下载并授权 Loon。
2. 点击左侧导航栏 **“配置” -> “订阅”**，点击右上角加号。
3. 输入机场订阅名称与 URL，勾选“自动更新”与“节点过滤（可选）”。
4. 若你在 iPhone 或 iPad 上也安装了 Loon 并开启了 iCloud 同步，所有节点与策略组将自动瞬时同屏展现！

---

## 二、插件市场与扩展功能

Loon 最具吸引力的是其丰富的生态插件（Plugins）：
- **流媒体检测插件**：在节点列表直接标注该节点是否支持 Netflix 4K 与 ChatGPT 解锁。
- **广告拦截规则**：拦截常见网页的追踪与视频前贴片垃圾流量。
- 更多节点推荐与优惠码，可参考 [机场推荐专线专题](/recommend/stable/)。`
  },
  {
    slug: 'macos-shadowrocket',
    platform: 'macOS',
    title: 'Mac (Apple Silicon) 运行 Shadowrocket 小火箭配置全技巧',
    description: '在 M系列芯片 Mac 上通过 App Store 直接运行经典 iOS 软件 Shadowrocket 小火箭的安装方法、代理规则设置与快捷键操作。',
    recommendedClients: ['Shadowrocket', 'Apple Silicon'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么在 Mac 上使用小火箭？

拥有 Apple Silicon (M1/M2/M3/M4) 芯片的 Mac 电脑原生支持运行 iOS 应用。如果你已经在 iPhone 上购买了 **Shadowrocket (小火箭)**，你无需为 Mac 额外付费购买其他软件，即可直接在 Mac 上享用这款轻巧强大的工具！

---

## 一、安装与下载方式

1. 打开 Mac 上的 **App Store**。
2. 点击左下角个人头像进入“已购项目”。
3. 在上方标签页切换至 **“iPhone 与 iPad App”**。
4. 找到 **Shadowrocket**，点击云朵图标直接下载安装到 Mac 应用程序中。

---

## 二、订阅添加与分流全局切换

1. 启动小火箭，点击右上角加号 **“+”**。
2. 类型选择 **“Subscribe”**，粘贴机场订阅地址并保存。
3. 在“全局路由”处，建议切换为 **“配置 (Config)”**，即按照规则智能分流，海外走代理，国内直连。
4. 点击顶部的连接开关，系统会弹窗提示“允许添加 VPN 配置”，输入 Mac 锁屏密码允许即可开启。`
  },
  {
    slug: 'ios-shadowrocket',
    platform: 'iOS',
    title: 'iOS 平台 Shadowrocket (小火箭) 节点导入、测速与分流规则配置完整指南',
    description: 'iPhone 与 iPad 用户必备科学上网工具小火箭深度指南。从外区 Apple ID 获取、二维码扫描添加、节点延迟测试到高级分流策略编写。',
    recommendedClients: ['Shadowrocket', 'iOS 15-18'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## iOS 科学上网第一国民神器：Shadowrocket

俗称“小火箭”的 **Shadowrocket** 凭借其直观的界面设计、极低的电量消耗以及对几乎所有网络协议（SS、SSR、Trojan、VLESS、VMess、Hysteria2、TUIC、WireGuard）的全面支持，成为中文圈 iOS 用户装机必备的工具首选。

---

## 一、如何下载正版 Shadowrocket

由于政策限制，中国大陆区 App Store 无法上架小火箭：
1. 准备一个海外区域（如美区、日区、港区）的 Apple ID。
2. 打开 App Store 退出当前账号，登录海外 Apple ID。
3. 搜索 **Shadowrocket**（开发者为 PanGuoJian，认准原作者避免山寨钓鱼 App）。
4. 购买并下载安装（售价约 $2.99 美元，支持礼品卡或海外信用卡结算）。

---

## 二、添加机场节点的三种极速方式

1. **一键导入法**：在 Safari 浏览器中登录你的机场控制台，点击“一键导入 Shadowrocket”，浏览器会自动唤起小火箭并完成添加。
2. **二维码扫描法**：打开小火箭，点击左上角“扫描”图标，扫描机场控制台生成的订阅二维码。
3. **手动订阅法**：
   - 点击右上角“+”号。
   - 类型选择 **“Subscribe”**。
   - 在 URL 栏粘贴机场提供的专属订阅链接，备注输入机场名称。
   - 点击右上角“完成”，节点列表即刻刷新载入。

---

## 三、测速、分流与常用设置

1. **测速排查**：点击“连通性测试” -> “测试方式”，建议选择 **“CONNECT” 或真实网页测速**。绿色数字表示低延迟畅通节点，黄色/红色代表高延迟或丢包。
2. **全局路由选择**：
   - **配置 (Config)**【强烈推荐】：实现分流，国内外智能分流。
   - **代理 (Proxy)**：整机所有应用强制走选中的节点。
   - **直连 (Direct)**：整机不走节点。
3. **开启连接**：打开顶部主开关，首次使用点击“Allow (允许)”安装系统 VPN 描述文件并输入手机锁屏密码即可。`
  },
  {
    slug: 'ios-quantumult-x',
    platform: 'iOS',
    title: 'iOS 平台 Quantumult X (圈X) 进阶教程：策略组构建、重写与分流规则',
    description: 'iOS 高端代理神器 Quantumult X 从零到精通教程。深入剖析节点分流策略组设计、远程分流规则集引用、图标定制与自动化测速。',
    recommendedClients: ['Quantumult X', 'Rule Snippets'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么高级用户钟爱 Quantumult X？

**Quantumult X**（通常被称为“圈X”）以其高度可定制的代码化配置、极致优化的网络栈以及强大的 URL Rewrite（重写）和 MitM 解密能力，是追求网络完全掌控的资深玩家的首选。

---

## 一、订阅导入与资源引用

1. 打开 Quantumult X，点击右下角“风车”图标进入设置界面。
2. 在 **“节点”** 模块下，点击 **“节点资源”**。
3. 点击右上角添加图标，在“资源路径”中粘贴机场提供的圈X专用订阅链接或通用订阅地址。
4. 打开“自动更新”开关，向左滑动资源项点击更新，所有节点即被成功加载。

---

## 二、构建智能策略组

圈X允许针对不同业务流向建立精细的独立策略：
- **ChatGPT 专属策略**：引用 OpenAI 规则集，锁定在支持双 ISP 解锁的香港/日本原生专线。
- **Streaming 媒体策略**：针对 Netflix、Disney+ 走具有流媒体解锁标识的优化中转节点。
- **Final 兜底策略**：未命中规则的其他流量默认策略。

在选购节点时，建议参考 [机场横向对比工具](/compare/)，挑选支持多节点并发与纯净住宅落地的服务商。`
  },
  {
    slug: 'ios-loon',
    platform: 'iOS',
    title: 'iOS 平台 Loon 客户端保姆级教程：节点订阅、抓包与自动化脚本',
    description: '功能强大且界面亲和的 iOS 现代网络工具 Loon 图文实战指南。涵盖节点健康检查、插件市场与分流策略组图形化管理。',
    recommendedClients: ['Loon', 'Plugins'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 兼备易用与强大的 Loon

**Loon** 是近年来在 iOS 平台发展极为迅速的高阶网络代理工具。它不仅具备与 Quantumult X、Surge 媲美的规则分流与 MitM 脚本功能，同时拥有极为直观亲和的现代化图形界面，极大降低了新手的配置门槛。

---

## 一、订阅配置与节点过滤

1. 从海外 App Store 安装 Loon 后打开应用。
2. 点击底部菜单 **“配置” -> “订阅”**。
3. 点击右上角加号，填入订阅 URL。Loon 支持在添加时使用正则表达式过滤无用节点（如过滤掉高倍率或失效节点）。
4. 保存后点击右上角刷新，节点列表将呈现直观的旗帜与延迟图表。

---

## 二、插件市场（Plugin）的便捷之处

Loon 的独特优势在于模块化插件系统：在“插件”页面可一键搜索并安装去网页广告、YouTube 去片头广告、流媒体解锁状态检测脚本，无需手动折腾繁琐的代码规则文件。`
  },
  {
    slug: 'ios-stash',
    platform: 'iOS',
    title: 'iOS 平台 Stash (Clash for iOS) 深度使用指南：规则覆写与仪表盘解析',
    description: '在 iPhone 和 iPad 上获得原生 Clash 体验。Stash 客户端的订阅导入、仪表盘网络监控、分流规则覆写与本地模式实战。',
    recommendedClients: ['Stash', 'Clash for iOS'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 什么是 Stash？

**Stash** 是一款在 iOS / iPadOS / tvOS 平台完整实现 Clash 核心规则体系的专业应用，因此通常被称为 **“Clash for iOS”**。如果你习惯了在电脑端使用 Clash，使用 Stash 可以做到配置思路 100% 无缝迁移！

---

## 一、一键导入 Clash 订阅配置

1. 打开 Stash，进入“配置”管理页面。
2. 点击右上角加号，选择 **“从 URL 下载”**。
3. 直接粘贴任何标准的 Clash / Clash Meta 订阅链接，Stash 会自动解析并转换为本地可执行文件。
4. 点击“应用此配置”。

---

## 二、特色功能：网络仪表盘与连接诊断

Stash 拥有全平台最美观的监控仪表盘（Dashboard）：
- 实时展示当前上传/下载瞬时速率与历史流量曲线。
- 点击“连接”标签页，可精准查看手机里每一个 App、每一个后台域名当前正在走哪个节点、命中了哪条规则。排错极为直观便利！`
  },
  {
    slug: 'android-v2rayng',
    platform: 'Android',
    title: 'Android 平台 v2rayNG 最新版配置教程：分应用代理与订阅自动更新',
    description: '安卓手机使用最广泛的开源免费代理工具 v2rayNG 详尽图文教程。涵盖分应用代理设置、节点真连接测速、路由规则与电量保活。',
    recommendedClients: ['v2rayNG', 'Xray core'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 安卓用户的开源国民利器：v2rayNG

**v2rayNG** 是 Android 平台上最经典、完全免费且代码开源的代理客户端。它原生支持 Xray 内核，支持 Shadowsocks、Trojan、VLESS、VMess 等主流协议，对各种国产品牌安卓手机（小米、华为、OPPO、vivo、荣耀等）兼容性极好。

---

## 一、下载正版 APK 与系统权限

1. 推荐从官方 GitHub Release 页面下载最新版 APK 文件（选择 \`v2rayNG_x.x.x_arm64-v8a.apk\`）。
2. 在安卓手机上点击安装。部分国产手机系统（如 MIUI/HyperOS、OriginOS）在安装时若有安全提示，选择“继续安装”。

---

## 二、添加机场订阅步骤

1. 打开 v2rayNG，点击左上角“三道杠”菜单，选择 **“订阅分组设置”**。
2. 点击右上角加号 **“+”**。
3. “备注”输入你的机场名称，“可选地址 (URL)”粘贴机场后台复制的订阅链接，点击右上角对勾保存。
4. 返回主界面，点击右上角三点图标，选择 **“更新订阅”**。所有节点即刻显示在列表上。

---

## 三、关键优化：分应用代理与系统路由

1. **分应用代理设置**：
   - 打开侧边栏菜单 -> **“设置” -> “分应用代理”**。
   - 勾选“开启分应用代理”，将微信、支付宝、网易云等国内 App 设为不走代理；将 Chrome、YouTube、Twitter、ChatGPT 等设为走代理。不仅节省流量，还能防止国内银行 App 因 IP 变动触发安全风控！
2. **路由设置**：主界面设置中，确保“路由模式”设为 **“绕过局域网及大陆地址”**。
3. 点击右下角圆形小飞机图标，手机弹窗提示“是否允许建立网络连接”，点击确定即可上网！`
  },
  {
    slug: 'android-clash-meta',
    platform: 'Android',
    title: 'Android 平台 Clash Meta (CMFA) 客户端深度配置实操指南',
    description: '针对安卓平台的现代化 Clash Meta for Android 实战教程。全面支持 Hysteria2 协议、分流规则组管理与桌面浮窗测速。',
    recommendedClients: ['Clash Meta for Android', 'Mihomo'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么选择 Clash Meta for Android (CMFA)？

原版的 Clash for Android 停更后，社区基于现代化开源内核分叉出的 **Clash Meta for Android (简称 CMFA)** 成为安卓高端用户的首选替代品。它不仅支持传统所有协议，还全面支持新一代 **Hysteria2、TUIC v5**，抗网络抖动与晚高峰拥塞能力大幅提升。

---

## 一、下载与配置文件配置

1. 从官方 GitHub 仓库下载 \`cmfa-x.x.x-meta-arm64-v8a.apk\` 安装包并完成安装。
2. 打开应用，点击 **“配置 (Profiles)”**。
3. 点击右上角“+”号，选择 **“URL”**。
4. 填写订阅名称，在 URL 栏粘贴机场的 Clash 订阅地址，自动更新时间填写 1440 分钟，点击右上角保存图标下载配置。

---

## 二、策略组模式与连接启动

1. 返回主界面，点击“配置”选中刚刚下载的配置文件。
2. 点击 **“代理 (Proxy)”**，在顶部选择“规则 (Rule)”模式。
3. 根据个人需求选择主力节点，点击主界面“启动”按钮开启代理。
4. 如果遇到安卓系统后台杀进程问题，请进入手机系统设置，将 CMFA 的电池管理策略修改为 **“无限制 / 允许后台自启动”**。`
  },
  {
    slug: 'android-sing-box',
    platform: 'Android',
    title: 'Android 平台 SFA (Sing-box for Android) 现代网络分流实战',
    description: '在安卓手机上发挥 Sing-box 的极致效能。SFA 客户端的安装、订阅配置导入、DNS 防污染配置与前后台长效省电保活方案。',
    recommendedClients: ['SFA', 'Sing-box for Android'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## SFA：极度省电与高速传输的安卓新星

**Sing-box for Android (SFA)** 是官方专门针对安卓系统打造的原生客户端。得益于内核的高效设计，SFA 在日常待机时的耗电量与发热量远低于传统的代理应用，尤其适合续航敏感的用户。

---

## 一、配置导入与参数设置

1. 在 Google Play 商店或 GitHub 下载并安装官方 APK。
2. 打开 SFA，切换到 **“Profiles (配置)”** 标签。
3. 点击 **“New Profile”**，选择类型为 Remote (远程)，填入你的 Sing-box 订阅链接。
4. 点击右上角 Update 更新订阅，更新完毕后切换到 Dashboard 页面点击开关即可连通。

配合本站 [平价性价比榜单](/ranking/value/) 中的大流量机场，SFA 是移动端超高清视频播放的理想搭档。`
  },
  {
    slug: 'android-nekobox',
    platform: 'Android',
    title: 'Android 平台 NekoBox 教程：支持 Hysteria2、TUIC 与内网直连',
    description: '安卓平台最全能的通用客户端之一 NekoBox 使用指南。多核心切换、全协议支持、自定义分流与防封锁实操。',
    recommendedClients: ['NekoBox', 'Sing-box Core'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## NekoBox for Android 的全能特性

对于需要应对复杂恶劣网络环境的安卓用户，**NekoBox for Android** 几乎集成了所有前沿黑科技：支持内核自由切换、全面支持 Hysteria2、TUIC、ShadowTLS 等新协议，且完全免费开源无广告。

---

## 一、配置添加与测速

1. 下载安装 \`NekoBox-arm64-v8a.apk\`。
2. 点击右上角“+”号选择“从剪贴板导入”或“添加订阅”。
3. 导入后长按列表可全选进行“真实网络延迟测试”。
4. 在左侧菜单中开启“绕过局域网及大陆”，即可实现最佳日常分流体验。`
  },
  {
    slug: 'linux-sing-box-cli',
    platform: 'Linux',
    title: 'Linux / VPS 命令行无 GUI 环境 Sing-box 系统级代理配置实战',
    description: '服务器运维与学术科研人员必备：在 Ubuntu / Debian / CentOS 无桌面环境下通过 systemd 守护进程运行 Sing-box，实现整机透明加速。',
    recommendedClients: ['Sing-box CLI', 'systemd'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## Linux 命令行环境的代理挑战

在开发测试、AI 训练服务器（如租用的 GPU 算力云）或无图形界面的 VPS 环境中，经常需要下载 HuggingFace 模型、更新 Docker 镜像或执行 \`apt update\`，极易遭遇网络超时。使用 **Sing-box 命令行内核** 搭配 systemd 守护进程是最高效的解决方案。

---

## 一、安装 Sing-box 二进制程序

\`\`\`bash
# 1. 下载官方二进制包 (以 amd64 为例)
curl -Lo sing-box.tar.gz https://github.com/SagerNet/sing-box/releases/latest/download/sing-box-linux-amd64.tar.gz
tar -zxvf sing-box.tar.gz
sudo mv sing-box-*/sing-box /usr/local/bin/
sudo chmod +x /usr/local/bin/sing-box

# 验证版本
sing-box version
\`\`\`

---

## 二、配置与持久化服务托管

1. 创建配置文件目录：\`sudo mkdir -p /etc/sing-box\`
2. 将机场提供的 Sing-box JSON 格式配置放置于 \`/etc/sing-box/config.json\`。
3. 创建 systemd 服务文件 \`/etc/systemd/system/sing-box.service\`：

\`\`\`ini
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
\`\`\`

4. 启动并配置开机自启：
\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl enable --now sing-box
sudo systemctl status sing-box
\`\`\`

在环境变量中配置 \`export http_proxy="http://127.0.0.1:7890"\` 即可实现终端全局极速出境。`
  },
  {
    slug: 'linux-clash-verge',
    platform: 'Linux',
    title: 'Linux 桌面端 (Ubuntu/Debian/Arch) Clash Verge Rev 部署与提权',
    description: '针对 Linux 桌面发行版用户的 Clash Verge Rev 安装手册。解决 AppImage 权限、Deb/AUR 安装、虚拟网卡驱动提权与系统托盘适配。',
    recommendedClients: ['Clash Verge Rev', 'Arch/Ubuntu'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## Linux 桌面用户的福音

很多从 Windows 或 Mac 迁移到 Ubuntu、Fedora 或 Arch Linux 的用户，最烦恼的就是没有好用的图形化代理客户端。**Clash Verge Rev** 原生支持 Linux，提供了极佳的桌面体验。

---

## 一、不同发行版的安装方式

1. **Ubuntu / Debian 用户**：下载 \`.deb\` 包，在终端执行：
   \`\`\`bash
   sudo dpkg -i clash-verge_*.deb
   sudo apt-get install -f # 修复依赖
   \`\`\`
2. **Arch Linux 用户**：直接通过 AUR 安装：
   \`\`\`bash
   yay -S clash-verge-rev-bin
   \`\`\`
3. **通用便携方式**：下载 \`.AppImage\` 文件，赋予执行权限后直接双击运行：
   \`\`\`bash
   chmod +x Clash.Verge-*.AppImage
   ./Clash.Verge-*.AppImage
   \`\`\`

---

## 二、授予 TUN 模式特权能力

由于 Linux 对网络设备驱动权限管控极为严格，开启 TUN 模式需要授予应用网络管理特权：
\`\`\`bash
sudo setcap cap_net_admin,cap_net_bind_service=+ep /usr/bin/clash-verge
\`\`\`
授权完成后，在软件设置中打开 TUN 模式即可接管整机所有 TCP/UDP 流量。`
  },
  {
    slug: 'openwrt-passwall',
    platform: '路由器',
    title: 'OpenWrt 软路由 PassWall 插件节点订阅导入与多流智能分流教程',
    description: '打造全家无感科学上网网络环境。OpenWrt 软路由 PassWall 2 插件节点订阅导入、主备节点自动故障转移、分流规则集与 DNS 防泄漏防污染实操。',
    recommendedClients: ['PassWall', 'OpenWrt'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么在软路由上部署 PassWall？

通过在家庭或公司的主路由/旁路由上配置 **PassWall**，局域网内的所有设备（包括无法安装翻墙客户端的 Apple TV、PS5/Switch 游戏主机、扫地机器人及智能电视）无需安装任何软件，连接 Wi-Fi 即可自动实现无感科学上网！

---

## 一、节点订阅添加与自动更新

1. 登录 OpenWrt 后台管理页面（默认一般为 192.168.1.1 或 192.168.100.1）。
2. 在左侧菜单点击 **“服务” -> “PassWall”**。
3. 点击顶部导航的 **“节点订阅”**。
4. 点击下方的“添加”，在“订阅地址”中粘贴机场提供的 V2Ray/SS 订阅链接，勾选“自动更新”，时间建议设定在凌晨 4 点。
5. 点击“保存并应用”，随后点击“手动更新订阅”，所有节点将自动写入节点列表。

---

## 二、主节点与备用自动切换配置

1. 切换至 **“基本设置”** 页面。
2. **TCP 节点**：选择你最稳定的专线主力节点（如 [隐形人](/review/yinxingren/) 的香港或日本专线）。
3. **UDP 节点**：建议选择与 TCP 相同的节点（用于保障海外游戏与 YouTube 语音通话畅通）。
4. 开启 **“自动切换 (故障转移)”** 功能：设定每隔 60 秒检测一次 Google/Cloudflare 连通性，当主力节点网络中断时，毫秒级无缝漂移到备用节点，全家刷视频办公零感知！`
  },
  {
    slug: 'openwrt-openclash',
    platform: '路由器',
    title: 'OpenWrt 路由器 OpenClash 内核选择与开发者高级分流配置深度指南',
    description: '软路由发烧友必看的 OpenClash 全功能配置手册。Mihomo 内核切换、混合模式、Fake-IP 与 Redir-Host 选型、绕过局域网与规则集优化。',
    recommendedClients: ['OpenClash', 'Mihomo Core'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## OpenClash：路由端最强分流引擎

**OpenClash** 是 OpenWrt 平台上基于 Clash 内核深度定制的顶级网关插件。它支持完整的规则引擎、可视化的 Yacd 面板控制、Fake-IP 极速 DNS 解析，是极客家庭网络拓扑的终极利器。

---

## 一、运行模式选择：Fake-IP vs Redir-Host

在 OpenClash“高级设置”中，核心分水岭是运行模式的选择：
- **Fake-IP (增强模式)**【强烈推荐】：路由器拦截所有外网 DNS 请求并立即返回局域网虚拟 IP (198.18.x.x)，将真实的域名解析工作交由远端节点完成。优点是秒开海外网页，彻底杜绝本地 DNS 污染与解析延迟。
- **Redir-Host 兼容模式**：由路由器本地先进行 DNS 解析再路由。适合网络拓扑内有自建 DNS 服务器或特殊局域网广播设备的环境。

---

## 二、配置订阅与内核自动升级

1. 进入 **“配置文件订阅”**，输入机场提供的 Clash 配置文件地址。
2. 在 **“版本更新”** 中，建议勾选使用最新的 **Meta (Mihomo) 内核**，以获得对 Hysteria2 及复杂规则集的完美支持。
3. 启动 OpenClash，访问 \`http://192.168.1.1:9090/ui\` 即可打开可视化仪表盘控制全家网络。`
  },
  {
    slug: 'gl-inet-router',
    platform: '路由器',
    title: 'GL.iNet 便携式出国路由节点配置教程：出差旅行即插即用实战',
    description: '面向海外差旅与数字游民的 GL.iNet 便携路由器配置攻略。支持酒店 Wi-Fi 中继、内置 VPN 客户端配置及全设备随身透明翻墙。',
    recommendedClients: ['GL.iNet', 'Shadowsocks/WireGuard'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 差旅神器的魅力：GL.iNet

经常出差、旅游或参加涉外展会的商务人士，常常面临酒店 Wi-Fi 不稳定、需要繁琐的设备逐一配置代理等麻烦。**GL.iNet**（如 Beryl AX、Slate AX）系列便携式路由器体积仅巴掌大小，内置基于 OpenWrt 的图形系统，是打造个人随身专属安全网络的首选。

---

## 一、网络中继与一键翻墙

1. 在酒店将 GL.iNet 插上电源，电脑或手机连接其默认 Wi-Fi。
2. 浏览器打开 \`192.168.8.1\` 进入管理后台。
3. 点击“互联网 (Internet)” -> “中继 (Repeater)”，扫描并连接酒店提供的公共 Wi-Fi。
4. 进入后台“VPN 客户端”菜单，导入机场的节点配置或 WireGuard 文件。
5. 开启连接后，随身携带的所有手机、笔记本、iPad 均实现全自动无感出海，安全又私密！`
  },
  {
    slug: 'tv-apple-tv-proxy',
    platform: '智能设备',
    title: 'Apple TV 配合 Surge / Stash 独立旁路由实现 4K 极速大屏观影教程',
    description: '让客厅大屏电视享受 4K HDR 极致画质。Apple TV tvOS 平台的 Surge / Stash 客户端独立运行与家庭透明网关配置全流程。',
    recommendedClients: ['tvOS Stash', 'tvOS Surge'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 客厅大屏观影的终极形态

在最新版 tvOS 系统中，苹果正式开放了网络系统扩展接口，使得 **Stash for tvOS** 与 **Surge for tvOS** 能够直接独立运行在 Apple TV 上。无需购买额外软路由，Apple TV 本身就能变身为全屋的科学上网旁网关！

---

## 一、在 tvOS App Store 下载软件

1. 在 Apple TV 上切换登录海外区域 Apple ID。
2. 进入 App Store，直接下载你已在 iOS 上购买过的 **Stash** 或 **Surge**（支持一次购买全平台通用）。
3. 通过手机端局域网推送或扫描电视屏幕二维码，将机场订阅同步至 Apple TV。

---

## 二、配置 4K 流媒体专属分流

1. 在策略组中，将 Netflix、YouTube、Disney+、Infuse 等应用路由至具备流媒体解锁属性的优质专线节点（如 [飞猫云](/review/feimaoyun/) 或 [光速云](/review/lightspeed/)）。
2. 在 Apple TV 设置中打开沉浸式 4K HDR / 杜比视界自适应，即可告别画质降级与卡顿转圈。`
  },
  {
    slug: 'tv-android-tv-clash',
    platform: '智能设备',
    title: 'Android TV / 索尼电视安装 Clash 与 v2rayNG 遥控器适配全攻略',
    description: '解决电视端没有触屏无法操作的痛点！在小米电视、索尼电视、Chromecast 及外贸电视盒子上配置 Clash 与 v2rayNG 的保姆级指南。',
    recommendedClients: ['Clash for Android TV', 'v2rayNG TV'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 电视端代理的核心痛点：遥控器难操控

很多用户将手机端的翻墙软件 APK 安装到电视后，发现由于没有触摸屏，电视遥控器根本无法选中按钮、无法输入订阅链接。针对 Android TV 盒子与智能电视，必须使用经过**电视遥控器专用界面适配**的客户端版本。

---

## 一、安装包传输与安装

1. 推荐下载专门为 TV 端优化的安装包：如 \`ClashForAndroid-x.x.x-premium-tv.apk\` 或使用专为大屏开发的客户端。
2. 将 APK 拷入 U 盘，插到电视 USB 接口，使用电视内置的文件管理器点击安装；或通过局域网“快投/无线传屏”工具发送至电视。

---

## 二、如何用手机给电视输入订阅链接？

电视上用遥控器按字母输入几十位的 URL 极度痛苦，推荐使用局域网 Web 导入法：
1. 打开电视端 Clash，在侧边菜单选择“从局域网导入”。
2. 电视屏幕会显示一个本地 IP 网址（例如 \`http://192.168.1.150:8080\`）。
3. 在同一局域网的手机或电脑浏览器中打开该网址，直接粘贴机场订阅链接，点击提交！
4. 电视端一秒完成同步，用遥控器选中节点并开启连接即可顺畅观看 YouTube 4K！`
  },
  {
    slug: 'chatgpt-claude-ai-fix',
    platform: '专项解决方案',
    title: 'ChatGPT 4o 与 Claude 3.5 访问受限、403 阻断及降智彻底解决教程',
    description: '深度剖析 OpenAI 与 Anthropic 风控机制。解决“Access Denied 403”、“Unable to load conversation”、“Oops something went wrong”及模型自动降智问题。',
    recommendedClients: ['原生双ISP专线', '住宅IP节点'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么你的 ChatGPT / Claude 总是频繁报错？

很多用户明明连上了节点，打开 Google 和 YouTube 飞快，但一访问 **ChatGPT** 或 **Claude 3.5 Sonnet** 就提示：
- \`Access Denied (Error code 403)\`
- \`Unable to load conversation\`
- 账号无故被封禁，或者明明充值了 Plus/Team 会员却无法生成图片、无法使用高级推理（被静默降智为简陋模型）。

---

## 一、根源揭秘：机房机房 IP 污染与 WebRTC 泄漏

1. **数据中心 IP (DataCenter IP) 风控**：OpenAI 接入了 Cloudflare 最严苛的欺诈防御系统。如果几百人共用同一个机房服务器 IP 访问 OpenAI，该 IP 会被瞬间拉入黑名单，阻断网页访问。
2. **IP 属性不对等**：优质的机场节点必须具备 **原生双 ISP 住宅属性**（即 IP 类型属于家庭宽带，如 AT&T、Verizon、HKBN、HiNet）。
3. **时区与 DNS 泄漏**：浏览器本地时区为北京时间（GMT+8），但出口 IP 在美国洛杉矶，被识别为代理行为。

---

## 二、实战彻底解决步骤

1. **精准分流规则配置**：
   在 Clash 或小火箭中，单独为 \`openai.com\`、\`chatgpt.com\`、\`oaistatic.com\`、\`anthropic.com\`、\`claude.ai\` 建立专属策略组，**指定走支持 AI 解锁的美国或日本原生双 ISP 节点**。
2. **清除浏览器缓存与禁用 WebRTC**：
   - 在 Chrome 浏览器安装“WebRTC Control”插件，设置为彻底禁用 WebRTC，杜绝真实内网 IP 外泄。
   - 快捷清理 \`chatgpt.com\` 的 Cookie 与 LocalStorage 缓存。
3. **节点选型建议**：
   务必选择明确标有“双ISP”或针对 AI 工具优化的高质量服务商。欢迎参考本站 [ChatGPT & AI 专用机场专题](/recommend/ai/)。`
  },
  {
    slug: 'netflix-disney-streaming-unlock',
    platform: '专项解决方案',
    title: 'Netflix 跨区非自制剧与 Disney+ 4K 原生解锁节点选择与分流实战',
    description: '告别只能看自制剧的尴尬！解决 Netflix 代理检测、提示“您似乎在使用代理”、Disney+ 登录 Error 83 与最高码率 4K 播放设置。',
    recommendedClients: ['双ISP节点', '分流策略组'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 什么是“伪解锁”与“原生全解锁”？

很多便宜机场宣传“支持 Netflix 解锁”，但实际使用时只能观看 Netflix 自行投资拍摄的自制剧（如《怪奇物语》），却无法搜到华纳、迪士尼授权的非自制影片（如《绝命毒师》、《蜘蛛侠》等），这是因为节点仅仅通过公共 DNS 劫持了部分验证，未能通过 Netflix 的原生版权地域校验。

---

## 一、Netflix 与 Disney+ 的检测机制

流媒体平台通过持续购买商业 IP 归属库（如 IP2Location、MaxMind）来封锁机房 IP。真正的原生解锁必须满足：
1. 落地 IP 在流媒体官方版权库中被标记为 **ISP（家庭宽带）**。
2. 节点必须拥有充足的下行吞吐带宽（单流持续吞吐必须稳定在 25Mbps 以上，方可稳定握手 4K 杜比视界）。

---

## 二、客户端自动分流防锁区技巧

在客户端中，设置专门的“流媒体”策略组：
- 港区节点：适合中文字幕最全的大多数剧集。
- 美区节点：片库总量全球最大。
- 日区/台区节点：动漫新番与特色院线电影首发。
结合本站 [4K 流媒体全解锁精选专题](/recommend/streaming/)，一键配置即可畅享高清无阻观影。`
  },
  {
    slug: 'git-github-terminal-proxy',
    platform: '开发与办公',
    title: '程序员必看：终端 Bash、Git、Docker 及 WSL2 极速代理环境配置指南',
    description: '彻底解决 git clone 龟速、Failed to connect to github.com、Docker pull 超时与 WSL2 无法访问宿主机代理的综合实战方案。',
    recommendedClients: ['Git Proxy', 'WSL2 TUN'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 程序员的日常网络瓶颈

在日常开发工作中，很多工程师开启了桌面客户端后，打开浏览器上网很顺畅，但在命令行执行 \`git clone\`、\`npm install\`、\`pip install\` 或 \`docker pull\` 时，依然频繁遭遇 \`Connection reset by peer\` 或慢如蜗牛。

---

## 一、Git 命令全局代理配置

Git 默认不自动读取系统代理设置，必须单独配置代理端口（以本地默认混合端口 7890 为例）：

\`\`\`bash
# 针对 GitHub 域名单独设置代理 (推荐，不影响国内 Gitee)
git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy http://127.0.0.1:7890

# 如需取消配置
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy
\`\`\`

---

## 二、终端命令行 (Bash / Zsh / PowerShell) 环境变量

在终端配置文件（如 \`~/.bashrc\`、\`~/.zshrc\`）底部追加便捷函数：

\`\`\`bash
# 快捷开关代理函数
alias setproxy="export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890; echo 'Proxy on'"
alias unsetproxy="unset http_proxy; unset https_proxy; echo 'Proxy off'"
\`\`\`

---

## 三、WSL2 子系统优雅访问 Windows 宿主机代理

Windows 11 用户在 WSL2 下，最简便的方法是开启 Clash Verge Rev 的 **TUN 模式**。开启后，WSL2 内的所有网络发包自动由宿主机的虚拟网卡透明接管，无需手动探查复杂的内网网关 IP！`
  },
  {
    slug: 'ps5-switch-gaming-proxy',
    platform: '游戏与主机',
    title: 'PS5 / Nintendo Switch / Xbox 主机联机加速与 NAT 类型优化配置教程',
    description: '主机玩家告别联机丢包！通过 PC 局域网共享代理或软路由网关，将主机 NAT 类型提升为 NAT Type 2 / Type A，实现低延迟顺畅联机。',
    recommendedClients: ['局域网共享', 'Fullcone NAT'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 为什么主机联机总是 NAT Type 3 (严苛)？

主机玩家在游玩《怪物猎人》、《FIFA/EA FC》、《任天堂大乱斗》、《喷射战士》等联机游戏时，经常遭遇无法匹配队友、房间进不去或频繁掉线。其核心原因在于国内运营商光猫路由器的 NAT 防火墙过于严苛，且索尼 PSN / 任天堂服务器均在境外。

---

## 一、方法一：电脑客户端“允许局域网连接”

1. 打开电脑上的 Clash Verge Rev 或 v2rayN。
2. 在设置中开启 **“允许局域网连接 (Allow LAN)”**，并记下电脑的本地局域网 IP（如 \`192.168.1.50\`）和代理端口（7890）。
3. 打开 PS5 / Switch 的网络设置，选择 Wi-Fi 或有线连接 -> 自定义设置。
4. 在“Proxy 服务器”选项中选择“使用”，填入电脑的 IP 地址和 7890 端口。
5. 连接测试成功后，不仅游戏下载速度跑满千兆，联机顺畅度也成倍提升！

---

## 二、进阶建议：选择支持游戏加速的节点

主机联机对**丢包率和 UDP 抖动**极其敏感，普通公网中转容易造成网络抖动。建议在 [稳定专线榜单](/ranking/stable/) 中选择具备全内网专线与 Fullcone NAT 支持的服务商。`
  },
  {
    slug: 'telegram-twitter-proxy-setup',
    platform: '社交与办公',
    title: 'Telegram MTProto / Socks5 直连代理与推特媒体极速加载设置教程',
    description: '电报与 Twitter 高清视频秒开指南。配置 Telegram 内部专属代理通道、防封号防风控、自动重连与媒体下载加速全攻略。',
    recommendedClients: ['Telegram Socks5', 'MTProto'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## Telegram 连接打转？教你内部直连

很多新人在手机上安装了 **Telegram (电报)** 后，即使开了翻墙软件，也经常停留在“Connecting (连接中)”转圈。这是因为 Telegram 使用了专属的高并发加密数据传输协议，需要针对性调优。

---

## 一、Telegram 内置代理设置

1. 打开 Telegram，进入 **“Settings (设置)” -> “Data and Storage (数据与存储)”**。
2. 页面滑至底部，点击 **“Proxy Settings (代理设置)”**。
3. 点击 **“Add Proxy (添加代理)”**，选择 **SOCKS5**：
   - 服务器 (Server)：\`127.0.0.1\`
   - 端口 (Port)：填入你的客户端本地 Socks5 端口（通常为 \`7890\` 或 \`10808\`）。
4. 勾选“Use Proxy for Calls (通话也使用代理)”。
5. 保存后立即秒连，图片和海量群聊消息秒速同步！`
  },
  {
    slug: 'tun-mode-vs-system-proxy',
    platform: '进阶调优',
    title: 'TUN 虚拟网卡模式与系统代理对比及全流量接管防泄漏配置',
    description: '深度技术解析：传统 System Proxy 与底层虚拟网卡 TUN 模式的运行机制差异。如何实现整机流量无死角接管，彻底防范代理穿透与 IP 泄漏。',
    recommendedClients: ['TUN Mode', 'Mihomo Wintun'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 核心机制：系统代理 vs TUN 虚拟网卡

很多用户分不清“系统代理”和“TUN 模式”的区别，导致经常遇到奇怪的网络问题：

| 对比维度 | 系统代理 (System Proxy) | TUN 虚拟网卡模式 (TUN Mode) |
| :--- | :--- | :--- |
| **工作层级** | 操作系统应用层 (Layer 7 应用层) | 虚拟网卡网络层 (Layer 3 网络层) |
| **协议支持** | 仅支持主动遵循代理的 HTTP/HTTPS | 支持 TCP、UDP、ICMP 全协议全流量 |
| **接管范围** | 仅限 Chrome、Edge 等通用浏览器 | 整机所有软件、命令行、游戏、局域网 |
| **穿透风险** | 部分不规范应用会直接绕过代理直连 | 底层接管，绝无应用能悄悄直连 |
| **资源消耗** | 极低 | 略高（需运行虚拟网卡驱动） |

---

## 一、什么时候必须开启 TUN 模式？

1. **终端与开发环境**：使用 CMD、PowerShell、Git、Docker、npm 时。
2. **大型在线游戏**：Steam、Epic、Apex、绝地求生等无法配置 HTTP 代理的 UDP 游戏数据包。
3. **专业客户端应用**：如 Slack、Discord 语音通话、外贸 ERP 专用管理软件。

在支持 TUN 模式的客户端中（如 Clash Verge Rev），仅需在设置面板打开 TUN 模式开关即可。更多客户端技术评测欢迎查阅我们的 [使用教程中心](/guides/)。`
  },
  {
    slug: 'security-dns-leak-prevention',
    platform: '安全与隐私',
    title: '防止 DNS 污染与 WebRTC IP 真实泄漏：安全隐私深度加固指南',
    description: '跨境办公与隐私安全必备：利用 ipleak.net 等专业工具检测真实 IP 泄漏。深入讲解 DoH/DoT 加密解析、禁用 WebRTC 与防追踪终极配置。',
    recommendedClients: ['DoH', 'WebRTC Block'],
    publishDate: '2026-03-29',
    updatedDate: '2026-03-29',
    content: `## 你的真实身份真的安全吗？

很多跨境办公者、外贸从业人员误以为只要开了代理软件，自己的网络访问就绝对私密。然而，通过专业的在线检测工具，黑客、广告商甚至第三方风控系统往往可以通过以下两大漏洞瞬间锁定你的中国大陆真实 IP：

1. **WebRTC 穿透漏洞**：网页中的 WebRTC 协议原本用于点对点视频通话，它会绕过代理，直接向目标服务器发送本机真实公网 IP！
2. **DNS 泄漏**：你在访问海外敏感网站时，域名的查询请求却被发送给了本地电信或联通的 DNS 服务器，你的全部浏览记录被明文记录。

---

## 一、一分钟排查你的网络泄漏风险

打开国际公认的隐私检测网站：\`https://ipleak.net\` 或 \`https://browserleaks.com/webrtc\`：
- 查看 **“Your IP Address”**：应显示你代理节点的海外 IP。
- 查看 **“WebRTC Detection”**：如果这里赫然出现了你的国内真实 IP，说明存在严重泄漏！
- 查看 **“DNS Addresses”**：如果列表中出现了中国大陆（如 China Telecom / China Unicom）的服务器，说明存在严重 DNS 泄漏！

---

## 二、加固防范措施

1. **浏览器安装 WebRTC 禁用插件**：在 Chrome 或 Edge 商店安装“WebRTC Control”，选择完全禁止 WebRTC 发包。
2. **启用客户端加密安全 DNS**：在 Clash Verge 或 Surge 中，开启 DoH (DNS over HTTPS)，填入 \`https://1.1.1.1/dns-query\` 或 \`https://8.8.8.8/dns-query\`。
3. **选择具备零日志承诺的高质量专线**：优质内网专线不经过公网多重中继，私密性极佳。可参考本站 [综合实力排行榜](/ranking/overall/) 挑选可信赖的长期品牌。`
  }
];

console.log(`Starting generation of ${tutorials.length} professional tutorials...`);

let count = 0;
for (const item of tutorials) {
  const filePath = path.join(guidesDir, `${item.slug}.md`);
  const frontmatter = `---
title: "${item.title}"
description: "${item.description}"
platform: "${item.platform}"
publishDate: "${item.publishDate}"
updatedDate: "${item.updatedDate}"
author: "节点推荐技术支持组"
recommendedClients:
${item.recommendedClients.map(c => `  - "${c}"`).join('\n')}
---

${item.content.trim()}
`;

  fs.writeFileSync(filePath, frontmatter, 'utf8');
  count++;
  console.log(`[${count}/${tutorials.length}] Created: ${item.slug}.md`);
}

console.log(`\nSuccessfully created all ${count} professional guides!`);
