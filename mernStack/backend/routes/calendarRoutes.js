// backend/routes/calendarRoutes.js
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// GET /api/calendar/events
router.get("/events", async (req, res) => {
  try {
    const timeMin = new Date().toISOString();

    const params = new URLSearchParams({
      key: process.env.GOOGLE_API_KEY,
      singleEvents: "true",
      orderBy: "startTime",
      timeMin,
    });

    const calendarId = encodeURIComponent(process.env.GOOGLE_CALENDAR_ID);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${params.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("Google API error:", data);
      return res.status(500).json({ message: "Failed to fetch Google events" });
    }

    const events = (data.items || []).map((ev) => {
      const start = ev.start?.dateTime || ev.start?.date;
      const end = ev.end?.dateTime || ev.end?.date;

      return {
        id: ev.id,
        title: ev.summary || "Untitled event",
        location: ev.location || "",
        description: ev.description || "",
        start,
        end,
      };
    });

    res.json(events);
  } catch (err) {
    console.error("Calendar fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;