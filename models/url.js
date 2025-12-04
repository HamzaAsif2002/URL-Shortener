const mongoose = require("mongoose");

const urlScema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlScema);

module.exports = URL;
