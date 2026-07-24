---
description: Read and create official company documents on Base.vn Office — HR decisions, policies, contracts, announcements. Use when someone asks about van ban, quyet dinh, chinh sach, or internal docs.
---

# Company documents

## Tools

Search connection_search with: "office", "document", "van ban", "doc"

Key tools:
- `office_list_documents` — list recent documents (max 20 per API call)
- `office_create_document` — create a new document

## Document types on HTP Office

- Quyet dinh bo nhiem (appointment decisions)
- Quyet dinh mien nhiem (dismissal decisions)
- Chinh sach thuong (bonus policies)
- Hop dong (contracts)
- Bien ban thanh ly (termination records)
- Giay chung nhan (certificates)

## Reading documents

The Office API returns the 20 most recent documents. Each includes:
- Title, type, status
- Creator, creation date
- File attachments (with signed GCS download URLs, 30-60 min expiry)

If asked about a specific document, search by title keywords in the list results.

## Creating documents

Two-turn flow (required by instructions):
1. Ask: "Xac nhan: Tao van ban '[title]'? (Y/N)"
2. On "Y", call `office_create_document` with title and content

Note: The API only returns the 20 most recent docs. Historical documents are not accessible via the API.
