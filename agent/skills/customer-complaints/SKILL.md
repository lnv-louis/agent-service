---
description: Read customer complaints and questions on Base.vn Square. Use when someone asks about khieu nai, phan hoi khach hang, customer feedback, or product issues.
---

# Customer complaints

## Tools

Search connection_search with: "square", "question", "khieu nai", "complaint"

Key tools:
- `square_list_questions` — list all questions/complaints
- `square_get_question` — get details of one question
- `square_create_question` — post a new question
- `square_create_answer` — answer a question

## What's in Square

HTP uses Square as an internal knowledge base where staff post customer issues:
- Allergic reactions to skincare products (kem, serum)
- Product efficacy questions
- Customer medical histories (thyroid, allergies, prescriptions)
- Sales channel feedback (Long Chau, FPT, etc.)

## Privacy warning

Square contains customer health information (allergies, diagnoses, prescriptions).
- Do NOT share customer phone numbers or full names in Zalo
- Summarize the issue type and product involved
- If the chairman asks for details, summarize the complaint without PII

## Workflow

1. Call `square_list_questions` (returns up to 100 at a time)
2. Filter by recency if the user asks about "latest" complaints
3. Summarize: product name, issue type, channel, date
4. Example: "Khieu nai gan nhat: khach bi di ung kem ban dem Sac Ngoc Khang, mua tai Long Chau 30/01."
