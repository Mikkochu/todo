const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos")
const search = document.querySelector(".search input")

// Add todos
const generateTemplate = todo => {
    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    todos.innerHTML += html;

}

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo)

    if (todo.length > 2) {
        generateTemplate(todo);
        addForm.reset();
    }
})

// Delete todos
todos.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()  // li > i
    }
})




// Search todos
const filterTodos = searchTerm => {

    // filter out elements that do not match search term
    Array.from(todos.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))
        .forEach(todo => todo.classList.add("filtered")
        )

    // Match
    Array.from(todos.children)
        .filter(todo => todo.textContent.toLowerCase().includes(searchTerm))
        .forEach(todo => todo.classList.remove("filtered")
        )
}

search.addEventListener("keyup", e => {
    const searchTerm = search.value.trim().toLowerCase()
    filterTodos(searchTerm)
})

