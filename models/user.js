const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passward: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const USER = mongoose.model("user", userSchema);

module.exports = USER;
