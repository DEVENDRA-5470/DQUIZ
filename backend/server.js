import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";   // <-- ROUTE IMPORT HERE
import { getStudentCount } from "./controllers/admin.controller.js";


const app = express();
app.use(cors());
app.use(express.json());

// register routes HERE
app.use("/api/auth", authRoutes);   // <-- REQUIRED

app.get("/", (req, res) => {
    res.send("DQuiz API Backend Running ✅😊🧑‍💻");
    
});
app.get("/api/admin/student-count", getStudentCount);


connectDB();
app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});

app.get("/debug/env", (req, res) => {
    res.json({
        MONGO_URI: process.env.MONGO_URI,
        PORT: process.env.PORT,
        JWT_SECRET: process.env.JWT_SECRET
    });
});

