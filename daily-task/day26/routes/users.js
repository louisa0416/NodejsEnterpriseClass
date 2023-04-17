const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users");
const handleErrorAsync = require("../service/handleErrorAsync");

router.get("/", handleErrorAsync(userControllers.getUser));
router.post("/sign_up", handleErrorAsync(userControllers.createUser));

module.exports = router;
