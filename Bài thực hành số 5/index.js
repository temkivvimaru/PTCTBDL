import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import { readFileSync } from "fs";

const serviceAccount = JSON.parse(
  readFileSync("./serviceAccount.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //Thiết lập databaseURL nếu dùng Realtime Database
});

const db = admin.firestore(); // hoặc admin.database() nếu dùng realtime

// ---- 2. Khởi tạo Express ----
const app = express();
app.use(cors());
app.use(express.json());

// ---- 3. API CRUD đơn giản ----
app.get("/api/students", async (req, res) => {

});

// Thêm user
app.post("/api/students", async (req, res) => {

});

// Cập nhật user
app.put("/api/students/:id", async (req, res) => {

});

// Xoá user
app.delete("/api/students/:id", async (req, res) => {

});

// ---- 4. Chạy server ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
