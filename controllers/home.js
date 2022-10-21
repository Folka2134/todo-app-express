const Model = require("../models/model");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const data = await Model.find();
      res.render("index.ejs", { info: data });
    } catch (error) {
      console.log(error);
    }
  },
};
