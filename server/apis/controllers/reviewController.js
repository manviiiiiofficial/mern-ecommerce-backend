const Review = require("../models/reviewModel");


//  Create Review
const createReview = async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body;

    const review = await Review.create({
      userId,
      productId,
      rating,
      comment
    });

    res.status(201).json({
      message: "Review added successfully",
      data: review
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Get All Reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("userId")
      .populate("productId");

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Get Single Review
const getSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("userId")
      .populate("productId");

    res.json(review);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Update Review
const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Review updated",
      data: review
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Delete Review
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.json({ message: "Review deleted" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview
};