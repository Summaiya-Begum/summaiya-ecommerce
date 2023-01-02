const { Router } = require("express");
const userModel = require("../models/User.model");

const wishList = Router();

wishList.get("/", (req, res) => {
  res.send({ Msg: "Welcome Wish Home List" });
});

wishList.patch("/edit/:id", async (req, res) => {
  const productId = req.params.id;
  const { userId } = req.body;
  try {
    const user = await userModel.findOne({ _id: userId });
    const wishlist = user.wishlist;
    const alReadyAddedProd = wishlist.find(
      (el, i) => el.product_id === productId
    );
    console.log(alReadyAddedProd);
    if (alReadyAddedProd) {
      return res.send({ msg: "Product Already Added in Wishlist" });
    } else {
      const userWish = await userModel.findByIdAndUpdate(
        { _id: userId },
        { $push: { wishlist: { product_id: productId } } }
        //   { new: true }
      );
      return res.send({
        msg: "Product Added Successfull in Wishlist",
        userWish,
      });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = wishList;
