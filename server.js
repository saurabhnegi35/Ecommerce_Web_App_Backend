const express = require("express");
// Import the Mongoose connection object from a separate module
const db = require("./config/mongoose");
// Import the application routes from a separate module
const routes = require("./routes/index");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 7000;

require("dotenv").config();

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// Mount the application routes at the root path
app.use("/", routes);

app.listen(PORT || process.env.PORT, () => {
  console.log(`Listening on port ${PORT || process.env.PORT}`);
});
