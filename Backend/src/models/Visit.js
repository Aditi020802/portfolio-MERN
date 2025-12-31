const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  date: String,
  count: { type: Number, default: 1 },
  locations: [
    {
      country: String,
      city: String,
      count: { type: Number, default: 1 }
    }
  ]
});

module.exports = mongoose.model("Visit", visitSchema);
