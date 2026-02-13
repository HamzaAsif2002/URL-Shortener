const { getUser } = require("../service/auth");

const restrictToLogginUserOnly = (req, res, next) => {
  const userUid = req.cookies.uuid;

  if (!userUid) return res.redirect("/login");
  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  req.user = user;

  next();
};

module.exports = { restrictToLogginUserOnly };
