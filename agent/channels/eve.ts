// Eve HTTP channel: shared-secret basic auth for operator access.
// The Zalo channel is the primary surface for the family. This HTTP channel
// exists for smoke-testing the deployed agent via curl and for debugging.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/channels/eve.mdx
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/guides/auth-and-route-protection.md
import { eveChannel } from "eve/channels/eve";
import { httpBasic } from "eve/channels/auth";

const OPERATOR_USER = process.env.EVE_AUTH_USER ?? "";
const OPERATOR_PASSWORD = process.env.EVE_AUTH_PASSWORD ?? "";

if (!OPERATOR_USER || !OPERATOR_PASSWORD) {
  console.warn(
    "[eve] EVE_AUTH_USER or EVE_AUTH_PASSWORD is not set; the HTTP channel will reject all requests. Set both to enable operator access.",
  );
}

export default eveChannel({
  auth: [
    httpBasic({
      username: OPERATOR_USER,
      password: OPERATOR_PASSWORD,
    }),
  ],
});
