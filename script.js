let taskList = document.getElementById('taskList');

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement('li');
    li.textContent = taskText;

    let editButton = document.createElement('button');
    editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
    editButton.onclick = function () {
        editTask(li);
    };

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(task) {
    // Le texte est dans le premier nœud texte (car li.textContent = taskText)
    let taskText = task.firstChild?.textContent ?? '';

    let newTaskText = prompt('Modifier la tâche:', taskText);

    if (newTaskText === null) return;
    newTaskText = newTaskText.trim();
    if (newTaskText === "") return;

    task.firstChild.textContent = newTaskText;
}

function deleteTask(task) {
    if (!taskList) return;
    if (task && task.parentNode === taskList) {
        taskList.removeChild(task);
    }
}

