// Instrumentation: telemetry config.
// Company data (employee PII, customer health complaints, financials) is
// sensitive — disable input/output recording so tool calls and model
// messages are not captured in trace spans.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/guides/instrumentation.md
// AI SDK telemetry: https://ai-sdk.dev/docs/telemetry
import { defineInstrumentation } from "eve/instrumentation";

export default defineInstrumentation({
  recordInputs: false,
  recordOutputs: false,
});
