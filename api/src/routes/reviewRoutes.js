const {Router} = require('express');
const {createReview, getReviews, getReviewById, updateReviewById, deleteReviewById} = require ("../controllers/review.controller");
const reviewRoutes = Router();


reviewRoutes.get("/", getReviews)
reviewRoutes.get("/:reviewId", getReviewById)
reviewRoutes.post("/", createReview)
reviewRoutes.put("/:reviewId", updateReviewById)
reviewRoutes.delete("/:reviewId", deleteReviewById)

module.exports = reviewRoutes;