const tripModel = require("../models/trip");

const getTrips = async (req, res) => {
	const trips = await tripModel.find();
	res.status(200).json(trips);
};

const getTripsByCategory = async (req, res) => {
	const { category } = req.params;
	const trips = await tripModel.find({ category });
	res.status(200).json(trips);
};

const getTripById = async (req, res) => {
	const { id } = req.params;
	const trip = await tripModel.findById(id);
	res.status(200).json(trip);
};

module.exports = {
	getTrips,
	getTripsByCategory,
	getTripById,
};
