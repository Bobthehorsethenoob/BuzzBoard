import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  bannerImage: String,

  // admin (club owner)
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  // club members
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

export default mongoose.model("Club", clubSchema);
