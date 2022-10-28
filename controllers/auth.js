const Model = require("../models/todoModel");

module.exports = {
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
