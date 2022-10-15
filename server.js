const express = require("express");
const mongoose = require("mongoose");

// local modules
const Model = require("./models/model");

// Express setup
const app = express();
const PORT = 5000;

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

app.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.render("index.ejs", { info: data });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
