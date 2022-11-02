const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");

/*
// GET
 */

homeRoutes.get("/", homeController.homePage);
homeRoutes.get("/signup", authController.getSignup);
homeRoutes.get("/login", authController.getLogin);
homeRoutes.get("/logout", authController.logout);

/* 
// POST
*/

homeRoutes.post("/signup", authController.postSignup);
homeRoutes.post("/login", authController.postLogin);

module.exports = homeRoutes;
