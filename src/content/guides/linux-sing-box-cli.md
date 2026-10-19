---
title: "Linux / VPS 命令行无 GUI 环境 Sing-box 系统级代理配置实战"
description: "服务器运维与学术科研人员必备：在 Ubuntu / Debian / CentOS 无桌面环境下通过 systemd 守护进程运行 Sing-box，实现整机透明加速。"
platform: "Linux"
publishDate: "2026-03-29"
updatedDate: "2026-03-29"
author: "节点推荐技术支持组"
recommendedClients:
  - "Sing-box CLI"
  - "systemd"
---

## Linux 命令行环境的代理挑战

在开发测试、AI 训练服务器（如租用的 GPU 算力云）或无图形界面的 VPS 环境中，经常需要下载 HuggingFace 模型、更新 Docker 镜像或执行 `apt update`，极易遭遇网络超时。使用 **Sing-box 命令行内核** 搭配 systemd 守护进程是最高效的解决方案。

---

## 一、安装 Sing-box 二进制程序

```bash
# 1. 下载官方二进制包 (以 amd64 为例)
curl -Lo sing-box.tar.gz https://github.com/SagerNet/sing-box/releases/latest/download/sing-box-linux-amd64.tar.gz
tar -zxvf sing-box.tar.gz
sudo mv sing-box-*/sing-box /usr/local/bin/
sudo chmod +x /usr/local/bin/sing-box

# 验证版本
sing-box version
```

---

## 二、配置与持久化服务托管

1. 创建配置文件目录：`sudo mkdir -p /etc/sing-box`
2. 将机场提供的 Sing-box JSON 格式配置放置于 `/etc/sing-box/config.json`。
3. 创建 systemd 服务文件 `/etc/systemd/system/sing-box.service`：

```ini
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
```

4. 启动并配置开机自启：
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now sing-box
sudo systemctl status sing-box
```

在环境变量中配置 `export http_proxy="http://127.0.0.1:7890"` 即可实现终端全局极速出境。
