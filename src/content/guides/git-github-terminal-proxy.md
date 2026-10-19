---
title: "程序员必看：终端 Bash、Git、Docker 及 WSL2 极速代理环境配置指南"
description: "彻底解决 git clone 龟速、Failed to connect to github.com、Docker pull 超时与 WSL2 无法访问宿主机代理的综合实战方案。"
platform: "开发与办公"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
  - "Git Proxy"
  - "WSL2 TUN"
---

## 程序员的日常网络瓶颈

在日常开发工作中，很多工程师开启了桌面客户端后，打开浏览器上网很顺畅，但在命令行执行 `git clone`、`npm install`、`pip install` 或 `docker pull` 时，依然频繁遭遇 `Connection reset by peer` 或慢如蜗牛。

---

## 一、Git 命令全局代理配置

Git 默认不自动读取系统代理设置，必须单独配置代理端口（以本地默认混合端口 7890 为例）：

```bash
# 针对 GitHub 域名单独设置代理 (推荐，不影响国内 Gitee)
git config --global http.https://github.com.proxy http://127.0.0.1:7890
git config --global https.https://github.com.proxy http://127.0.0.1:7890

# 如需取消配置
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy
```

---

## 二、终端命令行 (Bash / Zsh / PowerShell) 环境变量

在终端配置文件（如 `~/.bashrc`、`~/.zshrc`）底部追加便捷函数：

```bash
# 快捷开关代理函数
alias setproxy="export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890; echo 'Proxy on'"
alias unsetproxy="unset http_proxy; unset https_proxy; echo 'Proxy off'"
```

---

## 三、WSL2 子系统优雅访问 Windows 宿主机代理

Windows 11 用户在 WSL2 下，最简便的方法是开启 Clash Verge Rev 的 **TUN 模式**。开启后，WSL2 内的所有网络发包自动由宿主机的虚拟网卡透明接管，无需手动探查复杂的内网网关 IP！
