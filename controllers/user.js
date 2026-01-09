const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");

const { setUser } = require("../service/auth");

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  User.create({
    name,
    email,
    password,
  });

  return res.redirect("/");
};

const handleUserLogIn = async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({
    name,
    password,
  });

  if (!user) {
    return res.render("login", {
      error: "User does not exist",
    });
  }

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uuid", sessionId);
  return res.redirect("/");
};

module.exports = { handleUserSignUp, handleUserLogIn };
