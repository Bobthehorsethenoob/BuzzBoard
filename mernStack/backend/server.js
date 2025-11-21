import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import express from "express";
import authRoutes from "./routes/auths.js";

dotenv.config();

connectDB();


// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(express.json());

app.use("/api/users", authRoutes)

app.listen(5000, () => {
console.log("Server started at http://localhost:5000");
});

