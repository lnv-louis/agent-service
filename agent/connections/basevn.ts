// MCP connection to the HTP Base.vn MCP server.
// All 94 Base.vn tools are auto-discovered — no hand-written tool wrappers.
// Docs: https://raw.githubusercontent.com/vercel/eve/main/docs/connections/mcp.mdx
// Approval gates: https://raw.githubusercontent.com/vercel/eve/main/docs/connections/mcp.mdx#approval-gates
import { defineMcpClientConnection } from "eve/connections";

const WRITE_TOOLS = [
  "wework_create_task",
  "wework_update_task",
  "wework_complete_task",
  "wework_create_project",
  "wework_delete_project",
  "account_create_user",
  "account_update_user",
  "account_delete_user",
  "office_create_doc",
  "office_update_doc",
  "office_delete_doc",
  "inside_create_article",
  "inside_create_company_news",
  "goal_create",
  "goal_update",
  "goal_delete",
  "meeting_create",
  "meeting_update",
  "meeting_delete",
  "booking_create",
  "booking_update",
  "booking_delete",
  "square_create_question",
  "square_create_answer",
  "service_create_ticket",
  "service_update_ticket",
  "table_create_record",
  "table_update_record",
  "table_delete_record",
];

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
  approval: ({ toolName }) => {
    if (WRITE_TOOLS.some((t) => toolName.includes(t))) return "user-approval";
    return "not-applicable";
  },
});
