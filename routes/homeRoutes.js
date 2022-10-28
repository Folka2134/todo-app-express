const express = require("express");
const homeRoutes = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");

/*
// GET
 */

homeRoutes.get("/", homeController.homePage);
homeRoutes.get("/signup", authController.getSignup);
homeRoutes.get("/signin", authController.getSignin);

/* 
// POST
*/

homeRoutes.post("/signup", authController.postSignup);
homeRoutes.post("/signin", authController.postSignin);

module.exports = homeRoutes;
