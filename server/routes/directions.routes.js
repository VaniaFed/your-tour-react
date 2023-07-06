const express = require("express");
const router = express.Router();
const { DirectionService } = require("../services");

router.get("/directions", async (req, res) => {
	await DirectionService.getAll(req, res);
});

module.exports = router;
