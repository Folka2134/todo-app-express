const Model = require("../models/todoModel");

module.exports = {
  homePage: async (req, res) => {
    try {
      res.render("index.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  signup: async (req, res) => {
    try {
      res.render("signup.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  signin: async (req, res) => {
    try {
      res.render("signin.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
