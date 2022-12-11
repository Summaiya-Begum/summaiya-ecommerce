const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
require("dotenv").config() 
const dataConnection = mongoose.connect(process.env.MONGO_URL);
module.exports = dataConnection;
