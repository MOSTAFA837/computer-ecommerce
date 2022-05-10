const express = require("express");

const router = express.Router();

// controllers
const { createOrUpdateUser } = require("../controllers/auth");

// routes
router.get("/create-or-update-user", createOrUpdateUser);

module.exports = router;
