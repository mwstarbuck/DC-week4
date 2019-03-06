let taskTextBox = document.getElementById("taskTextBox");
let addButton = document.getElementById("addButton");
let taskHolder = document.getElementById("taskHolder");
let completedHolder = document.getElementById("completedHolder");

addButton.addEventListener('click', function () {
    if (taskTextBox.value == "") {
        alert("Please enter a valid task.")
    } else {
        let taskBox = document.createElement('div');
        taskBox.className = 'taskBox';
        let p = document.createElement('p');
        let check = document.createElement('input');
        let remover = document.createElement('button');
        remover.className = 'removeBtn';
        remover.innerHTML = 'remove';
        check.type = 'checkbox';
        check.className = 'check';
        p.innerHTML = taskTextBox.value;
        taskBox.appendChild(check);
        taskBox.appendChild(p);
        taskBox.appendChild(remover)
        taskHolder.appendChild(taskBox);
        taskTextBox.value = "";
    }

})

function completeTask(e) {
    let elem = e.target.parentElement;
    let copy = elem.cloneNode(true);
    elem.parentElement.removeChild(elem);
    completedHolder.appendChild(copy);
}
function reDoTask(e) {
    let elem = e.target.parentElement;
    let copy = elem.cloneNode(true);
    elem.parentElement.removeChild(elem);
    taskHolder.appendChild(copy);
}
function removeTask(e) {
    if (e.target.className === 'removeBtn') {
        let elem = e.target.parentElement;
        elem.parentElement.removeChild(elem);
    }
}

taskHolder.addEventListener('change', completeTask);
taskHolder.addEventListener('click', removeTask)
completedHolder.addEventListener('change', reDoTask)
completedHolder.addEventListener('click', removeTask)
