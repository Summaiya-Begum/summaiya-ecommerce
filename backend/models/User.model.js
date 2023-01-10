const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    gender: { type: String, required: true },
    cartitems: [
      {
        _id: { type: String, required: true },
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
        quantity: { type: Number, default: 1 },
      },
    ],
    wishlist: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = new mongoose.model("user", UserSchema);
module.exports = userModel;

// first name
// last name
// email
// password
// phone number
// gender
// cart items
// wishlist
