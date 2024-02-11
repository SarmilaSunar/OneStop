const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  product: String,
  price: Number,
  description:String,
  category: String,
  subCategory: String,
  
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;