# 
npm i
npm install -g @nestjs/cli
npx prisma init

# User & Transactions API
請完成 `/users` 和 `/transactions` 的 API：

1. User API:
   - `POST /users`
   - `GET /users/:id`
   - `DELETE /users/:id`

2. Transactions API:
   - `POST /transactions/deposit`
   - `POST /transactions/transfer`

請確保：
- **錯誤處理完善**
- **轉帳時使用 Prisma Transaction 確保一致性**
- **快取 / 效能優化可加分**