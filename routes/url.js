const express = require("express");
const {
  handleGenerateUrl,
  handleRedirectUrl,
  handleGetAnalytics,
  handleShowAllUrls,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateUrl);
router.get("/", handleShowAllUrls);
router.get("/:id", handleRedirectUrl);
router.get("/analytic/:id", handleGetAnalytics);

module.exports = router;
