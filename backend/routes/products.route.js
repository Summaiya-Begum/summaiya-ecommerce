const express = require("express");
const { productModel } = require("../models/Product.model");
const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  // const token = req.headers
  const { filter, sort, page, limit } = req.query;

  if (filter !==undefined) {
    const result = await productModel
      .find({
        "category.name": filter,
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ price: sort == "asc" ? 1 : -1 });
    console.log(result);
    return await res.send({msg:"Data Fullfilled Success",data:result});
  } else {
    const result = await productModel
      .find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ price: sort == "asc" ? 1 : -1 });
    // console.log(result);
    return await res.send({msg:"Data Fullfilled Success",data:result});
  }
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
