const todoText = document.querySelectorAll(".todo-text");
const deleteButton = document.querySelectorAll(".delete");

todoText.forEach((element) => {
  element.addEventListener("click", completedTodo);
});
deleteButton.forEach((element) => {
  element.addEventListener("click", deleteArtist);
});

async function completedTodo(element) {
  const todo = this.parentNode.childNodes[1];
  if (todo.classList.contains("completed")) {
    todo.classList.remove("completed");

    try {
      await fetch("api/completed", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: todo.innerText,
          completed: false,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    todo.classList.add("completed");

    try {
      await fetch("api/completed", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: todo.innerText,
          completed: true,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

async function deleteArtist() {
  const todo = this.parentNode.childNodes[1].innerText;
  try {
    await fetch("api/deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: todo,
      }),
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
