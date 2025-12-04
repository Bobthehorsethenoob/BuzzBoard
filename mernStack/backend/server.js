import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import express from "express";
import eventRoutes from "./routes/eventRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";

dotenv.config();

connectDB();


// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

app.use("/api/calendar", calendarRoutes);

const app = express();

app.use(express.json());

app.use("/api/events", eventRouts);

app.get("/products", (req, res) => {
  res.send([]);
});


app.listen(5000, () => {
console.log("Server started at http://localhost:5000");
});

