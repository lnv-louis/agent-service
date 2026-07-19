---
description: Generate a weekly report by reading tasks, goals, and documents from Base.vn. Use when someone asks for a weekly summary, bao cao tuan, or status review.
---

# Weekly report

## Workflow

1. Identify the time range (which week, which month)
2. List tasks completed in that period across relevant projects
3. Check goals/KPI progress with goal tools
4. Check for any new Office documents or announcements
5. Summarize in Vietnamese, plain text, under 2000 chars

## Tools to search

- connection_search("wework task") → list tasks, filter by completion date
- connection_search("goal") → check targets vs actual
- connection_search("office document") → recent HR announcements

## Report structure (Vietnamese, plain text)

```
Bao cao tuan [date range]:

1. Cong viec hoan thanh:
   - [task name] - [assignee] - [completed date]
   ...

2. Cong viec dang xu ly:
   - [task name] - [assignee] - [status]
   ...

3. Muc tieu kinh doanh:
   - Muc tieu: [target]
   - Thuc te: [actual] ([percentage])

4. Van de can luu y:
   - [any overdue tasks, complaints, or issues]
```

## Important

- DO NOT try to create a report ON Base.vn. Read data FROM Base.vn and write the report as a Zalo message.
- If data is missing, say which part is missing — don't hallucinate.
- Keep it short. Zalo messages are capped at 2000 chars. If the report is longer, split into parts.
