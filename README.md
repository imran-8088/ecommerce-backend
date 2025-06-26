# 🛍️ E-Commerce Backend

This is a full-featured e-commerce backend built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**, with image uploads handled via **Cloudinary**.

---

## 📦 Tech Stack

| Layer        | Technology               |
| ------------ | ------------------------ |
| Language     | JavaScript (ES6+)        |
| Runtime      | Node.js                  |
| Framework    | Express.js               |
| Database     | PostgreSQL               |
| ORM          | Sequelize                |
| Image Upload | Cloudinary + Multer      |
| Dev Tools    | Nodemon, dotenv, Postman |

---

## 🚀 Setup Instructions (Backend)

### 1. **Clone the repository**

```bash
git clone https://github.com/imran-8088/ecommerce-backend.git
cd ecommerce-backend
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Create ****\`\`**** file**

Configure your environment variables:

```DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   DB_HOST=your_db_host

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```

### 4. **Run database migrations and seeders**

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5. **Start the server**

```bash
npm run dev
```

---

## 📡 API Usage Guide

### 🛒 Products

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/products`     | Get all products             |
| GET    | `/api/products/:id` | Get a product by ID          |
| POST   | `/api/products`     | Add new product (with image) |
| PUT    | `/api/products/:id` | Update product & image       |
| DELETE | `/api/products/:id` | Delete product & image       |

📌 **Note:** Image uploads use `multipart/form-data` and are stored in **Cloudinary**. Old images are auto-deleted when replaced or when a product is deleted.

---

### 🗂️ Categories

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/categories` | Get all categories |

---

## 🛠 Features Implemented

- ✅ Full CRUD APIs for Products
- ✅ Image upload and replacement via Cloudinary
- ✅ Auto-delete of old product images
- ✅ Dynamic Category support
- ✅ Sequelize ORM models, migrations & seeders
- ✅ Robust error handling
- ✅ Modular route/controller structure

---
