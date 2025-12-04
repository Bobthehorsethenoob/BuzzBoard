import express from "express";
import { getClubs, joinClub } from "../controllers/clubController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getClubs);
router.post("/join", protect, joinClub);

export default router;
