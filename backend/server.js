const express = require("express");
const dataConnection = require("./config/database");
const userModel = require("./models/User.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const productRoutes = require("./routes/products.route");
require("dotenv").config(); // read env file

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

// Sing up Process
app.post("/signup", (req, res) => {
  const { password } = req.body;
  try {
    bcrypt.hash(password, 6, async function (err, hash) {
      const user = new userModel({ ...req.body, password: hash });
      await user.save();
      res.send({ msg: "User Sign up successfull", user });
    });
  } catch (err) {
    console.log(err);
    res.status(404).send("signup failed");
  }
  // console.log(user)
});

// Login Process
app.post("/login", async(req, res) => {
    const {email,password} = req.body
    try {
        const hash =await userModel.findOne({email})
        //  res.send(JSON.stringify(hash.password))

        bcrypt.compare(password, hash.password, function(err, result) {
            // res.send(result)
        if(result){  
            const token = jwt.sign({ userId: hash._id }, 'shhhhh');
            res.send(token)
           const loginuser = req.body;
           res.send(loginuser)

       }else{
        res.send(err)
       }
    });
  } catch (err) {
    console.log(err);
  }
});


app.use("/products", productRoutes)

// console.log(process.env.PORT)
app.listen(process.env.PORT, async (req, res) => {
  try {
    await dataConnection;
    console.log(`Connection Connected With Database http://localhost:8080`);
  } catch (err) {
    console.log(err);
  }
});
