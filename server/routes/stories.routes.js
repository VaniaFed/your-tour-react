const express = require("express");
const router = express.Router();
const { StoryService } = require("../services");

router.get("/stories", async (req, res) => {
	await StoryService.getAll(req, res);
});

module.exports = router;
