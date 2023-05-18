require("./connect-mongo").connect();
const tripsService = require("./trips");
const directionsService = require("./directions");
const reviewsService = require("./reviews");
const userPhotosService = require("./user-photos");
const storiesService = require("./stories");

module.exports = {
	tripsService,
	directionsService,
	reviewsService,
	userPhotosService,
	storiesService,
};
