const reviewModel = require("../models/review");

const getReviews = async (req, res) => {
	const reviews = await reviewModel.find();
	res.status(200).json(reviews);
};

module.exports = { getReviews };
