const express = require("express");
const URL = require("../models/url");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  const userUid = req.cookies.uuid;
  if (!userUid) return res.render("home");

  const URLs = await URL.find({});
  return res.render("home", { URLs });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
