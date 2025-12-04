const shortid = require("shortid");
const URL = require("../models/url");

const handleGenerateUrl = async (req, res) => {
  const body = req.body;
  const URLs = await URL.find({});
  if (!body.url) return res.status(400).json({ error: "Url not provided" });
  const shortID = shortid.generate();

  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.render("home", { shortId: shortID, URLs });
  //   return res.json({ id: shortID });
};

const handleShowAllUrls = async (req, res) => {
  const URLs = await URL.find({});
  return res.render("home", { URLs });
};

const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.id;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timeStimeStamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectUrl);
};

const handleGetAnalytics = async (req, res) => {
  const id = req.params.id;

  const result = await URL.findOne({ shortId: id });

  res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

module.exports = {
  handleGenerateUrl,
  handleRedirectUrl,
  handleGetAnalytics,
  handleShowAllUrls,
};
