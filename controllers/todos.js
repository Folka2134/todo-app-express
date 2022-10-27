const Model = require("../models/todoModel");

module.exports = {
  createTodo: async (req, res) => {
    const todo = new Model({
      todo: req.body.todo,
      completed: false,
    });
    try {
      await todo.save();
      res.redirect("/todos");
    } catch (error) {
      console.log(error);
    }
  },
  getTodos: async (req, res) => {
    try {
      const data = await Model.find();
      res.render("todos.ejs", { info: data });
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
      await Model.deleteOne({ _id: req.body.id });
      res.json("Todo deleted successfully");
    } catch (error) {
      console.log(error);
    }
  },
};
