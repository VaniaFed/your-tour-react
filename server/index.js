const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");
const { handleError } = require("./helpers/error-handler");
require("dotenv").config();

const port = 3001;

const app = express();

app.use(
	cors({
		origin: "https://your-tour-react.vercel.app",
	})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

app.use((err, req, res) => {
	handleError(err, res);
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
