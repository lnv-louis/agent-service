---
description: Handle HR operations via Base.vn Service — leave requests, salary advances, internal complaints, onboarding. Use when someone asks about nghi phep, tam ung, nghi viec, or service tickets.
---

# HR operations

## Tools

Search connection_search with: "service", "ticket", "phieu", "request"

Key tools:
- `service_list_services` — list available service workflows
- `service_list_tickets` — list tickets in a service
- `service_get_ticket_detail` — get ticket details
- `service_create_ticket` — create a new ticket
- `service_edit_ticket` — update ticket fields
- `service_execute_ticket` — advance/execute a ticket
- `service_get_service_stages` — get stages/blocks for a service

## HTP Service ticket types

- Tam ung luong (salary advance)
- Nghi phep (leave request)
- De nghi nghi viec (resignation)
- Khieu nai noi bo (internal complaint)
- De nghi cap phep (permit request)

## Workflow

1. If reading: list tickets, filter by type or status
2. If creating: ask for confirmation first (two-turn flow)
3. Report ticket ID and status after creation

## Note

The Service module's token may be stale. If `service_*` tools return auth errors, inform the user: "He thong Service dang gap van de ket noi. Vui long thu lai sau."
