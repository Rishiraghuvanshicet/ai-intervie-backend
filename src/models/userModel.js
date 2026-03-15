const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "Username already taken"],
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters"],
    },

    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
