const { Review } = require("../db");

const createReview = async (req, res) => {
  try {
    const { content } = req.body;
    const review = await Review.create({ content });
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating review" });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving reviews" });
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving review" });
  }
};

const updateReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    await review.update({ content });
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating review" });
  }
};

const deleteReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    await review.destroy();
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting review" });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
