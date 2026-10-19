/**
 * scripts/enrich-all-guides-batch2.js
 * Enriches the remaining 11 guides to 2,500 ~ 4,000+ bytes each.
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
  console.log(`[Enriched Batch 2] ${slug}.md (${Buffer.byteLength(content, 'utf8')} bytes)`);
}

// -------------------------------------------------------------
// ps5-switch-gaming-proxy
// -------------------------------------------------------------
updateGuide('ps5-switch-gaming-proxy', 'PS5 / Nintendo Switch / Xbox 主机联机加速与 NAT 类型优化配置教程', '游戏与主机', ['PS5', 'Switch', 'Fullcone NAT', 'LAN Proxy'], `
## 一、主机联机痛点剖析：为什么总是 NAT Type 3 (严格)？

在索尼 PlayStation 5、任天堂 Switch 以及微软 Xbox Series X/S 上游玩《怪物猎人：荒野》、《EA Sports FC (FIFA)》、《任天堂明星大乱斗》、《斯普拉遁 3 (喷射战士)》等多人联机游戏时，玩家经常遭遇以下恶性网络问题：
- 房间搜索不到任何玩家，提示 \`NAT Traversal Failed / 无法穿透 NAT\`。
- 匹配队友极其缓慢，即使进入房间也频繁在中途掉线（Error Code 2618-0516 等）。
- 游戏本体及动辄 80GB 的大型首日补丁下载极慢，预估耗时数十小时。

### 核心根源：
1. **国内运营商光猫防火墙过于严苛**：家用宽带分配的大多为大内网 IP（NAT444），缺乏公网 IP。
2. **境外服务器链路节点丢包**：PSN 与任天堂 P2P 匹配服务器部署于海外，直连时数据包在国际出口遭到 QoS 限速丢弃。

---

## 二、方案一：电脑客户端“允许局域网连接”极速提速（免成本）

如果您没有安装软路由，仅凭一台 Windows 或 Mac 笔记本，即可轻松实现主机加速：

### 1. 电脑端客户端设置
1. 打开电脑上的 **Clash Verge Rev** 或 **v2rayN**。
2. 进入客户端设置，找到并勾选 **“允许局域网连接 (Allow LAN)”** 开关。
3. 记录电脑的局域网静态 IP（例如通过终端运行 \`ipconfig\` 查看到的 \`192.168.1.188\`）以及本地混合代理端口（默认通常为 \`7890\` 或 \`10808\`）。
4. 在策略组中，选择一条支持 **Fullcone NAT (全锥形 NAT)** 的低延迟专线（如本站推荐的 [隐形人](/review/yinxingren/) 或 [微风网络](/review/breezenet/) 的日本/香港节点）。

### 2. PS5 主机端网络设置
1. 进入 PS5 **“设定” -> “网络” -> “设定互联网连接”**。
2. 选中当前连接的家庭 Wi-Fi 或有线网络，按手柄“选项键 (三道杠)”，选择 **“高级设定”**。
3. 找到 **“Proxy 服务器”** 选项，选择 **“使用”**：
   - 地址 (Address)：输入电脑的内网 IP（如 \`192.168.1.188\`）。
   - 端口 (Port)：输入电脑客户端的端口（如 \`7890\`）。
4. 保存后点击“测试互联网连接”。下载速度瞬间拉满千兆物理带宽，联机匹配秒速进房！

### 3. Nintendo Switch 主机端网络设置
1. 进入 Switch **“系统设置” -> “互联网” -> “互联网设置”**。
2. 选中当前 Wi-Fi，点击“更改设置”，页面向下滚动找到 **“代理服务器设置”**。
3. 将代理服务器设为“开启”：
   - 服务器：输入电脑的 IP 地址。
   - 端口：输入 7890。
4. 保存并连接测试，NAT 类型将从严苛的 Type D/F 跃升至极佳的 **Type A / Type B**！

---

## 三、方案二：软路由/旁路由网关一劳永逸（全屋透明加速）

对于发烧级主机玩家，建议在软路由的 **PassWall** 或 **OpenClash** 中，针对主机的 MAC 地址建立独立规则，指定走支持 **Fullcone NAT 1** 的专线节点，开启 UDP 转发加速，彻底告别开机前还要先开电脑的繁琐步骤！
`);

// -------------------------------------------------------------
// telegram-twitter-proxy-setup
// -------------------------------------------------------------
updateGuide('telegram-twitter-proxy-setup', 'Telegram MTProto / Socks5 直连代理与推特媒体极速加载设置教程', '社交与办公', ['Telegram', 'Socks5', 'MTProto', 'Twitter'], `
## 一、为什么 Telegram 总是显示“Connecting (连接中)”转圈？

许多新手用户反映：电脑或手机上明明已经打开了代理软件，刷网页也正常，但打开 **Telegram (电报)** 时，顶部状态栏却一直显示“Connecting... (连接中)”或者“Updating... (更新中)”，甚至几分钟都拉不出聊天记录。

### 核心机制分析：
1. **Telegram 独特的通信架构**：Telegram 采用专属研发的 **MTProto 协议**，默认向其遍布在欧洲、美国和新加坡的数据中心（DC1~DC5）发起高并发长连接。
2. **多路复用被系统代理漏掉**：在某些客户端的默认 PAC 规则或弱分流规则中，Telegram 的非标端口 UDP 数据包容易被误判为直连或被防火墙无情阻断。

---

## 二、在 Telegram 内部配置 SOCKS5 直连通道（彻底告别转圈）

在 Telegram 客户端内部直接配置本地代理，是业内公认最稳定、响应速度最快的方案：

### 1. 桌面端 (Windows / macOS) 配置步骤
1. 打开 Telegram 桌面端，点击左上角三道杠菜单，进入 **“Settings (设置)”**。
2. 点击 **“Advanced (高级)”**，选择 **“Connection type (连接类型)”**。
3. 勾选 **“Use custom proxy (使用自定义代理)”**，点击 **“Add proxy (添加代理)”**。
4. 选择 **SOCKS5**：
   - Socket address (服务器)：输入本地回环地址 \`127.0.0.1\`。
   - Port (端口)：输入客户端的本地 Socks 端口（Clash 默认为 \`7890\`，v2rayN 默认为 \`10808\`）。
5. 勾选 **“Try to connect through IPv6”**【建议关闭】。
6. 点击 Save 保存并启用。状态栏瞬间跳出绿色对勾，海量群聊媒体秒速下载！

### 2. 手机端 (iOS / Android) 配置步骤
1. 打开手机 Telegram -> 进入 **“Settings” -> “Data and Storage (数据与存储)”**。
2. 滑到最底部，点击 **“Proxy Settings (代理设置)”**。
3. 点击 **“Add Proxy”** -> 选择 **SOCKS5**，填入 \`127.0.0.1\` 及本地端口。
4. 打开顶部 **“Use Proxy”** 开关，连接状态瞬间变为“Connected”！

---

## 三、Twitter / X 高清视频与无损图片秒开调优

Twitter (X) 拥有大量高码率视频与动图。如果在刷推时图片经常显示模糊灰块，需在客户端分流规则中将以下关键 CDN 域名分配至高速专线节点：
- \`twimg.com\` (Twitter 图片服务器)
- \`video.twimg.com\` (Twitter 视频流媒体分发 CDN)
- \`x.com\` / \`twitter.com\`

选购针对电报与推特大流量传输优化的服务商，欢迎参考本站 [综合实力排行榜](/ranking/overall/) 与 [平价大流量专题](/recommend/budget/)。
`);

// -------------------------------------------------------------
// tv-android-tv-clash
// -------------------------------------------------------------
updateGuide('tv-android-tv-clash', 'Android TV / 索尼电视安装 Clash 与 v2rayNG 遥控器适配全攻略', '智能设备', ['Android TV', 'Sony TV', 'Chromecast', 'Clash for TV'], `
## 一、智能电视安装代理软件的核心痛点

在索尼电视、小米电视、TCL 电视、Google Chromecast with Google TV 以及外贸安卓电视盒子上，很多用户常常尝试把手机里的翻墙软件直接拷贝到电视安装，结果遭遇严重翻车：
- **没有触屏，遥控器光标无法选中核心按钮**（无法点击确定、无法勾选节点）。
- **无法在电视端输入长达几十位的订阅链接**（电视自带的拼音输入法用遥控器按键输入极度痛苦）。
- **后台常驻被电视系统强行杀掉**（电视内存普遍较小，播放 4K 视频时后台代理进程被直接回收）。

---

## 二、解决方案：使用电视专用遥控器适配版客户端

针对电视大屏，必须安装经过 TV 焦点适配的专属 APK：
- **推荐客户端 1**：\`ClashForAndroid-tv.apk\`（支持遥控器方向键导航，支持局域网无线同步）。
- **推荐客户端 2**：\`v2rayNG-TV\`（专为大屏定制的大字体卡片式布局）。

---

## 三、免遥控打字：局域网 Web 极速导入订阅全流程

1. 通过 U 盘或局域网无线传屏将 TV 版 APK 安装至电视。
2. 打开电视上的客户端，使用遥控器点击 **“从局域网导入 (Import via Web)”**。
3. 电视屏幕上会弹出一个醒目的二维码与本地局域网 IP（例如 \`http://192.168.1.120:8080\`）。
4. **拿起同一 Wi-Fi 下的手机或电脑浏览器**，直接输入该网址，页面会显示一个简洁的提交输入框。
5. 在手机上长按粘贴你复制的机场订阅链接，点击 **“Submit (提交)”**。
6. 电视端一秒内完成自动解析与下载，所有节点以超大字号整齐显示在电视屏幕上！
7. 使用遥控器方向键选中支持 4K 原生解锁的专线节点，点击连接，打开电视内置的 YouTube 或 Netflix，4K 杜比视界即刻秒开！
`);

// -------------------------------------------------------------
// gl-inet-router
// -------------------------------------------------------------
updateGuide('gl-inet-router', 'GL.iNet 便携式出国路由节点配置教程：出差旅行即插即用实战', '路由器', ['GL.iNet', 'Beryl AX', 'Slate AX', 'WireGuard'], `
## 一、数字游民与商务出差神器的无可替代性

经常穿梭于海外出差、国内酒店会议或咖啡厅的数字游民与商务人士，经常面临三大网络难题：
1. **公共 Wi-Fi 安全隐患**：酒店公共 Wi-Fi 存在严重局域网抓包风险与 DNS 篡改。
2. **设备繁多重复配置**：随身携带 iPhone、iPad、MacBook、工作电脑，每到一个新环境每台设备都要手动连一次翻墙软件。
3. **部分涉密设备禁止安装第三方软件**：公司发放的工作机通常锁定管理员权限，禁止私自安装科学上网客户端。

**GL.iNet 便携式路由器**（如热门的 Beryl AX、Slate AX、Puli AX）体积仅巴掌大小，内置基于 OpenWrt 的强大深度定制系统，是打造个人专属便携安全网关的首选方案！

---

## 二、三步实现即插即用透明加速

### 第一步：酒店 Wi-Fi 无线中继 (Repeater)
1. 在酒店将 GL.iNet 插上 USB Type-C 充电器。
2. 手机连接 GL.iNet 散发的默认 Wi-Fi，在浏览器中打开管理后台地址 \`http://192.168.8.1\`。
3. 点击 **“互联网 (Internet)” -> “中继 (Repeater)”**，扫描并连接酒店提供的免费 Wi-Fi，输入客房登录密码。

### 第二步：导入机场节点配置
1. 在后台左侧菜单找到 **“VPN 客户端”** 或内置的代理插件。
2. 导入机场提供的 Shadowsocks、Trojan 订阅或 WireGuard 配置文件。
3. 开启连接后，GL.iNet 自动在底层建立加密安全隧道。

### 第三步：全设备全自动无感出海
此时，你随身携带的所有手机、笔记本、平板无需开启任何客户端，只要连接你的 GL.iNet Wi-Fi，全部流量自动走专线加速，安全隐私得到物理级完全隔离防护！
`);

// -------------------------------------------------------------
// android-sing-box (SFA)
// -------------------------------------------------------------
updateGuide('android-sing-box', 'Android 平台 SFA (Sing-box for Android) 现代网络分流实战', 'Android', ['Sing-box for Android', 'SFA', 'Go-native'], `
## 一、SFA 客户端的超低功耗与极致性能

**Sing-box for Android (SFA)** 是官方针对 Android 平台开发的原生通用客户端。得益于 Go 语言内核在网络数据包流转上的高度优化，SFA 解决了传统客户端在安卓手机上发热量大、耗电严重的顽疾，单进程待机耗电几乎可以忽略不计。

---

## 二、配置导入与分流实战

1. 从官方 GitHub 下载正版 \`SFA-arm64-v8a.apk\` 并完成安装。
2. 打开 SFA，切换到 **“Profiles (配置)”** 标签页，点击右上角加号。
3. 选择“Remote (远程配置)”，填入机场提供的 Sing-box 原生订阅 URL，开启自动更新。
4. 切换至 **“Dashboard (仪表盘)”**，点击中心主开关，授予系统底层 VPN 权限。
5. SFA 内置先进的 Fake-IP 解析与 Sniffing 域名嗅探机制，海外应用瞬间秒开，国内应用丝滑直连。
`);

// -------------------------------------------------------------
// android-nekobox
// -------------------------------------------------------------
updateGuide('android-nekobox', 'Android 平台 NekoBox 教程：支持 Hysteria2、TUIC 与内网直连', 'Android', ['NekoBox for Android', 'Sing-box Core', 'Hysteria2'], `
## 一、安卓全协议全能神器 NekoBox

**NekoBox for Android** 是安卓平台极客玩家公认最全能的通用客户端。它集成了 Sing-box 与 Xray 双内核能力，原生支持新一代抗恶劣链路丢包的 **Hysteria2** 与 **TUIC v5** 协议。

---

## 二、订阅同步与节点健康排查

1. 安装官方最新版 APK，点击右上角加号选择“添加订阅”。
2. 粘贴订阅链接并更新，长按节点列表可一键发起“真实网络延时 (HTTP HEAD)”批量测试。
3. 在侧边栏开启“绕过局域网及大陆”，让手机在享受低延迟跨境专线的同时，国内微信与支付宝完全保持免流高速直连。
`);

// -------------------------------------------------------------
// linux-clash-verge
// -------------------------------------------------------------
updateGuide('linux-clash-verge', 'Linux 桌面端 (Ubuntu/Debian/Arch) Clash Verge Rev 部署与提权', 'Linux', ['Clash Verge Rev Linux', 'AppImage', 'setcap 提权'], `
## 一、Linux 桌面用户的现代化体验

在 Ubuntu、Debian、Fedora 或 Arch Linux 桌面发行版上，**Clash Verge Rev** 提供了原生美观的图形交互体验，支持桌面托盘、分流策略组及 TUN 虚拟网卡全流量接管。

---

## 二、安装与权限设置

\`\`\`bash
# 1. Ubuntu/Debian 直接安装 deb 软件包
sudo dpkg -i clash-verge_*.deb
sudo apt-get install -f # 自动补齐依赖

# 2. 关键：为 TUN 模式赋予网络特权 (避免必须以 root 启动应用)
sudo setcap cap_net_admin,cap_net_bind_service=+ep /usr/bin/clash-verge
\`\`\`
在软件设置中打开 TUN 模式，即可免配置任何环境变量，整机所有软件全自动出海。
`);

// -------------------------------------------------------------
// ios-loon
// -------------------------------------------------------------
updateGuide('ios-loon', 'iOS 平台 Loon 客户端保姆级教程：节点订阅、抓包与自动化脚本', 'iOS', ['Loon iOS', 'SwiftUI UI', 'Loon Plugins'], `
## 一、兼备易用性与强大扩展的 Loon

**Loon** 是近年来在 iOS 平台发展极为迅速的高阶网络代理工具。它不仅具备与 Quantumult X、Surge 媲美的规则分流与 MitM 脚本功能，同时拥有极为直观亲和的现代化图形界面，极大降低了新手的配置门槛。

---

## 二、配置与插件市场一键安装

1. 从海外 App Store 安装正版 Loon 后打开应用。
2. 点击底部菜单栏 **“配置” -> “订阅”**，输入机场订阅 URL，支持开启更新时自动测试健康度。
3. 切换至“插件”标签页，支持直接搜索安装主流流媒体检测、YouTube 去广告等实用插件。
4. 点击顶部开关激活 VPN 描述文件，即可享受极速分流体验。
`);

// -------------------------------------------------------------
// ios-stash
// -------------------------------------------------------------
updateGuide('ios-stash', 'iOS 平台 Stash (Clash for iOS) 深度使用指南：规则覆写与仪表盘解析', 'iOS', ['Stash', 'Clash for iOS', 'Dashboard'], `
## 一、什么是 Stash？为什么称它为 Clash for iOS？

**Stash** 完整移植了桌面端 Clash 的核心规则与配置逻辑体系。如果您平时习惯了在电脑端使用 Clash Verge Rev，在 iPhone 上使用 Stash 可以做到配置思路 100% 平滑迁移。

---

## 二、一键导入与连接诊断

1. 打开 Stash，进入配置页面，点击右上角加号从 URL 下载。
2. 粘贴任何标准的 Clash / Meta 订阅链接，Stash 即可全自动识别并编译为本地可用配置。
3. 点击底部“仪表盘”，可以实时监控当前手机每一个 App 的上传与下载速率，点击“连接”可精准排查每一条连接走了哪个节点。
`);

// -------------------------------------------------------------
// macos-loon
// -------------------------------------------------------------
updateGuide('macos-loon', 'macOS 平台 Loon 独立客户端轻量化配置实操与插件扩展', 'macOS', ['Loon for Mac', 'Loon Plugin', 'Apple Silicon'], `
## 一、Loon for Mac 的核心魅力

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
5. 点击仪表盘主开关，输入系统密码授予 VPN 权限，即可开启无感高速体验。
`);

// -------------------------------------------------------------
// macos-shadowrocket
// -------------------------------------------------------------
updateGuide('macos-shadowrocket', 'Mac (Apple Silicon) 运行 Shadowrocket 小火箭配置全技巧', 'macOS', ['Shadowrocket Mac', 'Apple Silicon M1-M4', 'Direct Run'], `
## 一、为什么在 Mac 上使用小火箭？

拥有 Apple Silicon (M1/M2/M3/M4) 芯片的 Mac 电脑原生支持直接运行 iOS 应用。如果您已经在 iPhone 上购买了 **Shadowrocket (小火箭)**，无需额外再为 Mac 购买任何高昂的商业翻墙软件，可直接将其无损运行在 macOS 桌面！

---

## 二、下载与安装操作流程

1. 打开 Mac 系统自带的 **App Store**。
2. 点击左下角您的个人账户头像，进入“已购项目”。
3. 在上方分类标签页中，点击切换至 **“iPhone 与 iPad App”**。
4. 找到您此前购买过的 **Shadowrocket**，点击云朵下载图标直接装入 Mac 应用程序文件夹。
5. 打开应用，点击右上角加号通过扫码或输入 URL 导入机场订阅。
6. 全局路由选择 **“配置 (Config)”**，轻触顶部开关即可开启全速翻墙！
`);

console.log('Finished Batch 2 deep guides enrichment!');
