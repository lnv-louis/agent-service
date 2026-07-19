// Zalo channel: Chat SDK + community Zalo adapter.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/channels/chat-sdk.mdx
// Zalo adapter: https://chat-sdk.dev/adapters/community/zalo
// Chat SDK handling events: https://chat-sdk.dev/docs/handling-events.md
// Redis state adapter: https://chat-sdk.dev/docs/state-adapters.md
// Session lifecycle: https://raw.githubusercontent.com/vercel/eve/main/docs/concepts/sessions-runs-and-streaming.md
import { chatSdkChannel, messageToUserContent } from "eve/channels/chat-sdk";
import { createZaloAdapter } from "chat-adapter-zalo";
import { createRedisState } from "@chat-adapter/state-redis";
import { resolveZaloIdentity } from "../lib/identity";

const zaloAdapter = process.env.ZALO_BOT_TOKEN
  ? createZaloAdapter()
  : null;

if (!zaloAdapter) {
  console.warn(
    "[zalo] ZALO_BOT_TOKEN is not set; Zalo channel is disabled. Set ZALO_BOT_TOKEN and ZALO_WEBHOOK_SECRET.",
  );
}

const adapters = zaloAdapter ? { zalo: zaloAdapter } : {};

const state = process.env.REDIS_URL
  ? createRedisState({ url: process.env.REDIS_URL })
  : null;

if (!state) {
  console.warn(
    "[zalo] REDIS_URL is not set; using in-memory state. Sessions will not persist across restarts.",
  );
}

const RESET_KEYWORDS = ["exit", "thoat", "reset", "lam moi"];

function isResetCommand(text: string): boolean {
  const normalized = text.trim().toLowerCase();
  return RESET_KEYWORDS.includes(normalized);
}

const { bot, channel, send } = chatSdkChannel({
  userName: "HTP Assistant",
  adapters,
  state: state ?? (await import("@chat-adapter/state-memory")).createMemoryState(),
  streaming: false,
  events: {
    "turn.failed"(data: any, ch: any) {
      if (!ch.thread) return;
      ch.thread.post("Da xay ra loi. Vui long thu lai sau. (Error)");
    },
  },
});

bot.onNewMention(async (thread: any, message: any) => {
  const text = (message.text ?? "").trim();
  const zaloUserId = message?.from?.userId ?? message?.author?.userId ?? "unknown";
  const zaloName = message?.from?.userName ?? message?.author?.userName ?? "unknown";
  console.info(`[zalo] user: ${zaloUserId} name: ${zaloName} text: ${text.slice(0, 80)}`);
  if (isResetCommand(text)) {
    await thread.unsubscribe();
    await thread.post("Da ket thuc phien. Gui tin nhan moi de bat dau lai.");
    return;
  }
  await thread.subscribe();
  const auth = resolveZaloIdentity(message);
  await send(messageToUserContent(message), {
    thread,
    title: text.slice(0, 50),
    ...(auth ? { auth } : {}),
  });
});

bot.onSubscribedMessage(async (thread: any, message: any) => {
  const text = (message.text ?? "").trim();
  if (isResetCommand(text)) {
    await thread.unsubscribe();
    await thread.post("Da ket thuc phien. Gui tin nhan moi de bat dau lai.");
    return;
  }
  const auth = resolveZaloIdentity(message);
  await send(messageToUserContent(message), {
    thread,
    ...(auth ? { auth } : {}),
  });
});

export { bot };
export default channel;
