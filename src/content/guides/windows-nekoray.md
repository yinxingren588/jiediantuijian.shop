---
title: "Windows 平台 NekoRay (NekoBox) 客户端配置教程：全协议支持与链式代理"
description: "针对复杂网络环境的高级通用客户端 NekoRay 深度指南。支持 Shadowsocks、Trojan、VLESS、NAH 及链式前置代理配置。"
platform: "Windows"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
  - "NekoRay"
  - "NekoBox for Windows"
---

## 为什么选择 NekoRay？

**NekoRay**（基于 Qt 编写，核心驱动为 Xray-core / Sing-box core）是极客与跨境多链路用户极为钟爱的一款专业客户端。它的核心优势在于**全协议无缝兼容**、原生支持直连/全局/绕过大陆模式，并拥有强大的**链式代理（前置代理 + 落地出口）**构建能力。

---

## 一、安装与内核切换

1. 从官方 GitHub 下载最新 Release 的 `nekoray-x.x-windows64.zip`。
2. 解压后运行 `nekoray.exe`。
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

针对需要纯净 IP 落地与高防内网的用户，建议在 [机场对比工具](/compare/) 中筛选支持“双ISP落地”的品牌。
