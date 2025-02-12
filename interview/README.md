## 面試
**可以查文件不能用ai**
#### 文件
https://docs.nestjs.com/

## 安裝步驟
pnpm i
pnpm install -g @nestjs/cli
npx prisma migrate dev --name init


# User & Transactions API
請完成 `/users` 和 `/transactions` 的 API：

# 📌 API 說明

## 1️⃣ User API

### 🔹 建立使用者
- **Method**:      `POST`
- **Endpoint**:     `/users`
- **Request Body**:
  ```json
  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```
#### Response (201 Created):
  ```json
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "balance": 1000
  }
  ```
#### 錯誤處理:
- 400 Bad Request：請求格式錯誤 (e.g., name 長度不足)
- 409 Conflict：email 已存在

### 🔹 取得使用者資訊

- **Method**: GET
- **Endpoint**: /users/:id
- **Response** (200 OK):
```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "balance": 1000
}
```
#### 錯誤處理:
- 404 Not Found：使用者不存在

### 刪除使用者
- **Method**:      DELETE
- **Endpoint**:     /users/:id
#### Response (204 No Content)：

#### 錯誤處理:
- 404 Not Found：使用者不存在
- 400 Bad Request：該 User 有交易紀錄，無法刪除

## 2️⃣ Transactions API

### 🔹 存款
- **Method**:     POST 
- **Endpoint**:    /transactions/deposit
- **Request Body**:
```json
{
  "userId": 1,
  "amount": 500
}
```
- **Response(201 Created)**:
```json
{
  "id": 1,
  "userId": 1,
  "amount": 500,
  "type": "DEPOSIT",
  "createdAt": "2025-02-12T12:00:00.000Z"
}
```
- **錯誤處理**
  - 400 Bad Request：amount 不是正數
  - 404 Not Found：userId 不存在

## 🔹 轉帳
- **Method**:     POST 
- **Endpoint**:    /transactions/transfer
- **Request Body**:
```json
{
  "fromUserId": 1,
  "toUserId": 2,
  "amount": 300
}

```
- **Response(201 Created)**:
```json
{
  "id": 2,
  "fromUserId": 1,
  "toUserId": 2,
  "amount": 300,
  "type": "TRANSFER",
  "createdAt": "2025-02-12T12:05:00.000Z"
}

```
- **錯誤處理**
  - 400 Bad Request：
      - fromUserId 和 toUserId 不能相同
      - amount 不是正數
      - fromUserId 餘額不足
  - 404 Not Found： fromUserId 或 toUserId 不存在