// Instrumentation: Langfuse tracing via OpenTelemetry.
// Company data (employee PII, customer health complaints, financials) is
// sensitive — recordInputs and recordOutputs are disabled so tool inputs
// and model messages are not captured in trace spans. Traces show tool
// names, timing, token counts, and errors — enough to debug without
// leaking sensitive content.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/guides/instrumentation.md
// Langfuse + AI SDK 7: https://langfuse.com/docs/integrations/vercel-ai-sdk
import { registerTelemetry } from "ai";
import { LangfuseSpanProcessor } from "@langfuse/otel";
import { LangfuseVercelAiSdkIntegration } from "@langfuse/vercel-ai-sdk";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { defineInstrumentation } from "eve/instrumentation";

const sdk = new NodeSDK({
  spanProcessors: [new LangfuseSpanProcessor()],
});

sdk.start();
registerTelemetry(new LangfuseVercelAiSdkIntegration());

export default defineInstrumentation({
  recordInputs: false,
  recordOutputs: false,
});
