const express = require("express");
const router = express.Router();
const { ReviewService } = require("../services");

router.get("/reviews", async (req, res) => {
	await ReviewService.getAll(req, res);
});

module.exports = router;
