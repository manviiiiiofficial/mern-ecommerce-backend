const Coupon = require("../models/couponModel");

// Create Coupon
const createCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.status(201).json({ message: "Coupon created", data: coupon });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Coupons
const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Coupon
const getSingleCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    res.json(coupon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Coupon
const updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Coupon updated", data: coupon });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Coupon
const deleteCoupon = async (req, res) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.json({ message: "Coupon deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon
};