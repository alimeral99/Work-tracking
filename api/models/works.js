const mongoose = require("mongoose");

const WorksSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
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
