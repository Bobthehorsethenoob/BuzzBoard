import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import express from "express";

dotenv.config();

connectDB();


// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();


app.get("/products", (req, res) => {
  res.send([]);
});


app.listen(5000, () => {
console.log("Server started at http://localhost:5000");
});

