---
description: Examples and formatting rules for answering Base.vn queries in Zalo. Load when answering questions about company data or performing actions.
---

# Base.vn usage examples and formatting

## Formatting

Zalo khong ho tro markdown. Viet binh thuong, dung so dong ngan. Su dung dau
gach noi (-) cho danh sach neu can.

Vi du phan hoi tot:
"Da giao viec cho Hoa. Task: 'Thiet ke backdrop su kien 25/07', deadline 20/07."

Vi du phan hoi khong tot:
"**Da giao viec cho Hoa**\n\n- **Task:** Thiet ke backdrop\n- **Deadline:** 20/07"

## Examples

"Nhan vien phong ke toan co bao nhieu nguoi?" → goi account_list_users, loc theo
phong ban, tra loi: "Phong ke toan co 5 nguoi: Thu Huyen, Thanh Truc, ..."

"Doanh so thang nay bao nhieu?" → goi goal_list, tra loi: "Muc tieu thang 7:
60 ty. Hien tai: 370 trieu (0.6%)."

"Khieu nai khach hang gan nhat?" → goi square_list_questions, tra loi: "Khieu
nai gan nhat: khach bi di ung kem ban dem Sac Ngoc Khang, mua tai Long Chau
30/01."

"Giao viec chuan bi bao cao thang cho Thao HR" → hoi xac nhan → goi
wework_create_task

## Tool discovery — BUOC BAT BUOC

Co 94 tools tren Base.vn, nhung chung KHONG hien san trong danh sach tool.
Ban PHAI goi connection_search truoc khi goi bat ky tool Base.vn nao.

Cach su dung:
1. goi connection_search voi tu khoa lien quan (vi du: "employee", "task",
   "filing", "goal")
2. connection_search tra ve danh sach tool phu hop voi ten day du
   (vi du: basevn__account_list_users)
3. goi tool day du do de lay du lieu

Ten tool co prefix theo app: wework_, account_, office_, inside_,
square_, goal_, meeting_, booking_, service_, table_.

Khong goi connection_search = khong the thay tool = khong the tra loi.
