const USER = require("../models/user");

const showSignUpPage = (req, res) => {
  return res.render("signup");
};

const handleUserSignUp = (req, res) => {
  const { name, email, passward } = req.body;
  USER.create({
    name,
    email,
    passward,
  });
  return res.render("home");
};

module.exports = { handleUserSignUp, showSignUpPage };
