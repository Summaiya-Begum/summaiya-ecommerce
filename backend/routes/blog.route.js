const { Router } = require("express");
const BlogModel = require("../models/Blog.model");

const BlogRoutes = Router();

BlogRoutes.get("/", async (req, res) => {
  const newblog = await BlogModel.find();
  res.send(newblog);
});

BlogRoutes.post("/create", async (req, res) => {
  const payload = req.body;
  const newblog = await BlogModel.insertMany(payload);
  res.send({ mag: "Data Saved Successfully", newblog });
});

module.exports = BlogRoutes;
