const { Router } = require("express");
const { productModel } = require("../models/Product.model");
const userModel = require("../models/User.model");
const cartRoutes = Router();

cartRoutes.get("/", async (req, res) => {
  const { userId } = req.body;
  const user = await userModel.findOne({ _id: userId });
  let cart = user.cartitems;
  res.send({ msg: "Product Added Successfull", cart });
});

cartRoutes.patch("/edit/:id", async (req, res) => {
  // res.send(req.body);
  const productId = req.params.id;

  const { userId, qty } = req.body;
  // console.log(req.body);
  const user = await userModel.findOne({ _id: userId });
  const cart = user.cartitems;
  const changeQuantity = cart.map((el, i) => {
    return el._id == productId
      ? {
          ...el,
          quantity: qty == "plus" ? el.quantity++ : el.quantity--,
        }
      : el;
  });
  await userModel.updateOne(
    { _id: userId },
    { $set: { cartitems: changeQuantity } }
  );
  return res.send({ msg: "Product Quantity Added Succesfully" });
});

// Adding product to cart
cartRoutes.patch("/add/:id", async (req, res) => {
  // res.send(req.body);
  const productId = req.params.id;
  const product = await productModel.findOne({ _id: productId });

  const { userId } = req.body;
  const user = await userModel.findOne({ _id: userId });

  const cart = user.cartitems;
  // console.log(cart);
  const c = cart.map((el, i) => {
    return el.quantity;
  });
  // console.log(c);
  let y = cart.find((el) => {
    return el._id == productId;
  });
  if (y) {
    return res.send({ msg: `Already Added to Cart` });
  } else {
    await userModel.findByIdAndUpdate(
      { _id: userId },
      { $push: { cartitems: { ...product } } },
      { new: true }
    );
  }
  return res.send({ msg: "Product Added Successfully" });
});

// Delete Cart Item
cartRoutes.delete("/delete/:id", async (req, res) => {
  const product_id = req.params.id;
  const { userId } = req.body;
  // console.log(product_id);
  try {
    await userModel.updateOne(
      { _id: userId },
      { $pull: { cartitems: { _id: product_id } } }
    );
    res.send({ msg: "Product Item Deleted Successfull" });
  } catch (err) {
    res.send({ msg: `${product_id} Remove item failed` });
  }
});

module.exports = cartRoutes;
