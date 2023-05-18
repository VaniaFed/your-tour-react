const mongoose = require("mongoose");

const TripSchema = mongoose.Schema({
	name: String,
	price: String,
	link: String,
	imgSrc: String,
	category: String,
});

module.exports = mongoose.model("Trip", TripSchema);
