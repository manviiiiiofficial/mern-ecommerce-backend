const Enquiry = require("../models/enquiryModel");

const createEnquiry = async (req, res) => {
  const enquiry = await Enquiry.create(req.body);
  res.json(enquiry);
};

const getEnquiries = async (req, res) => {
  const data = await Enquiry.find().populate("userId");
  res.json(data);
};

module.exports = { createEnquiry, getEnquiries };