---
description: Schedule meetings and book rooms on Base.vn Meeting and Booking. Use when someone asks about cuoc hop, dat phong, lich hop, or scheduling.
---

# Meeting and booking

## Tools

Search connection_search with: "meeting", "booking", "cuoc hop", "dat phong"

Key tools:
- `meeting_list` — list upcoming meetings
- `meeting_create` — schedule a meeting
- `meeting_get` — get meeting details
- `booking_list` — list room bookings
- `booking_create` — book a room
- `booking_get` — get booking details

## Creating a meeting

Two-turn flow (required by instructions):
1. Ask: "Xac nhan: Tao cuoc hop '[title]' vao [date/time]? (Y/N)"
2. On "Y", call `meeting_create` with title, date, time, and attendees

## Reading schedule

- "Lich hop tuan nay?" → list meetings, filter by date range
- "Phong hop nao con trong?" → list bookings, find gaps
