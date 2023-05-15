const mongoose = require("mongoose");

const DirectionSchema = mongoose.Schema({
	label: String,
	value: String
});

module.exports = mongoose.model("Direction", DirectionSchema);
