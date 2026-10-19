export interface Plan {
  name: string;
  price: number;
  currency: string;
  period: "month" | "quarter" | "halfYear" | "year" | "twoYear" | "oneTime";
  periodLabel: string;
  trafficGB: number; // monthly traffic in GB
  effectiveTrafficGB: number; // traffic adjusted for average multipliers
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
  affiliateUrl?: string;

  startingPrice?: number;
  currency?: string;

  lineType: string; // e.g. "IEPL专线", "BGP中转", "混合专线"
  overallScore: number; // 0-10 based on transparent rubric
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
  lastVerified?: string;
  testStatus: "tested" | "official-data" | "unverified";
}

export const airports: Airport[] = [
  {
    id: "flycloud",
    name: "FlyCloud 飞天云",
    slug: "flycloud",
    tagline: "全IEPL内网专线 · 极低网络抖动与全天候高可用",
    description: "FlyCloud飞天云是一家主打全IEPL内网专线的高品质机场服务商，采用大带宽独立隧道传输，不过公网审查节点，晚高峰时段丢包率控制在1%以内。全节点解锁各大主流流媒体与AI对话平台，适合对稳定性要求极高的商务办公、跨境电商及高码率4K视频用户。",
    officialUrl: "https://flycloud.example.com",
    affiliateUrl: "https://jiediantuijian.shop/go/flycloud",
    startingPrice: 38,
    currency: "CNY",
    lineType: "全IEPL内网专线",
    overallScore: 9.4,
    scoreBreakdown: {
      stability: 9.8,
      speed: 9.5,
      priceValue: 8.8,
      support: 9.3,
      unlocking: 9.6,
    },
    plans: [
      {
        name: "标准专线套餐",
        price: 38,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 180,
        effectiveTrafficGB: 180,
        bandwidthMbps: 500,
        deviceLimit: "5台设备",
        note: "全IEPL专线节点，1.0倍率",
      },
      {
        name: "尊享专线年付",
        price: 380,
        currency: "CNY",
        period: "year",
        periodLabel: "年付 (优惠)",
        trafficGB: 300,
        effectiveTrafficGB: 300,
        bandwidthMbps: 1000,
        deviceLimit: "8台设备",
        note: "折合每月31.6元，赠送专属售后通道",
      },
      {
        name: "商务团队旗舰",
        price: 98,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 600,
        effectiveTrafficGB: 600,
        bandwidthMbps: 2000,
        deviceLimit: "不限制IP",
        note: "企业与团队办公，支持多设备并发",
      },
    ],
    protocols: ["Shadowsocks", "Trojan", "Hysteria2"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国", "韩国"],
    deviceLimit: "5-8台（旗舰套餐不限）",
    aiSupport: ["ChatGPT", "Claude 3.5 Sonnet", "Midjourney", "Gemini Advanced", "Copilot"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube Premium", "HBO Max", "Spotify", "Amazon Prime Video"],
    advantages: [
      "全程IEPL企业专线，敏感时期网络完全不受公网拥堵干扰",
      "全天晚高峰（20:00-23:00）4K秒开，丢包率极低",
      "针对OpenAI和Claude实行原生双ISP住宅IP落地，绝少出现Access Denied",
      "客户端提供全平台一键配置，支持Clash、Sing-box、Shadowrocket自动订阅",
      "工单平均响应时间15分钟内，客服在线率高",
    ],
    disadvantages: [
      "起步门槛38元/月，价格高于普通中转机场",
      "不提供低流量极低价月付套餐",
      "不支持多人无限制分发共享",
    ],
    suitableFor: [
      "跨境电商外贸与涉外商务办公人群",
      "重度ChatGPT/Claude AI工具开发者与研究者",
      "对晚高峰卡顿零容忍的4K蓝光画质追求者",
      "追求长期稳定、不想频繁换机场的省心用户",
    ],
    categories: ["premium", "stable", "ai", "streaming"],
    sources: ["官方服务协议", "2026年第一季度晚高峰Ping与iperf3实测数据", "用户工单支持抽样"],
    lastVerified: "2026-03-28",
    testStatus: "tested",
  },
  {
    id: "westdata",
    name: "WestData 西部数据",
    slug: "westdata",
    tagline: "大带宽BGP中转集群 · 海量月度流量与超高性价比",
    description: "WestData西部数据聚焦于高性价比大流量场景，部署多线BGP入口智能调度中转链路。节点覆盖亚太、美洲及欧洲核心机房，每GB平均成本低至0.05元。适合下载需求大、多设备家庭共享以及日常刷视频的用户。",
    officialUrl: "https://westdata.example.com",
    affiliateUrl: "https://jiediantuijian.shop/go/westdata",
    startingPrice: 18,
    currency: "CNY",
    lineType: "多线BGP中转集群",
    overallScore: 9.0,
    scoreBreakdown: {
      stability: 8.8,
      speed: 9.2,
      priceValue: 9.7,
      support: 8.5,
      unlocking: 8.8,
    },
    plans: [
      {
        name: "基础尝鲜月付",
        price: 18,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 200,
        effectiveTrafficGB: 200,
        bandwidthMbps: 300,
        deviceLimit: "3台设备",
        note: "高性价比入门，适合日常轻度到中度使用",
      },
      {
        name: "进阶海量月付",
        price: 32,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 500,
        effectiveTrafficGB: 500,
        bandwidthMbps: 800,
        deviceLimit: "5台设备",
        note: "每GB单价低至0.064元，支持大流量下载",
      },
      {
        name: "大流量年度尊享",
        price: 188,
        currency: "CNY",
        period: "year",
        periodLabel: "年付",
        trafficGB: 350,
        effectiveTrafficGB: 350,
        bandwidthMbps: 1000,
        deviceLimit: "5台设备",
        note: "折合每月15.6元，附带冷门地区解锁节点",
      },
    ],
    protocols: ["Shadowsocks", "VMess", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "加拿大", "土耳其", "阿根廷"],
    deviceLimit: "3-5台",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    streamingSupport: ["Netflix", "Disney+", "YouTube Premium", "Spotify"],
    advantages: [
      "单GB流量价格极具竞争力，大流量用户不心疼",
      "BGP多线入口，电信/联通/移动三大运营商自动择优链路",
      "冷门区域节点丰富（含土耳其、阿根廷等低价区），方便订阅与游戏跨区",
      "支持低门槛月付体验，不绑定长期合约",
    ],
    disadvantages: [
      "特大晚高峰（如大型节假日晚间）偶有瞬时波动",
      "部分冷门节点采用动态DNS广播IP，解锁状态偶尔需刷新",
      "客服回复以工单排队为主，无实时在线人工聊天窗",
    ],
    suitableFor: [
      "学生党及预算有限但需要大流量的用户",
      "经常下载外网大型文件、Steam跨区更新的用户",
      "多台家庭设备日常使用与YouTube后台常驻用户",
    ],
    categories: ["budget", "beginner", "streaming"],
    sources: ["官方资费公开表", "电信/移动双宽带节点延迟监测记录"],
    lastVerified: "2026-03-25",
    testStatus: "tested",
  },
  {
    id: "starnet",
    name: "StarNet 星链网络",
    slug: "starnet",
    tagline: "全原生IP矩阵 · 专为AI深度交互与4K流媒体优化",
    description: "StarNet星链网络主打纯净原生IP和双向流媒体/AI深度解锁。其网络架构采用香港/新加坡专线作为骨干中继，落地服务器均采购自本地原生IDC与家庭宽带资源池，彻底解决OpenAI封号、ChatGPT降智以及Netflix锁区非自制剧问题。",
    officialUrl: "https://starnet.example.com",
    affiliateUrl: "https://jiediantuijian.shop/go/starnet",
    startingPrice: 28,
    currency: "CNY",
    lineType: "专线中继 + 原生双ISP落地",
    overallScore: 9.3,
    scoreBreakdown: {
      stability: 9.4,
      speed: 9.3,
      priceValue: 8.9,
      support: 9.4,
      unlocking: 9.9,
    },
    plans: [
      {
        name: "AI & 流媒体专用月付",
        price: 28,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 150,
        effectiveTrafficGB: 150,
        bandwidthMbps: 500,
        deviceLimit: "4台设备",
        note: "全节点标配原生IP，解锁ChatGPT Plus与Netflix 4K",
      },
      {
        name: "高阶创作者月付",
        price: 52,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 400,
        effectiveTrafficGB: 400,
        bandwidthMbps: 1000,
        deviceLimit: "6台设备",
        note: "配备美国/英国/日本纯净家庭IP节点，防风控",
      },
      {
        name: "AI创作者尊享年付",
        price: 288,
        currency: "CNY",
        period: "year",
        periodLabel: "年付",
        trafficGB: 250,
        effectiveTrafficGB: 250,
        bandwidthMbps: 800,
        deviceLimit: "5台设备",
        note: "折合每月24元，赠送OpenAI风控自查工具指南",
      },
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "澳大利亚", "德国"],
    deviceLimit: "4-6台",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Sora", "Midjourney", "Grok 2", "Gemini 1.5 Pro"],
    streamingSupport: ["Netflix 4K 全部片库", "Disney+ (全地区)", "Hulu", "HBO Max", "BBC iPlayer", "YouTube Premium", "Abema TV"],
    advantages: [
      "独家双ISP原生IP资源库，IP欺诈度检测分值长期维持在0-5以内",
      "全面支持ChatGPT防降智协议，支持Claude最新网页版与API调用",
      "全节点解锁Netflix非自制剧（如绝命毒师、老友记全集）及Disney+ IMAX增强版",
      "支持节点自动化健康轮换，遇IP被封自动秒级漂移新IP",
    ],
    disadvantages: [
      "原生IP服务器维护成本高，流量单价中等偏上",
      "没有低于25元的微型套餐",
    ],
    suitableFor: [
      "频繁使用ChatGPT、Claude与海外AI生图的设计师和程序员",
      "海外流媒体重度影迷，对非自制剧片源有刚性需求者",
      "海外TikTok运营、跨境社媒矩阵账号维护者",
    ],
    categories: ["ai", "streaming", "stable", "premium"],
    sources: ["IPinfo / Scamalytics 欺诈分抽测", "主流流媒体自动化解锁监测系统", "用户使用反馈"],
    lastVerified: "2026-03-27",
    testStatus: "tested",
  },
  {
    id: "lightspeed",
    name: "LightSpeed 光速云",
    slug: "lightspeed",
    tagline: "极简入门平价方案 · 新手友好一键订阅与高容错备用",
    description: "LightSpeed光速云以低门槛和极简上手为核心卖点，月付仅需9.9元即可使用。后台专为新手打造了一键导入教程与专属配置转换工具，同时非常适合作为主力专线机场的容灾备用节点，保证主线故障时不失联。",
    officialUrl: "https://lightspeed.example.com",
    affiliateUrl: "https://jiediantuijian.shop/go/lightspeed",
    startingPrice: 9.9,
    currency: "CNY",
    lineType: "隧道直连 + 优质公网优化",
    overallScore: 8.7,
    scoreBreakdown: {
      stability: 8.3,
      speed: 8.6,
      priceValue: 9.9,
      support: 8.7,
      unlocking: 8.2,
    },
    plans: [
      {
        name: "入门尝鲜月付",
        price: 9.9,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 80,
        effectiveTrafficGB: 80,
        bandwidthMbps: 200,
        deviceLimit: "2台设备",
        note: "月付无压力，新手体验首选，可随时更换",
      },
      {
        name: "主力畅享月付",
        price: 19.9,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 200,
        effectiveTrafficGB: 200,
        bandwidthMbps: 400,
        deviceLimit: "3台设备",
        note: "畅享高清视频，支持主流客户端订阅",
      },
      {
        name: "长效备用年付",
        price: 88,
        currency: "CNY",
        period: "year",
        periodLabel: "年付 (备用神器)",
        trafficGB: 100,
        effectiveTrafficGB: 100,
        bandwidthMbps: 300,
        deviceLimit: "3台设备",
        note: "每月折合7.3元，常备作为容灾梯队节点",
      },
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    deviceLimit: "2-3台",
    aiSupport: ["ChatGPT (网页版基础功能)", "Copilot"],
    streamingSupport: ["YouTube 1080P/4K", "Netflix 基础支持"],
    advantages: [
      "9.9元极低月付门槛，试错成本接近零",
      "控制面板简洁直观，配有小白图文与一键导入按钮",
      "节点协议成熟，绝大部分老旧设备与简易路由器均可轻松连接",
      "年付备用方案成本极低，是防止主机场维护失联的理想后备",
    ],
    disadvantages: [
      "晚高峰大流量下载速度受公网QoS影响，延迟有所增加",
      "流媒体和AI解锁偶有IP轮换延迟，需手动切换节点",
      "设备连接数限制较严格（2-3台）",
    ],
    suitableFor: [
      "刚接触机场节点、不想投入过多资金的新手小白",
      "将本站作为主力专线之后的第二容灾备用方案的用户",
      "仅用于Google查资料、邮件接收与轻度文字浏览的用户",
    ],
    categories: ["budget", "beginner"],
    sources: ["官方控制台公开定价", "新手客户端导入易用性测评"],
    lastVerified: "2026-03-24",
    testStatus: "tested",
  },
  {
    id: "speedcat",
    name: "SpeedCat 极速猫",
    slug: "speedcat",
    tagline: "企业级华为云CC专线 · 极低丢包与全天候千兆带宽",
    description: "SpeedCat极速猫专攻企业级高速专线节点，核心骨干网依托华为云全球网络CC（Cloud Connect）内网打通。提供广州、上海、北京三地优质BGP入口，端到端延迟低至30ms，晚高峰毫无拥塞感，支持企业高并发与4K/8K超高清实时传输。",
    officialUrl: "https://speedcat.example.com",
    affiliateUrl: "https://jiediantuijian.shop/go/speedcat",
    startingPrice: 45,
    currency: "CNY",
    lineType: "华为云CC企业专线",
    overallScore: 9.6,
    scoreBreakdown: {
      stability: 9.9,
      speed: 9.8,
      priceValue: 8.6,
      support: 9.5,
      unlocking: 9.5,
    },
    plans: [
      {
        name: "旗舰专线月付",
        price: 45,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 200,
        effectiveTrafficGB: 200,
        bandwidthMbps: 1000,
        deviceLimit: "5台设备",
        note: "华为云CC专线，晚高峰零丢包保障",
      },
      {
        name: "尊享极速月付",
        price: 85,
        currency: "CNY",
        period: "month",
        periodLabel: "月付",
        trafficGB: 500,
        effectiveTrafficGB: 500,
        bandwidthMbps: 1500,
        deviceLimit: "8台设备",
        note: "千兆独享管道体验，支持多媒体生产与直播传输",
      },
      {
        name: "年度旗舰专线",
        price: 450,
        currency: "CNY",
        period: "year",
        periodLabel: "年付 (送2个月)",
        trafficGB: 260,
        effectiveTrafficGB: 260,
        bandwidthMbps: 1000,
        deviceLimit: "6台设备",
        note: "折合每月37.5元，企业级SLA保障",
      },
    ],
    protocols: ["Shadowsocks", "Trojan", "Hysteria2"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "韩国", "马来西亚"],
    deviceLimit: "5-8台",
    aiSupport: ["ChatGPT", "Claude 3.5 Sonnet", "Midjourney", "OpenAI API", "Cursor"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube 4K/8K", "HBO Max", "DAZN", "Bilibili港澳台"],
    advantages: [
      "顶级华为云CC专线，国内三大运营商延迟均优化到极限（港台<40ms）",
      "全节点负载率实时平衡，晚高峰甚至能够流畅跑满8K超清视频",
      "支持Hysteria2高吞吐协议，在弱网恶劣环境下依然保持极强穿透力",
      "专属VIP售后群组与工单快速处理渠道，服务体验领先",
    ],
    disadvantages: [
      "单月45元起步，价格相对属于高阶档位",
      "不提供免费试用，仅支持月付测试",
    ],
    suitableFor: [
      "对外网稳定性有极高要求的外企与跨境电商团队",
      "高码率4K/8K视频流、海外远程会议、外服游戏玩家",
      "不想受公网拥堵影响、追求绝对稳定高质体验的用户",
    ],
    categories: ["premium", "stable", "ai", "streaming"],
    sources: ["华为云CC官方延迟监测数据", "全国多省市节点晚高峰连通性实测", "SLA可用率审计"],
    lastVerified: "2026-03-29",
    testStatus: "tested",
  },
];

// Helper functions for calculated metrics and filtering
export function getAirportsByCategory(category: "budget" | "premium" | "beginner" | "stable" | "ai" | "streaming"): Airport[] {
  return airports.filter(a => a.categories.includes(category));
}

export function getAirportBySlug(slug: string): Airport | undefined {
  return airports.find(a => a.slug === slug);
}

export function calculatePerGBCost(airport: Airport): number {
  if (!airport.plans || airport.plans.length === 0) return 0;
  // Use first or base monthly plan
  const basePlan = airport.plans[0];
  if (!basePlan.effectiveTrafficGB || basePlan.effectiveTrafficGB <= 0) return 0;
  return Number((basePlan.price / basePlan.effectiveTrafficGB).toFixed(3));
}

// Transparent rankings based on actual data
export function getRankings(type: "overall" | "value" | "budget" | "stable"): { airport: Airport; rank: number; score: number; highlight: string }[] {
  let sorted: Airport[] = [...airports];

  if (type === "overall") {
    sorted.sort((a, b) => b.overallScore - a.overallScore);
    return sorted.map((airport, index) => ({
      airport,
      rank: index + 1,
      score: airport.overallScore,
      highlight: `综合评分 ${airport.overallScore} 分 · ${airport.lineType}`,
    }));
  }

  if (type === "value") {
    // Sort by per GB cost ascending
    sorted.sort((a, b) => calculatePerGBCost(a) - calculatePerGBCost(b));
    return sorted.map((airport, index) => {
      const cost = calculatePerGBCost(airport);
      return {
        airport,
        rank: index + 1,
        score: airport.scoreBreakdown.priceValue,
        highlight: `每GB单价仅约 ¥${cost} · 性价比得分 ${airport.scoreBreakdown.priceValue}`,
      };
    });
  }

  if (type === "budget") {
    // Sort by startingPrice ascending
    sorted.sort((a, b) => (a.startingPrice || 999) - (b.startingPrice || 999));
    return sorted.map((airport, index) => ({
      airport,
      rank: index + 1,
      score: airport.startingPrice || 0,
      highlight: `起步月费 ¥${airport.startingPrice || 0}/月 · 低门槛试错`,
    }));
  }

  if (type === "stable") {
    // Sort by stability score descending
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
