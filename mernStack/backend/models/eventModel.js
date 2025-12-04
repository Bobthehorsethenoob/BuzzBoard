const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    clubName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String, required: true }, 
    startTime: { type: String }, 
    endTime: { type: String }, 
    location: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Event', eventSchema);
export default Event;