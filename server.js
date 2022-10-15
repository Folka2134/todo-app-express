const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
