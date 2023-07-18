const express = require("express");
const router = express.Router();

router.use("/", [
	require("./trips.routes"),
	require("./directions.routes"),
	require("./reviews.routes"),
	require("./user-photos.routes"),
	require("./stories.routes"),
]);

module.exports = router;
