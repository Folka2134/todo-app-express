const todoText = document.querySelectorAll(".todo-text");
const deleteButton = document.querySelectorAll(".delete");

deleteButton.forEach((element) => {
  element.addEventListener("click", deleteArtist);
});

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
