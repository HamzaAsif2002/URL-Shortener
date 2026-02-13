const User = require("../models/user");

const { setUser } = require("../service/auth");

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  User.create({
    name,
    email,
    password,
  });

  return res.render("login");
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

  const token = setUser(user);
  res.cookie("uuid", token);
  return res.redirect("/");
};

module.exports = { handleUserSignUp, handleUserLogIn };
