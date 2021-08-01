const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDolist = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function filterFn(toDo) {
    return toDo.id === 1;
}

function loadToDos() {
    const loaded_todos = localStorage.getItem(TODOS_LS);
    if (loaded_todos !== null) {
        const parsedToDos = JSON.parse(loaded_todos);
        parsedToDos.forEach(function (toDo) {
            showToDos(toDo.name);
        });
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDolist.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function showToDos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const todo = document.createElement("todo");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "✔";
    delBtn.classList.add("todo");
    delBtn.addEventListener("click", deleteToDo)
    span.innerHTML = text;
    li.appendChild(delBtn);
    delBtn.appendChild(todo);
    li.appendChild(span);
    li.id = newId;
    toDolist.appendChild(li);
    const toDoObject = {
        name: text,
        id: newId
    }
    toDos.push(toDoObject);
    saveToDos();
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDoinput.value;
    showToDos(currentValue);
    toDoinput.value = "";
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", submitHandler);
}

init();
