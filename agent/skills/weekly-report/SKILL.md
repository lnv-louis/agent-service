---
description: Generate a weekly report by reading tasks, goals, and documents from Base.vn. Use when someone asks for a weekly summary, bao cao tuan, or status review.
---

# Weekly report

## Workflow

1. Identify the time range (which week, which month)
2. Call connection_search to find task/goal/document tools
3. Call each tool — WRITE results to /workspace files (tasks.json, goals.json, docs.json)
4. Use grep/read_file to extract only completed tasks in the date range
5. Summarize in Vietnamese, plain text, under 2000 chars

## Sandbox staging (MANDATORY)

Tool results from Base.vn can be huge (thousands of tasks, hundreds of employees).
DO NOT let large results stay in context. Always:

1. Call tool → get result
2. write_file("/workspace/[name].json", result) immediately
3. grep or read_file specific fields from the file
4. Build the report from the extracted data, not from the raw result in context

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
