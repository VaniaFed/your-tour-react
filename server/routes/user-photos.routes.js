const express = require("express");
const router = express.Router();
const userPhotosService = require("../services").userPhotosService;

router.get("/user-photos", async (req, res) => {
	await userPhotosService.getUserPhotos(req, res);
});

module.exports = router;
