const mongoose = require("mongoose");

const BookstoreSchema = new mongoose.Schema(
  {
    image:{type:String , required:true},
    postedAt:{type:String, default: new Date().toLocaleDateString()},
    bookname:{type:String , required:true},
    author:{type:String , required:true},
    genre:{type:String , required:true},
    edition:{type:String , required:true},
    publisher:{type:String , required:true},
    price:{type:String , required:true},
    borrow:{type:Boolean , required:true}
  },
  {
    versionKey: false,
  }
);

const BookModel = mongoose.model("bookstore", BookstoreSchema);

module.exports = BookModel;
