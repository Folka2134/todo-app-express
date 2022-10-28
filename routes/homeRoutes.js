const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");

//// GET
// get todos from database
// homeRoutes.get("/", homeController.getTodos);

// Go to homepage
homeRoutes.get("/", homeController.homePage);

homeRoutes.get("/signup", authController.signup);

homeRoutes.get("/signin", authController.signin);

module.exports = homeRoutes;
