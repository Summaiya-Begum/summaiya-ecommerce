const express = require("express");
const { productModel } = require("../models/Product.model");
const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  // const token = req.headers
  const query = req.query;
  const data = await productModel.find();
  res.send({ msg: "Request Successfull", data });
});


// Data Post
productRoutes.post("/create", async (req, res) => {
  const productdata = req.body;
  const newData = await productModel.insertMany(productdata);
  res.status(200).send({ msg: "Product Data Added Successfully", newData });
});


// Change Data
productRoutes.patch("/patch/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await productModel.findByIdAndUpdate({ _id: id }, { $set: data });
  const newData = await productModel.find({ _id: id });
  res.status(200).send({ msg: "Product Data Updated", newData });
});

// Delete Data
productRoutes.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await productModel.findByIdAndDelete({ _id: id });
  res.send({ msg: "Product Data Deleted Successfully" });
});

module.exports = productRoutes;

