class ErrorHandler extends Error {
	constructor(statusCode, message) {
		super();
		this.statusCode = statusCode;
		this.message = message;
	}
}

const handleError = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500);
	res.render("error", { error: err });
};

module.exports = {
	ErrorHandler,
	handleError,
};
