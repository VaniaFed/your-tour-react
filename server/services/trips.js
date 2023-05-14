const tripsModel = require("../models/trip");

const getTrips = async (req, res) => {
	const trips = await tripsModel.find();
	res.status(200).json(trips);
};

const getTripsByCategory = async (req, res) => {
	const { category } = req.params;
	const trips = await tripsModel.find({ category });
	res.status(200).json(trips);
};

module.exports = {
	getTrips,
	getTripsByCategory,
};
