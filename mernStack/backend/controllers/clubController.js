import Club from "../models/Club.js";
import User from "../models/User.js";

export const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find().populate("admin", "username");
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const joinClub = async (req, res) => {
  try {
    const userId = req.user.id; // from JWT
    const { clubId } = req.body;

    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ message: "Club not found" });

    // prevent duplicates
    if (club.members.includes(userId))
      return res.status(400).json({ message: "Already joined" });

    club.members.push(userId);
    await club.save();

    await User.findByIdAndUpdate(userId, {
      $push: { clubs: clubId }
    });

    res.json({ message: "Joined club successfully" });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
