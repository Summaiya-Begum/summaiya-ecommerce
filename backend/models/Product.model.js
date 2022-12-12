const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
    images: [{ type: String, required: true }],
  },
  {
    versionKey: false,
  }
);

const productModel = new mongoose.model("product", ProductSchema);
module.exports = { productModel };
