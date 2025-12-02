import express from "express";
import Event from "../models/eventModel.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    console.error("Error getting event by id:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;