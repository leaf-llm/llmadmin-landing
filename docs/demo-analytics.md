# 演示环境打点（demo analytics）

用来回答三个问题：多少人进了沙盒、多少人真的生成了 Key、沙盒里实际发了多少请求。

链路：

```
llmadmin-ui (Render, DEMO_MODE)
  └─ 内存缓冲，每 10 分钟批量 POST
       └─ https://llmadmin.dev/api/demo/collect   (Cloudflare Pages Function)
            └─ 日聚合写入 Cloudflare KV
                 └─ GET /api/demo/stats?days=7 读取
```

## 1. Landing 侧配置

Cloudflare Pages → 项目 → **Settings → Functions → KV namespace bindings**：

| 变量名 | 选哪个 namespace |
| --- | --- |
| `DEMO_KV` | 建议新建一个专用 namespace；不建也行，会自动回退到 `DOWNLOAD_KV` |

再在 **Settings → Environment variables** 加一个共享密钥：

| 变量 | 说明 |
| --- | --- |
| `DEMO_COLLECT_TOKEN` | 随机串，网关上报与查询 stats 都要带 `Authorization: Bearer <token>`；不配置则接口完全开放（不建议） |

如果已经配了 `LOGFLARE_API_KEY` / `LOGFLARE_SOURCE_ID`，事件会额外镜像一份到 Logflare，可以直接用现有的看板。

## 2. Demo 服务（Render）侧配置

| 变量 | 值 |
| --- | --- |
| `DEMO_ANALYTICS_URL` | `https://llmadmin.dev/api/demo/collect` |
| `DEMO_ANALYTICS_TOKEN` | 与 landing 的 `DEMO_COLLECT_TOKEN` 相同 |
| `DEMO_ANALYTICS_FLUSH_MS` | 可选，默认 `600000`（10 分钟，下限 10 秒） |

不配置 `DEMO_ANALYTICS_URL` 时网关完全不上报，自托管部署保持本地闭环。

## 3. 上报的事件

| 事件 | 触发点 | props |
| --- | --- | --- |
| `session_created` | 访客首次打开 `/demo` | — |
| `session_closed` | 过期或 LRU 回收 | `reason`: `expired` / `lru_global` / `lru_ip` |
| `key_generated` | 生成或轮换 Key | `rotated` |
| `key_revoked` | 主动作废 Key | — |
| `config_reset` | 重置演示配置 | — |
| `request` | 每次 `/v1/*` 调用 | `path`, `status`, `ms` |

聚合结果按天存在 `demo:day:YYYY-MM-DD`，另有 `demo:totals` 存累计值：

```json
{
  "events": { "session_created": 42, "key_generated": 31, "config_reset": 3 },
  "requests": {
    "total": 210, "ok": 205, "client_error": 4, "server_error": 1,
    "ms_total": 53210, "ms_count": 210
  },
  "updatedAt": "2026-11-28T08:00:00.000Z"
}
```

## 4. 查询

```bash
curl -H "Authorization: Bearer $DEMO_COLLECT_TOKEN" \
  "https://llmadmin.dev/api/demo/stats?days=7"
```

返回 `totals` 和最近 7 天的数组（缺失的天为 `requests: null`）。

## 5. 成本

KV 免费额度是 1000 写/天。一次 flush 写 2 个 key（当天聚合 + 总计），10 分钟一次就是 **288 写/天**，留了余量给 `download-token` 等其他用途。如果调小 flush 间隔，注意不要超过这个预算。

## 隐私

只上报事件名、状态码、耗时这类聚合信息，不包含 prompt、响应内容、IP、Cookie 或 Key。Key 只在网关内保存 hash，事件里没有任何密钥材料。
