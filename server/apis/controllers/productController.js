const Product = require("../models/productModel");

// Create Product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Product created", data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("categoryId")
      .populate("brandId");

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Product
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("categoryId")
      .populate("brandId");

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ message: "Product updated", data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};