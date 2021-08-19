const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function toDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newOj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newOj);
    paintToDo(newOj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos;
    paresedToDos.forEach(paintToDo);
}