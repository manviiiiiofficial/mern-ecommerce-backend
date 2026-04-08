const Customer = require("../models/customerModel");

// Create Customer
const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({ message: "Customer created", data: customer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("userId");
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Customer
const getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate("userId");
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Customer
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Customer updated", data: customer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Customer
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
};