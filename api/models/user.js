const mongoose = require("mongoose");

// Kullanıcı modeli için şema tanımı
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "premium"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Kullanıcı modeli
const User = mongoose.model("User", userSchema);

module.exports = User;
