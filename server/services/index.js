require("./connect-mongo").connect();
const tripsService = require("./trips");

module.exports = { tripsService };
