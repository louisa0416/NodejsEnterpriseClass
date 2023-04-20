const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users");
const handleErrorAsync = require("../service/handleErrorAsync");
const { isAuth } = require("../service/auth");

router.get("/", handleErrorAsync(userControllers.getUser));
router.post("/sign_up", handleErrorAsync(userControllers.createUser));
router.post("/sign_in", handleErrorAsync(userControllers.sign_inUser));
router.post("/test", isAuth, handleErrorAsync(userControllers.testUser));

module.exports = router;
