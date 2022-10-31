const express = require("express");
const mongoose = require("mongoose");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

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
//session
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );

// routes
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
