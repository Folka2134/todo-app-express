const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/home");

//// GET
// get todos from database
homeRoutes.get("/", homeController.getTodos);

module.exports = homeRoutes;
