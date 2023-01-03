const { Router } = require("express");
const userModel = require("../models/User.model");

const wishList = Router();

wishList.get("/", async (req, res) => {
  const { userId } = req.body;
  const user = await userModel.findOne({ _id: userId });
  const wishlistData = user.wishlist;

  // console.log(wishlistData);
  res.send({ Msg: "Welcome Wish Home List", wishData: wishlistData });
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

// Delete WishList Product

wishList.delete("/delete/:id", async (req, res) => {
  const { userId } = req.body;
  // console.log(userId)
  const productId = req.params.id;
  // console.log(productId)
  try {
    await userModel.updateOne(
      { _id: userId },
      { $pull: { wishlist: { _id: productId } } }
    );
    res.send({ msg: "WishList Product data is Deleted Successfull" });
  } catch (err) {
    res.send({ msg: "Something went wrong", err });
  }
});

module.exports = wishList;
