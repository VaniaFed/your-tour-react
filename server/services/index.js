require("../helpers/connect-mongo").connect();
const TripService = require("./trip-service");
const DirectionService = require("./direction-service");
const ReviewService = require("./review-service");
const PhotoService = require("./user-photos");
const StoryService = require("./story-service");

module.exports = {
	TripService,
	DirectionService,
	ReviewService,
	PhotoService,
	StoryService,
};
