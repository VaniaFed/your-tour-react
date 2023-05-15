const directionModel = require("../models/direction");

const getDirections = async (req, res) => {
	const directions = await directionModel.find();
	res.status(200).json(directions);
};

module.exports = { getDirections };
