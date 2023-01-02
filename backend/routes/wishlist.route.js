const { Router } = require("express");
const userModel = require("../models/User.model");

const whishList = Router();

whishList.get("/", (req, res) => {
  res.send({ Msg: "Welcome Wish Home List" });
});
whishList.patch("/edit/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  const userId = req.body;
  console.log(userId);
  try {
    const wishlist = user.whishlist;
    const user = userModel.findById({ _id: userId });
    const alReadyAddedProd = await wishlist.find((id) => id === productId);
    console.log(alReadyAddedProd);
    if (alReadyAddedProd) {
      //    const userWish = await userModel.findByIdAndUpdate(
      //      _id,
      //      { $pull: { whishlist: productId } },
      //      { new: true }
      //    );
      //    res.send(userWish);
    } else {
      // const userWish = await userModel.findByIdAndUpdate(
      //   _id,
      //   { $push: { whishlist: productId } },
      //   { new: true }
      // );
      // res.send(userWish);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = whishList;
