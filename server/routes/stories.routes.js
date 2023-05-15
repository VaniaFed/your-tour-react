const express = require("express");
const router = express.Router();
const { storiesService } = require("../services");

router.get("/stories", async (req, res) => {
	await storiesService.getStories(req, res);
});

module.exports = router;
