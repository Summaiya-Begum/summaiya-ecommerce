const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    gender: { type: String, required: true },
    cartitems: [{ type: String, required: true }],
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
