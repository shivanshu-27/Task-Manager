const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;

    if(taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}