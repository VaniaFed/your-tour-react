const express = require("express");
const router = express.Router();

router.use("/", [require("./trips.routes")]);

module.exports = router;
