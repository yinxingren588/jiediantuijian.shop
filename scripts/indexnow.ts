/**
 * IndexNow API Submission Script for Bing SEO
 * Domain: jiediantuijian.shop
 * Key: d7a5e8c1b92049e7b28d6139f40e79ac
 */

import fs from 'node:fs';
import path from 'node:path';
import { airports } from '../src/data/airports';

const HOST = 'jiediantuijian.shop';
const KEY = 'd7a5e8c1b92049e7b28d6139f40e79ac';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const STATE_FILE = path.resolve('.indexnow-state.json');

// Core Priority Static URLs
const STATIC_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/recommend/stable/`,
  `https://${HOST}/recommend/budget/`,
  `https://${HOST}/recommend/premium/`,
  `https://${HOST}/recommend/ai/`,
  `https://${HOST}/recommend/streaming/`,
  `https://${HOST}/recommend/beginner/`,
  `https://${HOST}/ranking/overall/`,
  `https://${HOST}/ranking/value/`,
  `https://${HOST}/ranking/stable/`,
  `https://${HOST}/ranking/budget/`,
  `https://${HOST}/compare/`,
  `https://${HOST}/guides/`,
  `https://${HOST}/guides/windows/`,
  `https://${HOST}/guides/android/`,
  `https://${HOST}/guides/ios/`,
  `https://${HOST}/guides/macos/`,
  `https://${HOST}/blog/`,
  `https://${HOST}/blog/how-to-choose-reliable-airport/`,
  `https://${HOST}/blog/prevent-airport-runaway-risks/`,
  `https://${HOST}/blog/latency-vs-speed-bandwidth/`,
  `https://${HOST}/blog/solve-chatgpt-access-denied/`,
  `https://${HOST}/blog/evening-peak-slowdown-solutions/`,
  `https://${HOST}/glossary/`,
  `https://${HOST}/glossary/what-is-airport-node/`,
  `https://${HOST}/glossary/iplc-vs-iepl/`,
  `https://${HOST}/glossary/protocols-explained/`,
  `https://${HOST}/glossary/node-multiplier/`,
  `https://${HOST}/glossary/routing-and-tun-mode/`,
  `https://${HOST}/about/`,
  `https://${HOST}/editorial-policy/`,
  `https://${HOST}/privacy-policy/`,
  `https://${HOST}/disclaimer/`,
  `https://${HOST}/contact/`
];

const AIRPORT_URLS = airports.flatMap(a => [
  `https://${HOST}/airport/${a.slug}/`,
  `https://${HOST}/review/${a.slug}/`,
]);

const CORE_URLS = [...STATIC_URLS, ...AIRPORT_URLS];

interface StateData {
  submitted: Record<string, string>; // url -> lastSubmittedISO
  lastRun: string;
}

function loadState(): StateData {
  if (fs.existsSync(STATE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    } catch {
      // ignore
    }
  }
  return { submitted: {}, lastRun: '' };
}

function saveState(state: StateData) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

async function postToIndexNow(urlList: string[], retries = 3): Promise<boolean> {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  console.log(`\n[IndexNow] 正在向 ${ENDPOINT} 提交 ${urlList.length} 个 URL...`);
  urlList.slice(0, 10).forEach(u => console.log(` - ${u}`));
  if (urlList.length > 10) {
    console.log(` ... 以及其余 ${urlList.length - 10} 个 URL`);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'NodeRecommendation-IndexNow/1.0',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[IndexNow] HTTP 状态码: ${response.status} ${response.statusText}`);

      if (response.status === 200 || response.status === 202) {
        console.log(`[IndexNow] ✓ 提交成功 (状态码 ${response.status})！`);
        console.log(`[IndexNow] 注意：IndexNow 接收成功代表已通知搜索引擎蜘蛛队列，实际抓取和收录由 Bing 算法自主决定。`);
        return true;
      }

      if (response.status === 400) {
        console.error(`[IndexNow] ✗ 格式无效 (400 Bad Request)。请检查 URL 或参数格式。`);
        return false;
      }
      if (response.status === 403) {
        console.error(`[IndexNow] ✗ 验证失败 (403 Forbidden)。Key 与 KeyLocation 校验未通过。`);
        return false;
      }
      if (response.status === 422) {
        console.error(`[IndexNow] ✗ URL 不属于声明的 host (422 Unprocessable Entity)。`);
        return false;
      }
      if (response.status === 429) {
        console.warn(`[IndexNow] ⚠ 触发频控 (429 Too Many Requests)，等待后重试...`);
      }
    } catch (err: any) {
      console.warn(`[IndexNow] 网络异常 (尝试 ${attempt}/${retries}): ${err.message}`);
    }

    if (attempt < retries) {
      const delayMs = attempt * 2000;
      console.log(`[IndexNow] 等待 ${delayMs}ms 后重试...`);
      await new Promise(r => setTimeout(r, delayMs));
    }
  }

  return false;
}

async function main() {
  const args = process.argv.slice(2);
  const state = loadState();
  const nowISO = new Date().toISOString();

  let targetUrls: string[] = [];

  if (args.length > 0 && !args.includes('--all') && !args.includes('--batch')) {
    targetUrls = args.filter(a => a.startsWith('http'));
  } else if (args.includes('--all')) {
    console.log('[IndexNow] 模式：全量提交 (--all)');
    targetUrls = CORE_URLS;
  } else {
    console.log('[IndexNow] 模式：增量更新 (默认智能模式，防无差别泛滥提交)');
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
    const nowTime = Date.now();

    targetUrls = CORE_URLS.filter(url => {
      const lastSub = state.submitted[url];
      if (!lastSub) return true;
      return (nowTime - new Date(lastSub).getTime()) > SEVEN_DAYS_MS;
    });

    if (targetUrls.length === 0) {
      console.log('[IndexNow] 所有核心页面已在近期成功提交，无需重复推送。若要强制推送请使用 --all 参数。');
      return;
    }
  }

  const success = await postToIndexNow(targetUrls);

  if (success) {
    targetUrls.forEach(url => {
      state.submitted[url] = nowISO;
    });
    state.lastRun = nowISO;
    saveState(state);
    console.log(`[IndexNow] 状态已记录至 ${STATE_FILE}`);
  } else {
    console.warn(`[IndexNow] 本次提交未能成功确认，状态未更新。`);
  }
}

main().catch(err => {
  console.error('[IndexNow] 运行异常:', err);
  process.exit(1);
});
