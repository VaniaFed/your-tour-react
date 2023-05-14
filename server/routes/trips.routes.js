const express = require("express");
const router = express.Router();
const tripsService = require("../services").tripsService;

// router.get("/trips/", async (req, res) => {
// 	await tripsService.getTrips(req, res);
// });

router.get("/trips/:category", async (req, res) => {
	await tripsService.getTripsByCategory(req, res);
});

// router.post('/add-lesson/', async (req, res) => {
//   await tripsService.addLesson(req, res);
// });

// router.patch('/edit-lesson/', async (req, res) => {
//   await lessonsService.editLesson(req, res);
// });

module.exports = router;
