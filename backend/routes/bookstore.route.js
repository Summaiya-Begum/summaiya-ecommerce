const { Router } = require("express");
const BookModel = require("../models/Bookstore.model");

const BookRoutes = Router();

BookRoutes.get("/", async (req, res) => {
  const newbook = await BookModel.find();
  res.send(newbook);
});

BookRoutes.post("/create", async (req, res) => {
  const payload = req.body;
  const newbook = await BookModel.insertMany(payload);
  res.send({ mag: "Data Saved Successfully", newbook });
});

module.exports = BookRoutes;
