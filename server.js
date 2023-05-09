const express = require("express");
// Import the Mongoose connection object from a separate module
const db = require("./config/mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
