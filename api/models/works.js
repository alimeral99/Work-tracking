const mongoose = require("mongoose");

const WorksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Works", WorksSchema);
