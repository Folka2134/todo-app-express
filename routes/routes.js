const express = require("express");
const Model = require("../models/model");
const routes = express.Router();

//// EndPoints

// POST

routes.post("/newTodo", async (req, res) => {
  // console.log(req.body.todo);
  const todo = new Model({
    todo: req.body.todo,
    completed: false,
  });
  try {
    await todo.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
