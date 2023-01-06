const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    postedAt: { type: String, default: new Date().toLocaleDateString() },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const BlogModel = mongoose.model("bookstore", BlogSchema);

module.exports = BlogModel;
