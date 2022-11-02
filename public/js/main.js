const deleteButton = document.querySelectorAll(".delete");
const todoText = document.querySelectorAll(".todo .todo-text");
const itemCompleted = document.querySelectorAll(".todo span.completed");

// event listeners
deleteButton.forEach((element) => {
  element.addEventListener("click", deleteTodo);
});
todoText.forEach((element) => {
  element.addEventListener("click", completedTodo);
});
itemCompleted.forEach((element) => {
  element.addEventListener("click", uncompletedTodo);
});

// complete todo
async function completedTodo(element) {
  const Todo = this.parentNode.childNodes[1];
  const todoId = this.parentNode.dataset.id;
  if (!Todo.classList.contains("completed")) {
    //Add completed
    Todo.classList.add("completed");

    try {
      const response = await fetch("todos/completed", {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          todoId: todoId,
        }),
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  }
}

// uncomplete todo
async function uncompletedTodo(element) {
  const Todo = this.parentNode.childNodes[1];
  const todoId = this.parentNode.dataset.id;
  if (Todo.classList.contains("completed")) {
    //Remove completed
    Todo.classList.remove("completed");

    try {
      const response = await fetch("todos/uncompleted", {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          todoId: todoId,
        }),
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  }
}

// delete todo
async function deleteTodo() {
  const Todo = this.parentNode.dataset.id;
  try {
    await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todoId: Todo,
      }),
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
