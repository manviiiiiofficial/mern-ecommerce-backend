const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  const data = await Category.create(req.body);
  res.json(data);
};

const getCategories = async (req, res) => {
  const data = await Category.find();
  res.json(data);
};

module.exports = { createCategory, getCategories };