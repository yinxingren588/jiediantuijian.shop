---
title: "macOS 平台 Clash Verge Rev 完整配置指南 (兼容 Apple Silicon M系列与Intel芯片)"
description: "针对 macOS 系统的 Clash Verge Rev 深度调优教程。解决系统权限授权、TUN 模式授权、开机自启动与电池续航优化策略。"
platform: "macOS"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
  - "Clash Verge Rev for Mac"
  - "Mihomo"
---

## macOS 用户的现代化代理体验

对于苹果 Mac 用户，**Clash Verge Rev** 提供了原生适配 Apple Silicon (M1/M2/M3/M4) 架构的安装包，不仅运行极其丝滑，且相比老旧的 Electron 应用拥有更高的能效比，几乎不消耗电池续航。

---

## 一、安装与安全性权限授予

1. 下载适配架构的 dmg 文件：
   - 苹果芯片 (M1/M2/M3/M4 系列)：下载 `x64-aarch64.dmg`。
   - 老款 Intel 处理器芯片：下载 `x64.dmg`。
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
3. 授权成功后，终端中的 `git clone` 与所有网络请求均将自动加速！
