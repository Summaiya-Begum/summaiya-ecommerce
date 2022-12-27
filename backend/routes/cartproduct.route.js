const { Router } = require("express");
const { productModel } = require("../models/Product.model");
const userModel = require("../models/User.model");
const cartRoutes = Router();

cartRoutes.get("/", async (req, res) => {
  const { userId } = req.body;
  const user = await userModel.findOne({ _id: userId });
  let cart = user.cartitems;
  const x = cart.map((el, i) => {
    return el.product_id;
  });
  const quantity = cart.map((el, i) => {
    return el.item_quantity;
  });
  const getProduct = await productModel.find({ _id: { $in: x } });
  console.log(getProduct);
  res.send({ getProduct, quantity });
});

cartRoutes.patch("/edit/:id", async (req, res) => {
  // res.send(req.body);
  const productId = req.params.id;

  const { userId } = req.body;
  const user = await userModel.findOne({ _id: userId });

  const cart = user.cartitems;
  let y = cart.find((el) => {
    return el.product_id == productId;
  });
  if (y) {
    const increaseQuantity = cart.map((el, i) => {
      if (el.product_id === productId) {
        return {
          ...el,
          item_quantity: el.item_quantity++,
        };
      }
    });
    await userModel.updateOne(
      { _id: userId },
      { $set: { cartitems: increaseQuantity } }
    );
  } else {
    // const new_obj = cart.push({ product_id: productId, item_quantity: 1 });
    const new_obj = [...cart, { product_id: productId, item_quantity: 1 }];
    await userModel.updateOne(
      { _id: userId },
      { $set: { cartitems: new_obj } }
    );
  }

  //   await userModel.updateOne({ _id: userId }, { $set: { cartitems: [obj] } });
  // console.log(user)
  res.send("updated successfully");
});

// Delete Cart Item
cartRoutes.delete("/edit/:id", (req, res) => {
  // const {}
});

module.exports = cartRoutes;
