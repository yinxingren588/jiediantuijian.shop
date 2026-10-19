---
title: "专业词典：分流规则配置与TUN模式运行机制"
description: "深入剖析Clash与Sing-box中的规则分流（Rule-based Routing）以及TUN虚拟网卡模式（TUN Mode）的技术实现与运行机制。告别国内网站卡顿与流量泄露。"
term: "分流规则与 TUN 模式"
category: "客户端技术"
publishDate: "2026-03-05"
updatedDate: "2026-03-27"
---

## 什么是分流规则（Rule-based Routing）？

在使用现代网络客户端（如 Clash Verge Rev、Shadowrocket、Sing-box）时，“分流规则”是其最核心的灵魂功能。

### 为什么需要分流？
如果你开启了“全局代理”，所有流向国内网站（如百度、淘宝、微信、Bilibili、网易云音乐）的请求也会绕道境外节点再访问国内。
这会导致两大恶果：
1. **国内服务变慢甚至被封**：由于你的 IP 显示在境外，国内软件的 CDN 加速完全失效，银行 App 会提示异地登录风险，网易云音乐和视频网站会出现“版权限制无法在境外播放”。
2. **白白浪费机场流量**：日常看一部国产剧可能消耗几十 GB 宝贵的机场配额。

### 规则如何自动工作？
分流规则本质上是一份按优先级匹配的“交通调度规则表”：
- **DOMAIN-SUFFIX, baidu.com, DIRECT**：目标网址以 baidu.com 结尾，自动走本地直连，不走代理。
- **GEOIP, CN, DIRECT**：通过内置的全球 IP 数据库，凡是目标 IP 属于中国大陆地区，自动本地直连。
- **DOMAIN-KEYWORD, openai, PROXY**：目标包含 openai 关键词，自动转发至海外代理节点。
- **MATCH, PROXY**：兜底规则，其余未命中的海外流量走默认代理。

---

## 什么是 TUN 模式（TUN Virtual Network Interface）？

在过去，很多软件（如 Windows 的 CMD、PowerShell、Git 终端，或者外服游戏客户端、Docker 等）**根本不遵守操作系统的“系统代理 (System Proxy)”设置**。结果就是浏览器能科学上网，但终端和游戏依然报错断连。

### TUN 模式的工作机制：
- TUN（Network Tunnel）是操作系统内核级别的一个**虚拟三层网卡驱动程序**。
- 开启 TUN 模式后，客户端会在你的电脑中虚拟出一张网卡，并将操作系统的默认网关路由指向这张虚拟网卡。
- 此时，电脑内**所有软件产生的所有 IP 数据包**，无论它们是否支持代理协议，都会被虚拟网卡强行截获并交给内核分流引擎处理。

### 开启 TUN 模式的益处：
1. **真·全局无死角接管**：无需对终端手动执行 `export http_proxy`，命令行直接飞速加速。
2. **外服游戏与语音顺畅加速**：完美接管各类 UDP 协议游戏与 Discord 语音。
3. **彻底根除 DNS 污染与泄露**：本地 DNS 请求统一由客户端内核在远端加密解析，防止运营商劫持。

配置各平台客户端的 TUN 模式，可查看我们的 [Windows平台配置教程](/guides/windows/) 与 [macOS配置教程](/guides/macos/)。
