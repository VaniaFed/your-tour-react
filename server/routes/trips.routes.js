const express = require("express");
const router = express.Router();
const tripsService = require("../services").tripsService;

router.get("/trips/:category", async (req, res) => {
	await tripsService.getTripsByCategory(req, res);
});

router.get("/trip/:id", async (req, res) => {
	await tripsService.getTripById(req, res);
});

module.exports = router;
