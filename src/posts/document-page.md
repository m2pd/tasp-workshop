---
title: 'Tài liệu hướng dẫn'
description: 'This post uses an external image as a thumbnail'
date: 2020-02-11T17:30
thumb: '2011.jpg'
tags:
  - tips
  - sample
---

### Hiện tại ở vai trò là Creater thì mọi người chỉ quan tâm nhiều nhất đến 2 thư mục là: Posts và members

Các bạn có thể clone một `bài biết` hoặc một `member`, sau đó thay thế nội dung phù hợp

#### Lưu ý: Nếu muốn sử dụng Extensions FM thì các bạn phải sử dụng file định dạng markdown `*.md`

```
├── posts
│   ├── img // Hình ảnh các bài viết sẽ được lưu trữ ở đây
│   ├── **.md // Các bài viết sẽ được tạo ở đây, với cấu trúc: [Tên bài viết].md vd: document-page.md
│   ├── index.njk // Đây là file cấu hình template của Post* Lưu ý không được tự ý chỉnh sửa file này
│   ├── posts.11tydata.js // File cấu hình các thông số mặc đình _data của Post* Lưu ý không được tự ý chỉnh sửa file này
├── members // Tương tự như của Posts
│   ├── img
│   ├── **.md
│   ├── index.njk
│   │****************************
│   │
├── public
│   ├── access
│   │   ├── css
│   │   ├── js
│   │   ├── img
│   │   │
│   ├── index.html
├── dist
├── node_modules
├── package.json
├── package-lock.json
└── .gitignore
```
