---
description: Check company goals, KPIs, and business targets on Base.vn Goal. Use when someone asks about doanh so, muc tieu, KPI, targets, or business performance.
---

# Goals and KPI

## Tools

Search connection_search with: "goal", "muc tieu", "KPI", "target"

Key tools:
- `goal_list` — list all goals/targets
- `goal_get` — get details of a specific goal
- `goal_create` — create a new target (requires confirmation)
- `goal_update` — update progress on a target

## Typical HTP goals

- Monthly revenue targets (doanh so thang) — usually in VND (ty/trieu)
- Department-level targets (KD Thi truong, KD Online, etc.)
- Quarterly OKRs
- Individual KPIs for sales teams

## Reading goals

1. Call `goal_list` to see all active goals
2. If the user asks about a specific period, filter by date range
3. Report: target amount, actual progress, percentage achieved
4. Format: "Muc tieu thang 7: 60 ty. Hien tai: 370 trieu (0.6%)."

## Important

- Revenue figures are sensitive — do not share in detail unless the chairman or HR director is asking
- Always cite the tool call that returned the number
- If goal data is unavailable, say "Khong co du lieu muc tieu cho [period]"
