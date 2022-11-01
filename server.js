const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo")(session);

// local modules
const homeRoutes = require("./routes/homeRoutes");
const todoRoutes = require("./routes/todoRoutes");
const connectDB = require("./config/database");

// Express setup
const app = express();
const PORT = 5001;

// MONGODB Setup
require("dotenv").config({ path: "./config/.env" });

connectDB();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
//session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// routes
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
