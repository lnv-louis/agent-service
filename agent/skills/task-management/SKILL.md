---
description: Create, assign, and list tasks on Base.vn Wework. Use when someone wants to delegate work, check task status, or review project progress.
---

# Task management

## Tools

Search connection_search with: "wework", "task", "project", "cong viec"

Key tools:
- `wework_list_projects` — list all 106 projects
- `wework_list_tasks` — list tasks in a project (needs project ID)
- `wework_create_task` — create a task (needs name, username, assign)
- `wework_get_task` — get one task by ID
- `wework_complete_task` — mark task complete

## Creating a task

Two-turn flow (required by instructions):
1. Ask: "Xac nhan: Tao cong viec '[name]' giao cho [username]? (Y/N)"
2. On "Y", call `wework_create_task` with:
   - `name`: task title (short, clear)
   - `username`: creator's Base.vn username (from identity mapping)
   - `assign`: assignee's Base.vn username

The task is created in the creator's personal project automatically.

## Listing tasks

- User asks about a department's work → list projects, find the matching one, list tasks
- User asks about a person's tasks → search by username in task fields
- Large projects (5000+ tasks) — WRITE result to /workspace/tasks.json, then grep by assignee or status. NEVER let the full task list stay in context.

## HTP project reference

Common projects by department:
- PKD Thi truong (96312) — sales market
- Ke toan - Kinh doanh (94124) — accounting
- Ho so cong bo (96170) — regulatory filings
- Thiet ke (design project) — creative
- P. HCNS — HR operations
- P. Cung Ung — supply chain
