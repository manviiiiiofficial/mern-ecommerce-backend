const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.find().populate("userId");
  res.json(orders);
};

module.exports = { createOrder, getOrders };