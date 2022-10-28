const userModel = require("../models/userModel");

module.exports = {
  getSignup: async (req, res) => {
    try {
      res.render("signup.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getSignin: async (req, res) => {
    try {
      res.render("signin.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  postSignup: async (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
      const user = userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      try {
        await user.save();
        res.redirect("/todos");
      } catch (error) {
        console.log(error);
      }
    }
  },
  postSignin: async (req, res) => {
    const user = await userModel.find();
    if (user.find((uname) => uname.username === req.body.username)) {
      try {
        res.redirect("/todos");
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(404).send("user not found");
    }
  },
};
