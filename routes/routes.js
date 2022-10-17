const express = require("express");
const Model = require("../models/model");
const routes = express.Router();

//// EndPoints

// POST
routes.post("/newTodo", async (req, res) => {
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

// PUT

routes.put("/completed", async (req, res) => {
  try {
    await Model.updateOne({
      todo: req.body.todo,
      completed: req.body.completed,
    });
    res.json("Todo updated successfully");
  } catch (error) {
    console.log(error);
  }
});

// DELETE
routes.delete("/deleteTodo", async (req, res) => {
  try {
    await Model.deleteOne({ todo: req.body.todo });
    res.json("Todo deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
