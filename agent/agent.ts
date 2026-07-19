// HTP Pharma agent runtime config.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/agent-config.md
// AI SDK provider config: https://ai-sdk.dev/providers/ai-sdk-providers/openai
import { defineAgent } from "eve";
import { openai } from "@ai-sdk/openai";

export default defineAgent({
  model: openai("gpt-5.6-luna"),
  reasoning: "medium",
  compaction: {
    thresholdPercent: 0.5,
  },
  limits: {
    maxOutputTokensPerSession: 50_000,
  },
});
