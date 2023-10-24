function addTask() {
    var taskText = document.getElementById("newTask").value;
    if (taskText) {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = taskText;
        li.onclick = function() {
            if (li.style.textDecoration === "line-through") {
                li.style.textDecoration = "none";
            } else {
                li.style.textDecoration = "line-through";
            }
        };
        taskList.appendChild(li);
        document.getElementById("newTask").value = "";
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        addTask();
    }
}