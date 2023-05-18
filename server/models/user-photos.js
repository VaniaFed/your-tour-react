const mongoose = require("mongoose");

const UserPhotosSchema = mongoose.Schema({
	title: String,
	src: String,
});

module.exports = mongoose.model("UserPhotos", UserPhotosSchema, "userPhotos");
