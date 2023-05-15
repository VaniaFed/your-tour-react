const userPhotosModel = require("../models/user-photos");

const getUserPhotos = async (req, res) => {
	const userPhotos = await userPhotosModel.find();
	res.status(200).json(userPhotos);
};

module.exports = { getUserPhotos };
