---
title: "Linux 桌面端 (Ubuntu/Debian/Arch) Clash Verge Rev 部署与提权"
description: "针对 Linux 桌面发行版用户的 Clash Verge Rev 安装手册。解决 AppImage 权限、Deb/AUR 安装、虚拟网卡驱动提权与系统托盘适配。"
platform: "Linux"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
  - "Clash Verge Rev"
  - "Arch/Ubuntu"
---

## Linux 桌面用户的福音

很多从 Windows 或 Mac 迁移到 Ubuntu、Fedora 或 Arch Linux 的用户，最烦恼的就是没有好用的图形化代理客户端。**Clash Verge Rev** 原生支持 Linux，提供了极佳的桌面体验。

---

## 一、不同发行版的安装方式

1. **Ubuntu / Debian 用户**：下载 `.deb` 包，在终端执行：
   ```bash
   sudo dpkg -i clash-verge_*.deb
   sudo apt-get install -f # 修复依赖
   ```
2. **Arch Linux 用户**：直接通过 AUR 安装：
   ```bash
   yay -S clash-verge-rev-bin
   ```
3. **通用便携方式**：下载 `.AppImage` 文件，赋予执行权限后直接双击运行：
   ```bash
   chmod +x Clash.Verge-*.AppImage
   ./Clash.Verge-*.AppImage
   ```

---

## 二、授予 TUN 模式特权能力

由于 Linux 对网络设备驱动权限管控极为严格，开启 TUN 模式需要授予应用网络管理特权：
```bash
sudo setcap cap_net_admin,cap_net_bind_service=+ep /usr/bin/clash-verge
```
授权完成后，在软件设置中打开 TUN 模式即可接管整机所有 TCP/UDP 流量。
