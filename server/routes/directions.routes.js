const express = require("express");
const router = express.Router();
const directionsService = require("../services").directionsService;

router.get("/directions", async (req, res) => {
	await directionsService.getDirections(req, res);
});

module.exports = router;
