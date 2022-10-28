const Model = require("../models/todoModel");

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
    try {
      res.render("signin.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  postSignin: async (req, res) => {
    try {
      res.render("signin.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
