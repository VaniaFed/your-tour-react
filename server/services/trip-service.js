const tripModel = require("../models/trip");

const TripService = {
	getAll: async (req, res) => {
		const trips = await tripModel.find();
		res.status(200).json(trips);
	},
	getByCategory: async (req, res) => {
		const { category } = req.params;
		const trips = await tripModel.find({ category });
		res.status(200).json(trips);
	},
	getById: async (req, res) => {
		const { id } = req.params;
		try {
			const trip = await tripModel.findById(id);
			res.status(200).json(trip);
		} catch (err) {
			res.status(404).json(err);
		}
	},
};

module.exports = TripService;
