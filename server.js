const express = require("express");
const mongoose = require("mongoose");

// local modules
const homeRoutes = require("./routes/homeRoutes");
const todoRoutes = require("./routes/todoRoutes");

// Express setup
const app = express();
const PORT = 5001;

// MONGODB Setup
require("dotenv").config();
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

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
