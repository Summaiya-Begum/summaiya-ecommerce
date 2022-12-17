const express = require("express");
const dataConnection = require("./config/database");
const userModel = require("./models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const productRoutes = require("./routes/products.route");
const cors = require("cors");
const authentication = require("./middleware/authentication");
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
    console.log(user)
    if (!user) {
      bcrypt.hash(password, 6, async function (err, hash) {
        const newuser = new userModel({ ...req.body, password: hash });
        await newuser.save();
      });
      return res.send({ msg: "User Sign Up Successfull"});
    } else {
      return res.send({ msg: "User Is Already Signed up" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "Signup Failed" });
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
        const token = jwt.sign({ userId: hash._id }, process.env.SCERET_KEY);
        // res.send(token)
        res.send({ msg: "Login Successful",  token});
      } else {
        res.send({ msg: "Login Failed", err });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Product Route
// app.use(authentication)
app.use("/products", productRoutes);

// console.log(process.env.PORT)
app.listen(process.env.PORT, async (req, res) => {
  try {
    await dataConnection;
    console.log(`Connection Connected With Database http://localhost:8081`);
  } catch (err) {
    console.log(err);
  }
});
