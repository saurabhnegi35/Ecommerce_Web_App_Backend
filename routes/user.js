const express = require("express");
const router = express.Router();
const {user} = require('../controllers/UserController')

router.get("/user", user);

module.exports = router;