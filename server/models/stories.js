const mongoose = require("mongoose");

const StoriesSchema = mongoose.Schema({
	label: String,
	value: String,
});

module.exports = mongoose.model("Stories", StoriesSchema);
