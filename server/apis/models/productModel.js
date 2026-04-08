const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },

  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand"
  },

  stock: Number,
  images: [String],
  ratings: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);