const express = require("express");
const Model = require("../models/model");
const homeRoutes = express.Router();

//// GET
// get todos from database
homeRoutes.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.render("index.ejs", { info: data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = homeRoutes;
