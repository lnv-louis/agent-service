# HTP Pharma Agent

AI assistant for HTP Pharma's company operations on Base.vn, deployed as a Zalo chat bot. Parents talk to it in Vietnamese via Zalo group chat; it reads and writes company data through a remote MCP server.

## Architecture

```
Zalo group chat
    │ (webhook)
    ▼
agent-service (Vercel, eve framework)
    │ (MCP client, shared-secret header)
    ▼
basevn-mcp (Cloudflare Worker)
    │ (extapi calls, Owner tokens)
    ▼
Base.vn (10 apps, 94 tools)
```

## Stack

| Component | What | Reference |
|---|---|---|
| Agent framework | eve 0.25 | https://eve.dev/docs |
| Chat platform | Zalo Bot Platform | https://bot.zaloplatforms.com/docs |
| Chat SDK | Vercel Chat SDK | https://chat-sdk.dev/docs/usage.md |
| Zalo adapter | chat-adapter-zalo (community) | https://chat-sdk.dev/adapters/community/zalo |
| State store | Upstash Redis | https://chat-sdk.dev/docs/state-adapters.md |
| Model | OpenAI gpt-5.6-luna | https://developers.openai.com/api/docs/models/gpt-5.6-luna |
| MCP server | Cloudflare Worker | https://modelcontextprotocol.io |
| Observability | Langfuse Cloud (JP) | https://langfuse.com/docs/integrations/vercel-ai-sdk |

## File structure

```
agent/
├── agent.ts              # Model config (gpt-4.1-mini, compaction, limits)
├── instructions.md       # Vietnamese system prompt
├── channels/
│   ├── zalo.ts           # Zalo webhook + session control (exit/reset)
│   └── eve.ts            # HTTP channel with basic auth (operator access)
├── connections/
│   └── basevn.ts         # MCP client — 94 Base.vn tools auto-discovered
├── hooks/
│   └── audit.ts          # Tool call + message logging
├── instrumentation.ts    # Telemetry (inputs/outputs disabled for PII)
├── lib/
│   └── identity.ts       # Zalo user → Base.vn username mapping
└── skills/
    └── basevn-usage/     # On-demand examples and formatting rules
```

## Session control

| Command | Action |
|---|---|
| `exit` / `thoat` | End current session, start fresh |
| `reset` / `lam moi` | Same as exit |
| Normal message | Resume existing session |

## Write tool confirmation

No HITL approval gate (Zalo doesn't support cards). Instead, the instructions prompt enforces a two-turn flow:
1. Agent asks "Xac nhan: ...? (Y/N)" and stops
2. User replies "Y" → agent calls the tool

## Env vars

| Var | Purpose |
|---|---|
| `OPENAI_API_KEY` | OpenAI direct (no gateway) |
| `ZALO_BOT_TOKEN` | Bot token from bot.zapps.me |
| `ZALO_WEBHOOK_SECRET` | Webhook verification |
| `BASEVN_MCP_URL` | MCP server endpoint |
| `BASEVN_MCP_SECRET` | Shared secret for MCP auth |
| `REDIS_URL` | Upstash Redis connection string |
| `EVE_AUTH_USER` | HTTP channel basic auth user |
| `EVE_AUTH_PASSWORD` | HTTP channel basic auth password |
| `LANGFUSE_SECRET_KEY` | Langfuse API secret key |
| `LANGFUSE_PUBLIC_KEY` | Langfuse API public key |
| `LANGFUSE_BASE_URL` | Langfuse endpoint (e.g. https://jp.cloud.langfuse.com) |

## Deploy

Git push to `main` → Vercel auto-deploys. Custom domain: `agent.htpp.com.vn`.

Zalo webhook: `https://agent.htpp.com.vn/eve/v1/zalo`

## References

- [eve framework docs](https://eve.dev/docs)
- [Chat SDK docs](https://chat-sdk.dev/docs/usage.md)
- [Chat SDK Zalo adapter](https://chat-sdk.dev/adapters/community/zalo)
- [Chat SDK state adapters](https://chat-sdk.dev/docs/state-adapters.md)
- [MCP connections in eve](https://eve.dev/docs/connections/mcp)
- [eve agent config](https://eve.dev/docs/agent-config)
- [eve channels](https://eve.dev/docs/channels/chat-sdk)
- [eve hooks](https://eve.dev/docs/guides/hooks)
- [eve instrumentation](https://eve.dev/docs/guides/instrumentation)
- [eve deployment](https://eve.dev/docs/guides/deployment)
- [Zalo Bot Platform](https://bot.zaloplatforms.com/docs)
- [OpenAI gpt-4.1-mini](https://developers.openai.com/api/docs/models/gpt-4.1-mini)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- [Upstash Redis](https://upstash.com)
- [Langfuse](https://langfuse.com)
