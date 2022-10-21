const Model = require("../models/model");

module.exports = {
  createTodo: async (req, res) => {
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
  },
  completeTodo: async (req, res) => {
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
  },
  uncompleteTodo: async (req, res) => {
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
  },
  deleteTodo: async (req, res) => {
    try {
      await Model.deleteOne({ todo: req.body.todo });
      res.json("Todo deleted successfully");
    } catch (error) {
      console.log(error);
    }
  },
};
