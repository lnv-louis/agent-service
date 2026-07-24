---
description: Check company goals, KPIs, and business targets on Base.vn Goal. Use when someone asks about doanh so, muc tieu, KPI, targets, or business performance.
---

# Goals and KPI

## Tools

Search connection_search with: "goal", "muc tieu", "KPI", "target"

Key tools:
- `goal_list_cycles` — list all OKR/KPI cycles (start here)
- `goal_get_cycle_full` — full cycle with all targets
- `goal_get_target` — get one target/KPI by ID
- `goal_get_goal` — get one goal/objective by ID
- `goal_create_company_okr` — create company OKR (requires confirmation)
- `goal_checkin_goal_kpi` — update progress on a KPI goal
- `goal_checkin_kr` — update progress on a key result

## Typical HTP goals

- Monthly revenue targets (doanh so thang) — usually in VND (ty/trieu)
- Department-level targets (KD Thi truong, KD Online, etc.)
- Quarterly OKRs
- Individual KPIs for sales teams

## Reading goals

1. Call `goal_list_cycles` to see all OKR/KPI cycles
2. If the user asks about a specific period, filter by date range
3. Report: target amount, actual progress, percentage achieved
4. Format: "Muc tieu thang 7: 60 ty. Hien tai: 370 trieu (0.6%)."

## Important

- Revenue figures are sensitive — share in summary form only (percentage achieved, rounded amounts), never exact raw numbers
- Always cite the tool call that returned the number
- If goal data is unavailable, say "Khong co du lieu muc tieu cho [period]"
