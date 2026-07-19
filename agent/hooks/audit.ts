// Audit hook: log every tool call and model completion for observability.
// Hooks are observe-only — they fire after the event is durably recorded.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/guides/hooks.md
import { defineHook } from "eve/hooks";

export default defineHook({
  events: {
    "action.result"(event) {
      const result = event.data.result;
      const name = result.kind === "tool-result" ? result.toolName : result.kind;
      const isError = result.isError ?? false;
      console.info(`[audit] ${name} error:${isError}`);
    },
    "message.completed"(event) {
      const length = event.data.message?.length ?? 0;
      console.info(`[audit] message.completed length:${length}`);
    },
  },
});
