const mongoose = require("mongoose");

const connect = () => {
	return mongoose.connect(
		"mongodb+srv://root:F6A0c5aLWYLiRRtE@your-tour.rlzq4ra.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
};

module.exports = {
	connect,
};
