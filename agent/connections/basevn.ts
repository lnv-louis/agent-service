// MCP connection to the HTP Base.vn MCP server.
// All 94 Base.vn tools are auto-discovered — no hand-written tool wrappers.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/connections/mcp.mdx
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: process.env.BASEVN_MCP_URL ?? "https://basevn.htpp.com.vn/mcp",
  description:
    "Base.vn company operations for HTP Pharma — tasks, employees, documents, goals, " +
    "customer complaints, HR, meetings, bookings. Use for any question about company data " +
    "or any action like creating tasks, assigning work, looking up employees, reading " +
    "documents, checking goals, or viewing customer complaints. All tool names are prefixed " +
    "with the app name (wework_, account_, office_, inside_, square_, goal_, meeting_, " +
    "booking_, service_, table_).",
  headers: {
    "X-MCP-Secret": process.env.BASEVN_MCP_SECRET ?? "",
  },
});
