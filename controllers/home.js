const Model = require("../models/todoModel");

module.exports = {
  homePage: async (req, res) => {
    try {
      res.render("index.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
