const express = require("express");
const router = express.Router();
const { PhotoService } = require("../services");

router.get("/user-photos", async (req, res) => {
	await PhotoService.getAll(req, res);
});

module.exports = router;
