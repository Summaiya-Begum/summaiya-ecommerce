const express = require("express");
const dataConnection = require("./config/database");
const userModel = require("./models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const productRoutes = require("./routes/products.route");
const authentication = require("./middleware/authentication");
const cartRoutes = require("./routes/cartproduct.route");
const wishList = require("./routes/wishlist.route");
require("dotenv").config(); // read env file

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello server");
});

// Sing up Process
app.post("/signup", async (req, res) => {
  const { password, email } = req.body;
  try {
    let user = await userModel.findOne({ email });
    // console.log(user);
    if (!user) {
      bcrypt.hash(password, 6, async function (err, hash) {
        const newuser = new userModel({ ...req.body, password: hash });
        await newuser.save();
      });
      return res.send({ msg: "User Sign Up Successfull" });
    } else {
      return res.send({ msg: "User Already Exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "User Is Already Signed up" });
  }
  // console.log(user)
});

// Login Process
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hash = await userModel.findOne({ email });
    //  res.send(JSON.stringify(hash.password))
    bcrypt.compare(password, hash.password, function (err, result) {
      // res.send(result)
      if (result) {
        const token = jwt.sign({ userId: hash._id }, process.env.SECRET_KEY);
        // res.send(token)
        res.send({ msg: "Login Successful", token });
      } else {
        res.send({ msg: "Login Failed", err });
      }
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/user", authentication, async (req, res) => {
  const { userId } = req.body;
  const user = await userModel.findOne({ _id: userId });
  res.send({ user });
});
//  Routers
app.use("/products", productRoutes);
app.use("/cart", authentication, cartRoutes);
app.use("/wishlist", authentication, wishList);
// console.log(process.env.PORT)
app.listen(process.env.PORT, async (req, res) => {
  try {
    await dataConnection;
    console.log(`Connection Connected With Database http://localhost:8081`);
  } catch (err) {
    console.log(err);
  }
});
