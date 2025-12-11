const express = require("express");
const { handleUserSignUp, showSignUpPage } = require("../controllers/user");

const router = express.Router();

router.get("/", showSignUpPage);
router.post("/", handleUserSignUp);

module.exports = router;
