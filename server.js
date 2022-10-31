const express = require("express");
// const mongoose = require("mongoose");

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

// routes
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
