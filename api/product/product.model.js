const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;