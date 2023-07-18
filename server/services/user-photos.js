const userPhotosModel = require("../models/user-photos");

const PhotoService = {
	getAll: async (req, res) => {
		const userPhotos = await userPhotosModel.find();
		res.status(200).json(userPhotos);
	},
};

module.exports = PhotoService;
