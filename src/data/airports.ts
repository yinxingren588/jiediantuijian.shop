export interface Plan {
  name: string;
  price: number;
  currency: string;
  period: "month" | "quarter" | "halfYear" | "year" | "twoYear" | "oneTime";
  periodLabel: string;
  trafficGB: number;
  effectiveTrafficGB: number;
  bandwidthMbps?: number;
  deviceLimit?: string;
  note?: string;
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;

  officialUrl?: string;
  affiliateUrl: string;
  couponCode?: string;

  startingPrice: number;
  currency: string;

  lineType: string;
  overallScore: number;
  scoreBreakdown: {
    stability: number;
    speed: number;
    priceValue: number;
    support: number;
    unlocking: number;
  };

  plans: Plan[];

  protocols: string[];
  regions: string[];

  deviceLimit?: string;

  aiSupport?: string[];
  streamingSupport?: string[];

  advantages: string[];
  disadvantages: string[];

  suitableFor: string[];
  categories: ("budget" | "premium" | "beginner" | "stable" | "ai" | "streaming")[];

  sources: string[];
  lastVerified: string;
  testStatus: "tested" | "official-data" | "unverified";
}

export const airports: Airport[] = [
  {
    id: "yinxingren",
    name: "隐形人",
    slug: "yinxingren",
    tagline: "全IEPL内网专线 · 极低网络抖动与全天候高可用保障",
    description: "隐形人是一家主打高速企业级IEPL内网专线的高品质机场，采用大带宽独立隧道传输，不经公网审查节点，晚高峰丢包率控制在1%以内。全节点解锁主流流媒体与ChatGPT等AI平台。",
    affiliateUrl: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy",
    couponCode: "yxr888",
    startingPrice: 25,
    currency: "CNY",
    lineType: "全IEPL内网专线",
    overallScore: 9.6,
    scoreBreakdown: { stability: 9.8, speed: 9.6, priceValue: 9.1, support: 9.5, unlocking: 9.7 },
    plans: [
      { name: "专线轻享版", price: 25, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 150, effectiveTrafficGB: 150, bandwidthMbps: 500, deviceLimit: "5台设备", note: "专享专属优惠券 yxr888" },
      { name: "专线主力版", price: 45, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 350, effectiveTrafficGB: 350, bandwidthMbps: 1000, deviceLimit: "8台设备", note: "千兆大带宽，晚高峰零卡顿" },
      { name: "尊享年付", price: 260, currency: "CNY", period: "year", periodLabel: "年付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 1000, deviceLimit: "8台设备", note: "折合每月21.6元" }
    ],
    protocols: ["Shadowsocks", "Trojan", "Hysteria2"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "韩国"],
    deviceLimit: "5-8台设备",
    aiSupport: ["ChatGPT", "Claude 3.5", "Midjourney", "Gemini", "Copilot"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube Premium", "HBO Max"],
    advantages: ["全IEPL专线内网传输，晚高峰网络零丢包", "针对OpenAI原生双ISP落地解锁", "专属优惠券 yxr888 享受立减折扣", "工单响应迅速，技术支持到位"],
    disadvantages: ["起步价格略高于纯公网中转机场", "不支持免费无限期试用"],
    suitableFor: ["跨境电商与涉外办公团队", "ChatGPT与Claude重度用户", "追求晚高峰绝对稳定的影音爱好者"],
    categories: ["premium", "stable", "ai", "streaming"],
    sources: ["官方控制台资费表", "晚高峰双向Ping实测"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "muguang",
    name: "暮光网络",
    slug: "muguang",
    tagline: "全BGP智能隧道中转 · 超大月度流量与亲民定价",
    description: "暮光网络部署了覆盖国内主流三大运营商的多线BGP入口智能调度链路，为多设备家庭与大流量下载用户提供极具竞争力的套餐方案。",
    affiliateUrl: "https://varnexa.twilightaff.com/#/?code=3qqonTlH",
    startingPrice: 16,
    currency: "CNY",
    lineType: "多线BGP中转集群",
    overallScore: 9.1,
    scoreBreakdown: { stability: 8.9, speed: 9.2, priceValue: 9.6, support: 8.8, unlocking: 8.9 },
    plans: [
      { name: "畅享月付", price: 16, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 400, deviceLimit: "3台设备", note: "高性价比入门月付" },
      { name: "海量月付", price: 29, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 450, effectiveTrafficGB: 450, bandwidthMbps: 800, deviceLimit: "5台设备", note: "超大流量，支持多设备" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "德国"],
    deviceLimit: "3-5台",
    aiSupport: ["ChatGPT", "Claude", "Gemini"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium"],
    advantages: ["多线BGP智能入口，单GB单价极其实惠", "套餐流量充足，日常看视频无需担心超标", "支持低门槛月付体验"],
    disadvantages: ["节假日晚高峰偶有瞬时波动", "设备数限制在3-5台"],
    suitableFor: ["学生党与预算有限的大流量用户", "YouTube 4K后台挂机日常播放"],
    categories: ["budget", "beginner", "streaming"],
    sources: ["官方服务协议", "多点网络丢包率采样"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "breezenet",
    name: "微风网络 Breezenet",
    slug: "breezenet",
    tagline: "轻量高速智能调度 · 双ISP流媒体原生解锁",
    description: "微风网络Breezenet专注于为流媒体与AI用户提供纯净原生IP和稳定高速网络，落地覆盖亚太核心区域，支持专属优惠券立减。",
    affiliateUrl: "https://edp01.breezenetaff.com/#/?code=4KDOroY0",
    couponCode: "weifeng90",
    startingPrice: 20,
    currency: "CNY",
    lineType: "高速BGP优化专线",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.3, speed: 9.4, priceValue: 9.3, support: 9.1, unlocking: 9.6 },
    plans: [
      { name: "微风入门版", price: 20, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 500, deviceLimit: "4台设备", note: "使用优惠码 weifeng90 享9折" },
      { name: "微风进阶版", price: 38, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 500, effectiveTrafficGB: 500, bandwidthMbps: 1000, deviceLimit: "6台设备", note: "千兆端口原生IP解锁" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "4-6台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Perplexity", "Midjourney"],
    streamingSupport: ["Netflix 4K全部片库", "Disney+", "YouTube 4K", "Spotify"],
    advantages: ["9折优惠券 weifeng90 极具诚意", "全节点标配原生IP，解锁主流流媒体与AI", "客户端配置简便，支持一键订阅"],
    disadvantages: ["工单系统晚间高峰排队时间稍长"],
    suitableFor: ["海外流媒体追剧影迷", "AI创作与跨境社交媒体运营"],
    categories: ["ai", "streaming", "stable"],
    sources: ["官方控制台公开定价", "流媒体解锁自动化脚本监测"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "feimaoyun",
    name: "飞猫云",
    slug: "feimaoyun",
    tagline: "极速猫咪专线 · 稳定抗封锁与多节点冗余",
    description: "飞猫云采用高冗余内网中继隧道架构，节点覆盖广，抗封锁能力强。提供专属优惠券 flycat888，为新手提供一键导入和详尽图文教程。",
    affiliateUrl: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW",
    couponCode: "flycat888",
    startingPrice: 18,
    currency: "CNY",
    lineType: "高冗余内网中转隧道",
    overallScore: 9.2,
    scoreBreakdown: { stability: 9.2, speed: 9.1, priceValue: 9.4, support: 9.2, unlocking: 9.2 },
    plans: [
      { name: "飞猫尝鲜套餐", price: 18, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 160, effectiveTrafficGB: 160, bandwidthMbps: 400, deviceLimit: "3台设备", note: "优惠码 flycat888 享立减" },
      { name: "飞猫主力套餐", price: 35, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 400, effectiveTrafficGB: 400, bandwidthMbps: 800, deviceLimit: "5台设备", note: "高可用低延迟专线" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "韩国"],
    deviceLimit: "3-5台",
    aiSupport: ["ChatGPT", "Claude", "Copilot"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium"],
    advantages: ["专属优惠码 flycat888 实惠可用", "后台提供新手一键导入配置，上手零门槛", "多线入口冗余，单线故障自动秒级切换"],
    disadvantages: ["冷门节点数量相对较少"],
    suitableFor: ["新手小白入门", "日常查资料与高清视频播放"],
    categories: ["beginner", "budget", "streaming"],
    sources: ["官方控制台公开资费", "客户端易用性实测"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "dalaocloud",
    name: "大佬云",
    slug: "dalaocloud",
    tagline: "企业级高防骨干 · 旗舰大带宽与极致稳定性",
    description: "大佬云专为高净值用户和企业团队设计，配备高等级抗DDoS防护与大带宽专用隧道，全天候晚高峰零丢包保障。",
    affiliateUrl: "https://vip.dalaocloud.com/#/?code=Cp2sfYZg",
    startingPrice: 30,
    currency: "CNY",
    lineType: "企业级专用隧道",
    overallScore: 9.5,
    scoreBreakdown: { stability: 9.7, speed: 9.6, priceValue: 8.9, support: 9.5, unlocking: 9.5 },
    plans: [
      { name: "大佬旗舰月付", price: 30, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 800, deviceLimit: "5台设备", note: "企业级SLA稳定保障" },
      { name: "大佬至尊月付", price: 58, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 500, effectiveTrafficGB: 500, bandwidthMbps: 1500, deviceLimit: "8台设备", note: "超大带宽独享" }
    ],
    protocols: ["Shadowsocks", "Trojan", "Hysteria2"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国"],
    deviceLimit: "5-8台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney", "OpenAI API"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K", "HBO Max"],
    advantages: ["骨干网抗封锁与抗拥堵能力极其强悍", "支持Hysteria2弱网穿透协议", "晚高峰丢包率严格控制在1%以内"],
    disadvantages: ["单月门槛30元起，偏向中高端定位"],
    suitableFor: ["外贸电商、跨境企业办公团队", "高码率视频与外服游戏联机"],
    categories: ["premium", "stable", "ai"],
    sources: ["华为云与电信骨干监测数据", "实机并发压测"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "feiv",
    name: "飞V",
    slug: "feiv",
    tagline: "极简轻量中继 · 亲民高可用与一键连通",
    description: "飞V以极简直观的仪表盘和高可用中继链路为特色，致力于让用户以最简单的方式连接全球互联网。",
    affiliateUrl: "https://varnexa.flyvaff.com/#/?code=UoU2Izm5",
    startingPrice: 15,
    currency: "CNY",
    lineType: "高速BGP多线中继",
    overallScore: 9.0,
    scoreBreakdown: { stability: 8.9, speed: 9.1, priceValue: 9.5, support: 8.7, unlocking: 8.8 },
    plans: [
      { name: "飞V尝鲜月付", price: 15, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 150, effectiveTrafficGB: 150, bandwidthMbps: 300, deviceLimit: "3台设备", note: "低门槛月付体验" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["月付15元起步，试错门槛极低", "界面清爽无多余广告干扰"],
    disadvantages: ["设备并发限制为3台"],
    suitableFor: ["轻度浏览网页与查资料的日常用户", "初学者备用节点"],
    categories: ["budget", "beginner"],
    sources: ["官方资费公开表"],
    lastVerified: "2026-03-26",
    testStatus: "tested",
  },
  {
    id: "laddercloud",
    name: "梯子云 LadderCloud",
    slug: "laddercloud",
    tagline: "老牌稳健网络服务 · 全平台全协议完美兼容",
    description: "梯子云LadderCloud具备多年网络运维经验，技术底蕴深厚，提供全协议支持与高鲁棒性容灾机制。",
    affiliateUrl: "https://varnexa.ladderaff.com/#/?code=kuE4kqxo",
    startingPrice: 22,
    currency: "CNY",
    lineType: "BGP专线混合架构",
    overallScore: 9.2,
    scoreBreakdown: { stability: 9.3, speed: 9.2, priceValue: 9.1, support: 9.2, unlocking: 9.3 },
    plans: [
      { name: "梯子云月度方案", price: 22, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 500, deviceLimit: "4台设备", note: "多节点稳定覆盖" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "德国", "英国"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT", "Claude", "Gemini"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium"],
    advantages: ["协议支持全面，老设备与路由器兼容极好", "网络路由多重冗余，常年稳定运行"],
    disadvantages: ["套餐选择相对固定"],
    suitableFor: ["多设备家庭与极客用户", "长期稳定办公"],
    categories: ["stable", "beginner"],
    sources: ["官方控制台公开定价"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "lingdongcloud",
    name: "灵动云",
    slug: "lingdongcloud",
    tagline: "智能动态负载均衡 · 毫秒级节点自动漂移",
    description: "灵动云采用智能动态负载调度，当某个节点出现延迟偏高时系统自动将流量漂移至空闲节点，保障连接流畅。",
    affiliateUrl: "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG",
    startingPrice: 19,
    currency: "CNY",
    lineType: "动态智能负载BGP",
    overallScore: 9.1,
    scoreBreakdown: { stability: 9.1, speed: 9.3, priceValue: 9.3, support: 8.9, unlocking: 9.0 },
    plans: [
      { name: "灵动基础版", price: 19, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 400, deviceLimit: "3台设备", note: "智能均衡节点负载" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["动态负载均衡技术，节点不易扎堆拥堵", "单价合理，性价比出众"],
    disadvantages: ["节点切换时偶有轻微重新握手"],
    suitableFor: ["日常网络冲浪与流媒体视频用户"],
    categories: ["budget", "streaming"],
    sources: ["官方控制台资费"],
    lastVerified: "2026-03-26",
    testStatus: "tested",
  },
  {
    id: "firefly",
    name: "Firefly机场",
    slug: "firefly",
    tagline: "萤火之光极速穿透 · 专为流媒体与AI深度优化",
    description: "Firefly机场深耕流媒体与AI原生解锁，全节点落地均通过IP欺诈度检测。提供专属优惠券 firefly，是影视追剧与AI开发者的得力工具。",
    affiliateUrl: "https://vip02.fireflyaff.com/#/?code=Fes6j9rn",
    couponCode: "firefly",
    startingPrice: 22,
    currency: "CNY",
    lineType: "优质专线中继 + 原生双ISP",
    overallScore: 9.4,
    scoreBreakdown: { stability: 9.4, speed: 9.5, priceValue: 9.2, support: 9.3, unlocking: 9.8 },
    plans: [
      { name: "萤火光速月付", price: 22, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 600, deviceLimit: "5台设备", note: "优惠码 firefly 享立减" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "5台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Sora", "Midjourney"],
    streamingSupport: ["Netflix全部非自制剧", "Disney+ IMAX", "YouTube Premium", "HBO Max"],
    advantages: ["专属优惠码 firefly 直减优惠", "原生双ISP住宅IP落地，彻底解决Access Denied", "4K超清秒开无卡顿"],
    disadvantages: ["没有低于20元的超小微型套餐"],
    suitableFor: ["ChatGPT与Claude重度用户", "Netflix与Disney+超高清影迷"],
    categories: ["ai", "streaming", "stable"],
    sources: ["IPinfo欺诈度检测", "流媒体解锁监测"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "lingmao",
    name: "灵猫",
    slug: "lingmao",
    tagline: "敏捷轻巧专线体验 · 超快响应与低延迟网络",
    description: "灵猫主打轻快敏捷的网络体验，专注于优化亚太骨干链路，针对港澳台与日韩提供超低延迟连接。",
    affiliateUrl: "https://vip02.civetaff.com/#/?code=kZlRw46w",
    startingPrice: 18,
    currency: "CNY",
    lineType: "亚太优化BGP中转",
    overallScore: 9.1,
    scoreBreakdown: { stability: 9.1, speed: 9.2, priceValue: 9.4, support: 9.0, unlocking: 9.0 },
    plans: [
      { name: "灵猫敏捷月付", price: 18, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 160, effectiveTrafficGB: 160, bandwidthMbps: 400, deviceLimit: "3台设备", note: "低延迟亚太节点精选" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K"],
    advantages: ["亚太节点延迟极低（香港<35ms）", "月付价格亲民实惠"],
    disadvantages: ["欧美长途节点相对较少"],
    suitableFor: ["亚太区域业务办公", "轻度外服游戏与网页浏览"],
    categories: ["budget", "beginner"],
    sources: ["亚太路由延迟测试记录"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "flashleap",
    name: "闪跃 FlashLeap",
    slug: "flashleap",
    tagline: "跨越巅峰千兆带宽 · 华为云专线与高速中转",
    description: "闪跃FlashLeap依托高等级内网互联专线，提供千兆带宽吞吐能力。配备专属优惠码 shanyue，兼具速度与性价比。",
    affiliateUrl: "https://vip02.flashleapaff.com/#/?code=FkCGEeaC",
    couponCode: "shanyue",
    startingPrice: 24,
    currency: "CNY",
    lineType: "高阶华为云专线中继",
    overallScore: 9.4,
    scoreBreakdown: { stability: 9.5, speed: 9.6, priceValue: 9.2, support: 9.3, unlocking: 9.4 },
    plans: [
      { name: "闪跃疾速月付", price: 24, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 220, effectiveTrafficGB: 220, bandwidthMbps: 800, deviceLimit: "5台设备", note: "专属优惠码 shanyue 立减" }
    ],
    protocols: ["Shadowsocks", "Trojan", "Hysteria2"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国"],
    deviceLimit: "5台",
    aiSupport: ["ChatGPT", "Claude", "Midjourney"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K"],
    advantages: ["优惠码 shanyue 享受立减福利", "华为云高等级专线通道，晚高峰抗堵能力极佳", "千兆独享管道，下载极速"],
    disadvantages: ["月付套餐流量档位较少"],
    suitableFor: ["大文件跨境下载", "晚高峰高强度网络用户"],
    categories: ["premium", "stable", "streaming"],
    sources: ["华为云骨干网络监控", "晚高峰iperf3测速"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "wuyou",
    name: "无忧链接",
    slug: "wuyou",
    tagline: "无忧上网长效守护 · 稳定保活与超低试错成本",
    description: "无忧链接以省心无忧、稳定保活为理念，后台提供一键订阅和图文说明，配备专属优惠码 wuyou666，是新手与备用容灾方案的优选。",
    affiliateUrl: "https://wep01.worryfreeaff.com/#/?code=56A0RTpU",
    couponCode: "wuyou666",
    startingPrice: 16,
    currency: "CNY",
    lineType: "高可用BGP公网优化中转",
    overallScore: 9.1,
    scoreBreakdown: { stability: 9.0, speed: 9.1, priceValue: 9.6, support: 9.1, unlocking: 8.9 },
    plans: [
      { name: "无忧轻量月付", price: 16, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 150, effectiveTrafficGB: 150, bandwidthMbps: 350, deviceLimit: "3台设备", note: "专属优惠码 wuyou666" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 1080P/4K", "Netflix"],
    advantages: ["专属优惠码 wuyou666 极其实惠", "控制台清爽易用，配置无难度", "适合作为双机场灾备方案常备"],
    disadvantages: ["晚高峰极限大流量下载略有QoS影响"],
    suitableFor: ["新手小白入门", "主力专线备用容灾"],
    categories: ["budget", "beginner"],
    sources: ["官方控制台公开资费"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "kuajiecloud",
    name: "跨界云",
    slug: "kuajiecloud",
    tagline: "跨境商务专属通道 · 跨洋企业级中继互联",
    description: "跨界云专注于跨境电商、海外社媒矩阵和外贸团队通信，提供多地区纯净IP和高速多线中转支持。",
    affiliateUrl: "https://vip02.kuajieaff.com/#/?code=VfWeYwHM",
    startingPrice: 28,
    currency: "CNY",
    lineType: "企业级跨境中继专线",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.5, speed: 9.4, priceValue: 9.0, support: 9.3, unlocking: 9.5 },
    plans: [
      { name: "跨界商用月付", price: 28, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 250, effectiveTrafficGB: 250, bandwidthMbps: 600, deviceLimit: "5台设备", note: "跨境电商外贸优选" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "美国", "日本", "英国", "德国", "新加坡"],
    deviceLimit: "5台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Perplexity"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium"],
    advantages: ["纯净欧美节点丰富，适合跨境电商店铺运营", "网络SLA连通率高达99.2%"],
    disadvantages: ["起步价格略高于入门平价机场"],
    suitableFor: ["跨境电商运营团队", "外贸商务与国际邮件处理"],
    categories: ["stable", "ai", "premium"],
    sources: ["电商平台IP风控测试", "SLA连通率记录"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "stardream",
    name: "星岛梦 StarDream",
    slug: "stardream",
    tagline: "星辰浩瀚如梦随行 · 全球流媒体与AI梦幻体验",
    description: "星岛梦StarDream采用高品质骨干光缆互联，配备专属优惠券 nmw888，致力于为海外影视影迷和高阶用户打造如梦如幻的极速网络。",
    affiliateUrl: "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim",
    couponCode: "nmw888",
    startingPrice: 22,
    currency: "CNY",
    lineType: "全专线中转混合矩阵",
    overallScore: 9.4,
    scoreBreakdown: { stability: 9.5, speed: 9.5, priceValue: 9.3, support: 9.3, unlocking: 9.7 },
    plans: [
      { name: "星岛探索月付", price: 22, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 600, deviceLimit: "4台设备", note: "优惠码 nmw888 享专属折扣" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "韩国"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K", "HBO Max", "Bilibili港澳台"],
    advantages: ["专属优惠码 nmw888 享专属立减", "全节点解锁主流4K流媒体与ChatGPT", "晚高峰连通性高，丢包率低"],
    disadvantages: ["并发设备数限制在4台"],
    suitableFor: ["海外流媒体追剧影迷", "AI交互开发者"],
    categories: ["streaming", "ai", "stable"],
    sources: ["官方控制台资费表", "4K流媒体码率实测"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "lightspeed",
    name: "光速云 LightSpeed",
    slug: "lightspeed",
    tagline: "光速直达平价之选 · 极低门槛与高性价比",
    description: "光速云LightSpeed以高性价比与平民定价广受好评，支持专属优惠码 jichangcha09，是新手尝鲜与双机场容灾备用的高性价比之选。",
    affiliateUrl: "https://mdlky.gsyaff.com/#/?code=6tRWbtgK",
    couponCode: "jichangcha09",
    startingPrice: 15,
    currency: "CNY",
    lineType: "隧道直连 + 优质BGP中转",
    overallScore: 9.1,
    scoreBreakdown: { stability: 8.9, speed: 9.1, priceValue: 9.7, support: 9.0, unlocking: 8.9 },
    plans: [
      { name: "光速入门月付", price: 15, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 160, effectiveTrafficGB: 160, bandwidthMbps: 350, deviceLimit: "3台设备", note: "优惠码 jichangcha09 折扣" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["专属优惠码 jichangcha09 享立减", "每GB流量单价极低", "新手易用一键导入"],
    disadvantages: ["晚高峰大下载偶有轻微波动"],
    suitableFor: ["学生与预算有限用户", "备用节点常备"],
    categories: ["budget", "beginner", "streaming"],
    sources: ["官方公开资费表"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "v2yun",
    name: "唯兔云（V2云）",
    slug: "v2yun",
    tagline: "敏捷如兔极速穿行 · 稳定高速内网专线",
    description: "唯兔云（V2云）采用多线内网专线互联，配备专属优惠码 rabbit，节点稳定延迟低，支持全平台主流客户端一键订阅。",
    affiliateUrl: "https://fast.v2yunvipaff.com/#/?code=xYEe8gyb",
    couponCode: "rabbit",
    startingPrice: 20,
    currency: "CNY",
    lineType: "高速内网中转专线",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.4, speed: 9.3, priceValue: 9.3, support: 9.2, unlocking: 9.3 },
    plans: [
      { name: "唯兔畅游月付", price: 20, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 500, deviceLimit: "4台设备", note: "优惠码 rabbit 享专属优惠" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT", "Claude", "Gemini"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K"],
    advantages: ["专属优惠码 rabbit 专属折扣", "节点延迟低，晚高峰抗拥堵表现优良", "支持多种主流加密协议"],
    disadvantages: ["套餐未设超大TB级方案"],
    suitableFor: ["日常网络冲浪与办公", "4K流媒体追剧"],
    categories: ["stable", "streaming", "budget"],
    sources: ["官方控制台公开资费"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "u1s1",
    name: "U1S1（有一说一）",
    slug: "u1s1",
    tagline: "有一说一真实客观 · 不虚标流量的良心机场",
    description: "U1S1（有一说一）主打真实不虚标、倍率透明公开，配备专属优惠码 U1S1，受到广大口碑用户推崇。",
    affiliateUrl: "https://pkdj7.vipaff.cc/#/?code=NMjmHbvu",
    couponCode: "U1S1",
    startingPrice: 19,
    currency: "CNY",
    lineType: "全透明标准倍率中转",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.2, speed: 9.3, priceValue: 9.6, support: 9.4, unlocking: 9.2 },
    plans: [
      { name: "良心实诚月付", price: 19, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 500, deviceLimit: "4台设备", note: "专属优惠码 U1S1 享立减" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K"],
    advantages: ["专属优惠码 U1S1 实惠立减", "全节点1.0倍率无暗扣虚标", "客服态度真诚，工单解决率高"],
    disadvantages: ["不提供按年超长买赠套路"],
    suitableFor: ["注重诚信与真实流量的用户", "省心理性消费者"],
    categories: ["beginner", "budget", "stable"],
    sources: ["节点倍率核实记录"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "jiliancloud",
    name: "极连云",
    slug: "jiliancloud",
    tagline: "极速互联无缝跨洋 · 多线优质BGP入口",
    description: "极连云部署了国内多线BGP入口智能调度，为用户提供低延迟、高并发的全球节点中继体验。",
    affiliateUrl: "https://kdjhao.jlyvipaff.com/#/?code=poyoU7mq",
    startingPrice: 18,
    currency: "CNY",
    lineType: "多线智能BGP中继",
    overallScore: 9.1,
    scoreBreakdown: { stability: 9.1, speed: 9.2, priceValue: 9.3, support: 9.0, unlocking: 9.0 },
    plans: [
      { name: "极连基础月付", price: 18, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 160, effectiveTrafficGB: 160, bandwidthMbps: 400, deviceLimit: "3台设备", note: "优质BGP入口智能分流" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["BGP多线入口，三大运营商自动择优", "月付价格亲民实惠"],
    disadvantages: ["部分冷门节点偶尔需刷新重试"],
    suitableFor: ["日常浏览与大流量刷视频"],
    categories: ["budget", "streaming"],
    sources: ["官方控制台公开定价"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "quanqiuyun",
    name: "全球云",
    slug: "quanqiuyun",
    tagline: "环球专网畅通无阻 · 覆盖全球主流国家与地区",
    description: "全球云具备广泛的全球节点覆盖，配备专属优惠码 tt88，支持多地区流媒体与AI对话服务原生解锁。",
    affiliateUrl: "https://sswdh.gcvipaff.com/#/?code=NE1AcNIX",
    couponCode: "tt88",
    startingPrice: 20,
    currency: "CNY",
    lineType: "全球多区域骨干中继",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.3, speed: 9.3, priceValue: 9.4, support: 9.2, unlocking: 9.5 },
    plans: [
      { name: "环球畅行月付", price: 20, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 500, deviceLimit: "4台设备", note: "专属优惠码 tt88 享折扣" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国", "土耳其", "阿根廷"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K", "Spotify"],
    advantages: ["专属优惠码 tt88 折扣可用", "全球冷门与低价区节点丰富（含土区/阿区）", "支持主流4K流媒体解锁"],
    disadvantages: ["冷门节点带宽略低于亚太主力专线"],
    suitableFor: ["跨区订阅用户", "多地区业务需求者"],
    categories: ["streaming", "ai", "budget"],
    sources: ["全球各节点连通性监测"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "guangnianti",
    name: "光年梯",
    slug: "guangnianti",
    tagline: "跨越光年疾速互联 · 极简轻量高速中继",
    description: "光年梯以极简配置和高速专网中继见长，帮助用户快速搭建稳定的跨境网络通道。",
    affiliateUrl: "https://ggmq.gntaff.com/#/?code=RAJFvngV",
    startingPrice: 17,
    currency: "CNY",
    lineType: "高速专网中继链路",
    overallScore: 9.0,
    scoreBreakdown: { stability: 9.0, speed: 9.2, priceValue: 9.4, support: 8.8, unlocking: 8.9 },
    plans: [
      { name: "光年尝鲜月付", price: 17, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 150, effectiveTrafficGB: 150, bandwidthMbps: 350, deviceLimit: "3台设备", note: "轻快高性价比之选" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["价格亲民，月付试错门槛极低", "界面直观，配置方便"],
    disadvantages: ["设备并发限制为3台"],
    suitableFor: ["轻度浏览与查资料", "备用节点方案"],
    categories: ["budget", "beginner"],
    sources: ["官方公开资费表"],
    lastVerified: "2026-03-26",
    testStatus: "tested",
  },
  {
    id: "sogoyun",
    name: "Sogo云",
    slug: "sogoyun",
    tagline: "敏捷流转稳定在线 · 亚太与欧美骨干优化",
    description: "Sogo云优化了中港、中日等多条核心海缆通道，为用户提供低延迟的网页浏览和高清视频流播放服务。",
    affiliateUrl: "https://wzjc.sogoyunaff.cc/#/?code=2x2EywO9",
    startingPrice: 19,
    currency: "CNY",
    lineType: "亚太与欧美骨干优化",
    overallScore: 9.1,
    scoreBreakdown: { stability: 9.1, speed: 9.2, priceValue: 9.3, support: 9.0, unlocking: 9.0 },
    plans: [
      { name: "Sogo基础月付", price: 19, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 400, deviceLimit: "3台设备", note: "多节点稳定覆盖" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["Netflix", "YouTube 4K"],
    advantages: ["海缆直连优化，延迟较低", "单价合理无隐形扣费"],
    disadvantages: ["晚高峰偶受公网QoS影响"],
    suitableFor: ["日常网络使用", "YouTube 4K追剧"],
    categories: ["beginner", "budget"],
    sources: ["官方资费公开表"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "yuzhoucloud",
    name: "宇宙云 YuZhou",
    slug: "yuzhoucloud",
    tagline: "浩瀚宇宙畅通无界 · 超大带宽专线与专属立减",
    description: "宇宙云YuZhou采用高规格跨境专线中继，配备专属优惠码 YUZHOU553，提供海量月度流量与超清4K秒开体验。",
    affiliateUrl: "https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa",
    couponCode: "YUZHOU553",
    startingPrice: 20,
    currency: "CNY",
    lineType: "高规格专线中继矩阵",
    overallScore: 9.4,
    scoreBreakdown: { stability: 9.4, speed: 9.5, priceValue: 9.4, support: 9.3, unlocking: 9.5 },
    plans: [
      { name: "宇宙畅行月付", price: 20, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 600, deviceLimit: "5台设备", note: "优惠码 YUZHOU553 专属折扣" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "5台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K", "HBO Max"],
    advantages: ["专属优惠码 YUZHOU553 享立减折扣", "专线带宽储备充足，晚高峰极度稳定", "支持主流4K流媒体与ChatGPT解锁"],
    disadvantages: ["月付套餐较热销需注意余量"],
    suitableFor: ["重度视频用户", "AI对话与科研学术用户"],
    categories: ["streaming", "ai", "stable"],
    sources: ["官方控制台资费", "晚高峰测速"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "ermaoyun",
    name: "二猫云 2mao",
    slug: "ermaoyun",
    tagline: "萌系猫咪疾速专线 · 亲民平价大流量套餐",
    description: "二猫云以平易近人的定价和充沛的月度流量受到喜爱，适合学生党、多设备日常使用与大流量下载场景。",
    affiliateUrl: "https://waaa.2maoyunaff.cc/#/?code=uHeyKG44",
    startingPrice: 16,
    currency: "CNY",
    lineType: "高性价比BGP中转",
    overallScore: 9.0,
    scoreBreakdown: { stability: 8.9, speed: 9.1, priceValue: 9.6, support: 8.9, unlocking: 8.8 },
    plans: [
      { name: "二猫轻享月付", price: 16, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 350, deviceLimit: "3台设备", note: "平价亲民大流量" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["价格低廉，流量充沛", "新手配置教程详尽直观"],
    disadvantages: ["特大晚高峰偶有轻微波动"],
    suitableFor: ["学生党日常使用", "大流量视频观看"],
    categories: ["budget", "beginner"],
    sources: ["官方公开资费"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "yifanyun",
    name: "一翻云 1fly",
    slug: "yifanyun",
    tagline: "一翻即达极速无界 · 敏捷响应智能分流",
    description: "一翻云1fly采用高敏捷智能路由分流，国内国外流量无缝切换，为用户提供轻松愉快的上网体验。",
    affiliateUrl: "https://wzjc.1flyunaff.cc/#/?code=F7eaT191",
    startingPrice: 17,
    currency: "CNY",
    lineType: "智能BGP多线中继",
    overallScore: 9.0,
    scoreBreakdown: { stability: 9.0, speed: 9.1, priceValue: 9.4, support: 8.8, unlocking: 8.9 },
    plans: [
      { name: "一翻基础月付", price: 17, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 150, effectiveTrafficGB: 150, bandwidthMbps: 350, deviceLimit: "3台设备", note: "高可用智能分流" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["月付17元入门，试错成本低", "规则分流配置完善"],
    disadvantages: ["并发设备数较严格"],
    suitableFor: ["轻度浏览与查阅文献", "备用节点方案"],
    categories: ["budget", "beginner"],
    sources: ["官方公开资费表"],
    lastVerified: "2026-03-26",
    testStatus: "tested",
  },
  {
    id: "edgenova",
    name: "边缘节点 EdgeNova",
    slug: "edgenova",
    tagline: "边缘计算加速专网 · 极低延迟与边缘智能分发",
    description: "边缘节点EdgeNova采用边缘计算节点协同架构，就近接入用户流量并通过内部优化专网跨洋传输，降低延迟与抖动。",
    affiliateUrl: "https://work.edgenovaaff.cc/#/?code=z81zCfw1",
    startingPrice: 26,
    currency: "CNY",
    lineType: "边缘计算专线互联",
    overallScore: 9.4,
    scoreBreakdown: { stability: 9.6, speed: 9.5, priceValue: 9.1, support: 9.3, unlocking: 9.4 },
    plans: [
      { name: "边缘专业月付", price: 26, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 700, deviceLimit: "5台设备", note: "边缘加速超低延迟" }
    ],
    protocols: ["Shadowsocks", "Trojan", "Hysteria2"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "德国"],
    deviceLimit: "5台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K"],
    advantages: ["边缘智能就近接入，端到端延迟显著降低", "支持Hysteria2协议在弱网下稳定运行", "晚高峰丢包率极低"],
    disadvantages: ["起步价格略高于纯平价机场"],
    suitableFor: ["对网络抖动敏感的在线会议与学术科研", "高画质4K串流"],
    categories: ["stable", "premium", "ai"],
    sources: ["边缘网络延迟测试报告"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
  {
    id: "kexincloud",
    name: "可信云",
    slug: "kexincloud",
    tagline: "安全可靠值得信赖 · 高SLA保障企业级中继",
    description: "可信云以安全合规、数据高保密与高SLA可用率为核心优势，受到众多严肃办公与外贸用户的青睐。",
    affiliateUrl: "https://work.kosingaff.com/#/?code=BNsA58Es",
    startingPrice: 25,
    currency: "CNY",
    lineType: "高SLA企业专用中继",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.6, speed: 9.3, priceValue: 9.1, support: 9.4, unlocking: 9.2 },
    plans: [
      { name: "可信主力月付", price: 25, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 500, deviceLimit: "5台设备", note: "高SLA可靠连通保障" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "5台",
    aiSupport: ["ChatGPT", "Claude", "Gemini"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K"],
    advantages: ["SLA可用率高达99.5%，稳定性极其出众", "工单售后团队响应速度快，服务规范"],
    disadvantages: ["价格定位中端，没有个位数超低价套餐"],
    suitableFor: ["跨境电商、外企商务与科研严肃办公人群"],
    categories: ["stable", "premium"],
    sources: ["SLA连通率监测记录"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "sujie",
    name: "速界 SuJie",
    slug: "sujie",
    tagline: "极速无界穿梭全球 · 高吞吐带宽与大流量方案",
    description: "速界SuJie专注于大带宽和高速数据吞吐，节点出口储备充沛，适合下载大文件与多终端家庭共享。",
    affiliateUrl: "https://work.speedworldaff.cc/#/?code=wSjLCpIf",
    startingPrice: 19,
    currency: "CNY",
    lineType: "大带宽BGP中继集群",
    overallScore: 9.2,
    scoreBreakdown: { stability: 9.1, speed: 9.4, priceValue: 9.5, support: 9.0, unlocking: 9.1 },
    plans: [
      { name: "速界畅游月付", price: 19, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 200, effectiveTrafficGB: 200, bandwidthMbps: 600, deviceLimit: "4台设备", note: "大带宽大流量高性价比" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K"],
    advantages: ["单GB流量单价实惠，大流量不心疼", "多线BGP入口自动负载均衡"],
    disadvantages: ["晚高峰个别节点偶有轻微延迟浮动"],
    suitableFor: ["大文件下载与影视多媒体爱好者"],
    categories: ["budget", "streaming"],
    sources: ["官方控制台公开资费"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "kuaili",
    name: "快狸 KuaiLi",
    slug: "kuaili",
    tagline: "敏捷灵巧神速互联 · 极简配置新手无忧",
    description: "快狸KuaiLi以轻便敏捷著称，后台界面对小白极度友好，支持一键快捷导入主流客户端。",
    affiliateUrl: "https://work.kuailicloud.cc/#/?code=gVGJa0Mp",
    startingPrice: 17,
    currency: "CNY",
    lineType: "高速轻量BGP中继",
    overallScore: 9.0,
    scoreBreakdown: { stability: 9.0, speed: 9.1, priceValue: 9.4, support: 8.9, unlocking: 8.9 },
    plans: [
      { name: "快狸尝鲜月付", price: 17, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 160, effectiveTrafficGB: 160, bandwidthMbps: 350, deviceLimit: "3台设备", note: "小白上手零难度" }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "3台",
    aiSupport: ["ChatGPT", "Claude"],
    streamingSupport: ["YouTube 4K", "Netflix"],
    advantages: ["月付17元实惠，上手极快", "控制台简洁清晰无繁琐设置"],
    disadvantages: ["并发设备上限为3台"],
    suitableFor: ["新手入门与日常备用"],
    categories: ["beginner", "budget"],
    sources: ["官方公开资费表"],
    lastVerified: "2026-03-26",
    testStatus: "tested",
  },
  {
    id: "wavenet",
    name: "浪网 WaveNet",
    slug: "wavenet",
    tagline: "乘风破浪畅行全球 · 专线级网络品质保障",
    description: "浪网WaveNet采用高品质跨境专线隧道传输，针对晚高峰骨干网拥塞进行专项优化，全天候平稳运行。",
    affiliateUrl: "https://varnexa.wavenetaff.com/#/?code=oU77JXen",
    startingPrice: 22,
    currency: "CNY",
    lineType: "专线级网络隧道",
    overallScore: 9.3,
    scoreBreakdown: { stability: 9.4, speed: 9.3, priceValue: 9.2, support: 9.2, unlocking: 9.3 },
    plans: [
      { name: "浪网专享月付", price: 22, currency: "CNY", period: "month", periodLabel: "月付", trafficGB: 180, effectiveTrafficGB: 180, bandwidthMbps: 500, deviceLimit: "4台设备", note: "专线网络低丢包保障" }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国"],
    deviceLimit: "4台",
    aiSupport: ["ChatGPT Plus", "Claude", "Midjourney"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K"],
    advantages: ["专线隧道抗封锁能力强，晚高峰网络平稳", "节点涵盖亚太主流核心区域"],
    disadvantages: ["没有超大TB级海量下载套餐"],
    suitableFor: ["日常稳定办公与海外音视频娱乐"],
    categories: ["stable", "streaming", "ai"],
    sources: ["官方控制台公开资费", "晚高峰丢包监测"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
];

export function getAirportsByCategory(category: "budget" | "premium" | "beginner" | "stable" | "ai" | "streaming"): Airport[] {
  return airports.filter(a => a.categories.includes(category));
}

export function getAirportBySlug(slug: string): Airport | undefined {
  return airports.find(a => a.slug === slug);
}

export function calculatePerGBCost(airport: Airport): number {
  if (!airport.plans || airport.plans.length === 0) return 0;
  const basePlan = airport.plans[0];
  if (!basePlan.effectiveTrafficGB || basePlan.effectiveTrafficGB <= 0) return 0;
  return Number((basePlan.price / basePlan.effectiveTrafficGB).toFixed(3));
}

export function getRankings(type: "overall" | "value" | "budget" | "stable"): { airport: Airport; rank: number; score: number; highlight: string }[] {
  let sorted: Airport[] = [...airports];

  if (type === "overall") {
    sorted.sort((a, b) => b.overallScore - a.overallScore);
    return sorted.map((airport, index) => ({
      airport,
      rank: index + 1,
      score: airport.overallScore,
      highlight: `综合评分 ${airport.overallScore} 分 · ${airport.lineType}${airport.couponCode ? ` · 优惠码: ${airport.couponCode}` : ''}`,
    }));
  }

  if (type === "value") {
    sorted.sort((a, b) => calculatePerGBCost(a) - calculatePerGBCost(b));
    return sorted.map((airport, index) => {
      const cost = calculatePerGBCost(airport);
      return {
        airport,
        rank: index + 1,
        score: airport.scoreBreakdown.priceValue,
        highlight: `每GB单价仅约 ¥${cost} · 性价比得分 ${airport.scoreBreakdown.priceValue}${airport.couponCode ? ` (券: ${airport.couponCode})` : ''}`,
      };
    });
  }

  if (type === "budget") {
    sorted.sort((a, b) => (a.startingPrice || 999) - (b.startingPrice || 999));
    return sorted.map((airport, index) => ({
      airport,
      rank: index + 1,
      score: airport.startingPrice || 0,
      highlight: `起步月费 ¥${airport.startingPrice || 0}/月 · 低门槛试错${airport.couponCode ? ` (优惠码: ${airport.couponCode})` : ''}`,
    }));
  }

  if (type === "stable") {
    sorted.sort((a, b) => b.scoreBreakdown.stability - a.scoreBreakdown.stability);
    return sorted.map((airport, index) => ({
      airport,
      rank: index + 1,
      score: airport.scoreBreakdown.stability,
      highlight: `晚高峰稳定性评分 ${airport.scoreBreakdown.stability} · ${airport.lineType}`,
    }));
  }

  return [];
}
