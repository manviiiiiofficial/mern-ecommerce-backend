const Brand = require("../models/brandModel");

const createBrand = async (req, res) => {
  const data = await Brand.create(req.body);
  res.json(data);
};

const getBrands = async (req, res) => {
  const data = await Brand.find();
  res.json(data);
};

module.exports = { createBrand, getBrands };