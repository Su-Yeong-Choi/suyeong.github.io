const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const TODO_KEY = "todos";
let todos = [];

function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmitTodoForm(e) {
    e.preventDefault();
    const todo = {
        id : Date.now(),
        text : todoInput.value
    };
    todos.push(todo);
    paintTodo(todo);
    saveTodos();
    todoInput.value = "";
}

todoForm.addEventListener("submit", handleSubmitTodoForm);

const savedTodos = localStorage.getItem(TODO_KEY);
if(savedTodos !== null) {
    const parsedTodos  = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
    todos = parsedTodos;
}