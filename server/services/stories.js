const storiesModel = require("../models/stories");

const getStories = async (req, res) => {
	const stories = await storiesModel.find();
	res.status(200).json(stories);
};

module.exports = { getStories };
