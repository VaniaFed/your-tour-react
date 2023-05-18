const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
	tripName: String,
	userName: String,
	userAvatarSrc: String,
	text: [String],
});

module.exports = mongoose.model("Review", ReviewSchema);
