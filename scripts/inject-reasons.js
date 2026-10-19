import fs from 'fs';

const reasonsMap = {
  "breezenet": {
    coreReason: "线路与入门使用场景是主要关注点，提供极佳的入门体验。",
    recommendReason: "围绕专线线路和日常使用场景进行配置，¥8/月起提供高达200GB超大可用配额，非常适合希望快速了解机场基础配置的新手与流媒体用户。"
  },
  "feimaoyun": {
    coreReason: "完美实现了价格与基础大流量之间的极致平衡。",
    recommendReason: "年付折算仅需约 ¥7/月起即可享受150GB高额月度流量，双线中转与专线混合智能调度，极其适合关注流量单价比例的实用主义者。"
  },
  "muguang": {
    coreReason: "专线节点结合VLESS先进协议，带来平稳低抖动的出境体验。",
    recommendReason: "采用专线节点架构与VLESS协议，基础套餐提供120GB/月充沛流量，晚高峰网络表现优异，非常适合对连接平稳度有较高要求的用户。"
  },
  "wuyou": {
    coreReason: "纯正的IPLC专线是其最核心的特色与高可用抗拥堵保障。",
    recommendReason: "以纯正IPLC内网专线为核心骨干，数据完全规避公网审查，¥19/月起提供100GB基础配额，兼顾专线品质与亲民月付门槛。"
  },
  "lingmao": {
    coreReason: "150GB大基础流量与IPLC专线的强强联合。",
    recommendReason: "基础套餐即慷慨提供高达150GB的流量额度，同时采用极其稳定的IPLC物理链路作为主要特色，流媒体原生解锁表现亮眼。"
  },
  "flashleap": {
    coreReason: "纯正的IPLC纯专线骨干，保障电竞级超低延迟与零丢包网络体验。",
    recommendReason: "以IPLC纯专线作为核心卖点，拒绝线路混杂，提供150GB级别基础流量，适合对网络延迟与游戏外服联机极度敏感的进阶用户。"
  },
  "firefly": {
    coreReason: "极致的低门槛价格，轻松实现网络自由。",
    recommendReason: "年付折算后月均仅需约 ¥8/月起，支持VLESS先进安全协议，适合预算有限、流量需求适中的轻度浏览与查资料群体。"
  },
  "kuajiecloud": {
    coreReason: "全覆盖的专线网络，提供全天候全时段的稳定抗封锁保障。",
    recommendReason: "突出全专线线路架构，不使用廉价公网中转，基础套餐即提供120GB左右的数据配额，支持轻量低功耗Shadowsocks协议。"
  },
  "dalaocloud": {
    coreReason: "企业级骨干网抗封锁与抗DDoS高防专用隧道，全天候晚高峰零丢包保障。",
    recommendReason: "专为高净值用户、跨境电商团队及企业涉外办公打造，配备超大独享带宽与企业级SLA稳定保障，高并发零抖动。"
  },
  "sogoyun": {
    coreReason: "IEPL企业级专线带来极低的网络抖动与极高的全天候可用率。",
    recommendReason: "主打IEPL企业级专线方向，不仅线路硬件质量过硬，还同时提供高达150GB的较高基础流量额度与自研/通用双系统协议支持。"
  },
  "yuzhoucloud": {
    coreReason: "IPLC/IEPL双专线线路与入门级价格的完美结合。",
    recommendReason: "价格门槛仅需 ¥14.9/月起，同时囊括了IPLC与IEPL两大顶级专线链路方向，双线互备抗风险能力强，性价比极高。"
  },
  "ermaoyun": {
    coreReason: "最大优势在于套餐选择极其灵活，全球多地区节点覆盖面极广。",
    recommendReason: "提供广泛的多节点覆盖和多种套餐选择，聚合不同线路与地区，约 ¥15/月起步，非常适合需要频繁切换多地区IP的用户。"
  },
  "yifanyun": {
    coreReason: "专线节点加上150GB的基础大流量，彻底解决流量焦虑。",
    recommendReason: "基础套餐即可提供150GB的充裕流量，并采用优质的专线节点作为核心卖点，晚高峰高清看剧与办公综合表现出色。"
  },
  "edgenova": {
    coreReason: "年付超低折算成本搭配高质量IEPL专线直连与专用客户端。",
    recommendReason: "以约 ¥86/年起（月均折算仅约 ¥7.2/月）的极具诱惑力价格为亮点，结合IEPL专线直连和易用的专用客户端，适合长期持有的稳定用户。"
  },
  "kexincloud": {
    coreReason: "极低个位数价格与顶级IPLC纯专线线路的反差组合。",
    recommendReason: "基础起步价格突破性低至 ¥9/月，却大胆采用了顶级IPLC线路，极大地降低了普通用户体验纯正内网专线的门槛。"
  },
  "sujie": {
    coreReason: "官方专属客户端深度优化加持，带来极致的新手友好免折腾体验。",
    recommendReason: "提供一键连接的官方客户端和偏向新手使用的产品定位，无需复杂的订阅软件配置，极度适合刚开始接触科学上网的小白用户。"
  },
  "kuaili": {
    coreReason: "IEPL专线与轻量化年付折算结合，轻巧敏捷不占资源。",
    recommendReason: "采用高质量IEPL专线，配合低门槛年付折算价格（约 ¥10/月起）与自研客户端，轻巧而强大，是随身移动办公的理想伴侣。"
  },
  "feiv": {
    coreReason: "突破性的极低价格与罕见的不限时流量永久有效套餐。",
    recommendReason: "月付仅需 ¥4.9/月起，同时创新性地提供不限时套餐方向，流量不清零，是极度低预算人群与主力断连应急备用的首选福音。"
  },
  "laddercloud": {
    coreReason: "最高可达500GB的弹性海量流量选择，满足极度重度吞吐需求。",
    recommendReason: "套餐流量覆盖125GB到高达500GB的宽幅区间，搭配优化中转与专线方向，高带宽端口上限，能充分满足大文件下载与多设备分享。"
  },
  "wavenet": {
    coreReason: "150GB大流量搭配自研客户端优化线路与VLESS先进协议的卓越表现。",
    recommendReason: "基础套餐提供约150GB的大额流量，采用先进的VLESS协议以及配套自研客户端优化线路，抗干扰抗拥塞能力极佳。"
  },
  "lingdongcloud": {
    coreReason: "合理的100GB起步流量配置，拒绝资源浪费与虚高溢价。",
    recommendReason: "基础套餐价格与流量配置极为清晰均衡，以 ¥20/月提供100GB起步流量，采用Trojan安全协议，适合追求简单省心与流量均衡的用户。"
  },
  "yinxingren": {
    coreReason: "IEPL纯专线内网传输与144GB充沛流量的双重品质保障。",
    recommendReason: "采用IEPL纯专线保障极佳的网络质量，晚高峰零丢包，同时慷慨地提供约144GB的基础大流量，全节点解锁ChatGPT与流媒体。"
  },
  "stardream": {
    coreReason: "IPLC/IEPL双专线架构与100GB基础流量的高性价比结合。",
    recommendReason: "采用优质的IPLC/IEPL双线架构，基础价格仅需 ¥16/月即可享受100GB流量，专属优惠码nmw888叠加折上折，综合实力强劲。"
  },
  "lightspeed": {
    coreReason: "极致灵活的多变套餐选项与实用的公网隧道中转。",
    recommendReason: "套餐选择极多，以公网隧道中转线路为主要特点，提供148GB大额配额，非常适合需要根据自身多变需求挑选不同档位的用户。"
  },
  "v2yun": {
    coreReason: "14.9元超低价享受真实IPLC专线与100GB流量的绝杀组合。",
    recommendReason: "14.9元的超低起步价与100GB基础流量的组合，极其适合需要严格控制预算同时又必须使用真实IPLC专线线路的实用派用户。"
  },
  "u1s1": {
    coreReason: "BGP三网优化国内入口大幅提升了各家运营商的连接顺滑度。",
    recommendReason: "核心优势在于其国内入口采用了BGP三网优化，并结合IEPL专线出境，提供约120GB基础流量，显著解决移动宽带长城宽带访问外网卡顿痛点。"
  },
  "jiliancloud": {
    coreReason: "14.4元的亲民价格即可享用双重顶级专线与丰富协议体系。",
    recommendReason: "不仅采用了高昂成本的IPLC/IEPL双线架构，更将入门价格下放至不到15元（¥14.4/月起），提供100GB流量，诚意十足。"
  },
  "quanqiuyun": {
    coreReason: "深度优化的中转架构与经典套餐流量的完美组合。",
    recommendReason: "采用深度优化的中转线路，搭配约20元120GB的经典均衡套餐，双主流协议支持，稳定性与实用性平衡出色。"
  },
  "guangnianti": {
    coreReason: "12.6元的击穿底价、110GB的充裕流量与IEPL专线的绝杀组合。",
    recommendReason: "在保持提供高质量IEPL专线的同时，将价格下探至惊人的12.6元，并搭配110GB充沛流量，无可挑剔的性价比专线之选。"
  }
};

let content = fs.readFileSync('src/data/airports.ts', 'utf8');

// Ensure Airport interface has coreReason and recommendReason
if (!content.includes('coreReason?: string;')) {
  content = content.replace(
    'description: string;',
    'description: string;\n  coreReason: string;\n  recommendReason: string;'
  );
}

// Inject into each airport object
for (const [id, r] of Object.entries(reasonsMap)) {
  const pattern = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?description:\\s*["'][^"']+["'],)`);
  if (pattern.test(content)) {
    if (!content.includes(`id: "${id}"` + '\n    coreReason:')) {
      content = content.replace(pattern, `$1\n    coreReason: "${r.coreReason}",\n    recommendReason: "${r.recommendReason}",`);
    }
  }
}

fs.writeFileSync('src/data/airports.ts', content, 'utf8');
console.log('Successfully updated src/data/airports.ts with unique core reasons!');
