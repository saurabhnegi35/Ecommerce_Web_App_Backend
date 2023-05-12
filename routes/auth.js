const express = require("express");
const router = express.Router();
//Import Middleware
const { authCheck } = require("../middlewares/auth");

//Controller
const { createOrUpdateUser } = require("../controllers/AuthController");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
