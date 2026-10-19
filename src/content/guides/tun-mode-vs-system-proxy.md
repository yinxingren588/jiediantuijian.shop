---
title: "TUN 虚拟网卡模式与系统代理对比及全流量接管防泄漏配置"
description: "深度技术解析：传统 System Proxy 与底层虚拟网卡 TUN 模式的运行机制差异。如何实现整机流量无死角接管，彻底防范代理穿透与 IP 泄漏。"
platform: "进阶调优"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
  - "TUN Mode"
  - "Mihomo Wintun"
---

## 核心机制：系统代理 vs TUN 虚拟网卡

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

在支持 TUN 模式的客户端中（如 Clash Verge Rev），仅需在设置面板打开 TUN 模式开关即可。更多客户端技术评测欢迎查阅我们的 [使用教程中心](/guides/)。
