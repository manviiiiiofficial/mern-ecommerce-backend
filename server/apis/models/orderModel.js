const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  couponApplied: Boolean,
  couponId: String,

  shippingAddress: String,
  totalAmount: Number,

  discount: Number,
  discountedPrice: Number,

  trackingUrl: String,
  paymentMethod: String,
  status: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);