const express = require("express");
const router = express.Router();
const { TripService } = require("../services");

router.get("/trips/:category", async (req, res) => {
	await TripService.getByCategory(req, res);
});

router.get("/trip/:id", async (req, res) => {
	await TripService.getById(req, res);
});

module.exports = router;
