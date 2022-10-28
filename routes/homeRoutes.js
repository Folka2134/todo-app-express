const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/home");

//// GET
// get todos from database
// homeRoutes.get("/", homeController.getTodos);

// Go to homepage
homeRoutes.get("/", homeController.homePage);

homeRoutes.get("/signup", homeController.signup);

homeRoutes.get("/signin", homeController.signin);

module.exports = homeRoutes;
