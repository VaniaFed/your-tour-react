const directionModel = require("../models/direction");

const DirectionService = {
	getAll: async (req, res) => {
		const directions = await directionModel.find();
		res.status(200).json(directions);
	},
};

module.exports = DirectionService;
