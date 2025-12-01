import dotenv from "dotenv";
dotenv.config();  // load .env only if exists

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import { getStudentCount } from "./controllers/admin.controller.js";

console.log("Checking ENV → MONGO_URI =", process.env.MONGO_URI);

// fallback if not provided (for DockerHub pull)
process.env.MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/DQuiz";
process.env.PORT = process.env.PORT || 5000;
process.env.JWT_SECRET = process.env.JWT_SECRET || "default_secret_123";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => res.send("DQuiz API Running"));
app.get("/api/admin/student-count", getStudentCount);

connectDB(); // now uses final values
app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT));

app.get("/debug/env", (req, res) => {
    res.json({
        MONGO_URI: process.env.MONGO_URI,
        PORT: process.env.PORT,
        JWT_SECRET: process.env.JWT_SECRET
    });
});
