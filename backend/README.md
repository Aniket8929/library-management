# Library Management System - Backend API

A Node.js Express backend for a Book Management System with JWT authentication.

## Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URI` and `JWT_SECRET` values

3. **Start the server:**
   ```bash
   npm start
   ```

---

## API Endpoints & Testing Guide (Postman)

### 1. Register User
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/register`
- **Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "admin"
  }
  ```
- **Note:** `role` can be `admin` or `student` (defaults to `student`)

### 2. Login
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/login`
- **Body (JSON):**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:** Returns `token` - copy this for authenticated requests

### 3. Get All Books (All Authenticated Users)
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/books`
- **Headers:**
  ```
  Authorization: Bearer <your_token_here>
  ```

### 4. Create Book (Admin Only)
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/books`
- **Headers:**
  ```
  Authorization: Bearer <your_admin_token_here>
  ```
- **Body (JSON):**
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565"
  }
  ```

### 5. Update Book (Admin Only)
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/books/<book_id>`
- **Headers:**
  ```
  Authorization: Bearer <your_admin_token_here>
  ```
- **Body (JSON):** (any field to update)
  ```json
  {
    "title": "Updated Title"
  }
  ```

### 6. Delete Book (Admin Only)
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/api/books/<book_id>`
- **Headers:**
  ```
  Authorization: Bearer <your_admin_token_here>
  ```

### 7. Issue Book (Student Only)
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/books/issue/<book_id>`
- **Headers:**
  ```
  Authorization: Bearer <your_student_token_here>
  ```

---

## Project Structure

```
backend/
├── controllers/
│   ├── authController.js
│   └── bookController.js
├── middleware/
│   ├── auth.js
│   └── adminOnly.js
├── models/
│   ├── Book.js
│   └── User.js
├── routes/
│   ├── auth.js
│   └── books.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## Test Flow Example

1. **Register an Admin:** `POST /api/auth/register` with `role: "admin"`
2. **Login:** `POST /api/auth/login` → copy the `token`
3. **Create Books:** Use admin token to `POST /api/books`
4. **Register a Student:** `POST /api/auth/register` with `role: "student"`
5. **Login as Student:** Get student token
6. **View Books:** Student uses `GET /api/books`
7. **Issue Book:** Student uses `POST /api/books/issue/:id`
