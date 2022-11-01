const express = require("express");
const routes = express.Router();
const todoController = require("../controllers/todos");
const { ensureAuth } = require("../middleware/authMiddle");

// GET
// get todos from database
routes.get("/", ensureAuth, todoController.getTodos);

//// POST
// create new todo
routes.post("/newTodo", todoController.createTodo);

//// PUT
// mark todo completed
routes.put("/completed", todoController.completeTodo);

// mark todo uncompleted
routes.put("/uncompleted", todoController.uncompleteTodo);

//// DELETE
// delete todo
routes.delete("/deleteTodo", todoController.deleteTodo);

module.exports = routes;
