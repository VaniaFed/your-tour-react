const express = require("express");
const router = express.Router();
const reviewsService = require("../services").reviewsService;

router.get("/reviews", async (req, res) => {
	await reviewsService.getReviews(req, res);
});

module.exports = router;
