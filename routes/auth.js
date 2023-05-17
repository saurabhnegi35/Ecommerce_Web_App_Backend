const express = require("express");
const router = express.Router();
//Import Middleware
const { authCheck } = require("../middlewares/auth");

//Controller
const { createOrUpdateUser, currentUser } = require("../controllers/AuthController");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/create-user", authCheck, currentUser);

module.exports = router;
