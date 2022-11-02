const Todo = require("../models/todoModel");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find({ userId: req.user.id });
      const itemsLeft = await Todo.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("todos.ejs", {
        todos: todoItems,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      await Todo.create({
        todo: req.body.todo,
        completed: false,
        userId: req.user.id,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  completeTodo: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoId },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  uncompleteTodo: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoId },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoId });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
