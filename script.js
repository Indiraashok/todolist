document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        const label = document.createElement("label");
        label.textContent = taskText;
        const deleteBtn =document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.classList.add("delete-btn");

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        deleteBtn.addEventListener("click",function(){
            taskList.removeChild(li);
        });
    }
});