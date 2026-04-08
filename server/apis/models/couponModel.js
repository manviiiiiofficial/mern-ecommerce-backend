const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  discountType: String, // flat / percentage
  minAmountSpent: Number,
  expiryDate: Date,
  status: String
});

module.exports = mongoose.model("Coupon", couponSchema);