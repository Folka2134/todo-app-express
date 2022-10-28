const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");

/*
// GET
 */

homeRoutes.get("/", homeController.homePage);
homeRoutes.get("/signup", authController.signup);
homeRoutes.get("/signin", authController.signin);

module.exports = homeRoutes;
