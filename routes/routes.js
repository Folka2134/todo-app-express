const express = require("express");
const Model = require("../models/model");
const routes = express.Router();

//// POST
// create new todo
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

//// PUT
// mark todo completed
routes.put("/completed", async (req, res) => {
  try {
    await Model.updateOne(
      {
        todo: req.body.todo,
      },
      {
        $set: {
          completed: true,
        },
      }
    );
    res.json("marked completed");
  } catch (error) {
    console.log(error);
  }
});

// mark todo uncompleted
routes.put("/uncompleted", async (req, res) => {
  try {
    await Model.updateOne(
      {
        todo: req.body.todo,
      },
      {
        $set: {
          completed: false,
        },
      }
    );
    res.json("unmarked completed");
  } catch (error) {
    console.log(error);
  }
});

//// DELETE
// delete todo
routes.delete("/deleteTodo", async (req, res) => {
  try {
    await Model.deleteOne({ todo: req.body.todo });
    res.json("Todo deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
