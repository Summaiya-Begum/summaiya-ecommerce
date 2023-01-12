const jwt = require("jsonwebtoken");
require("dotenv").config();
const authentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) return res.send({ msg: "Please Login Your Account" });
    else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};
module.exports = authentication;
