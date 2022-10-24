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
  const todo = this.parentNode.childNodes[1];
  if (!todo.classList.contains("completed")) {
    //Add completed
    todo.classList.add("completed");

    try {
      await fetch("api/completed", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: todo.innerText,
        }),
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}

// uncomplete todo
async function uncompletedTodo(element) {
  const todo = this.parentNode.childNodes[1];
  if (todo.classList.contains("completed")) {
    //Remove completed
    todo.classList.remove("completed");

    try {
      await fetch("api/uncompleted", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: todo.innerText,
        }),
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}

// delete todo
async function deleteTodo() {
  const todo = this.parentNode.dataset.id;
  try {
    await fetch("api/deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: todo,
      }),
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
