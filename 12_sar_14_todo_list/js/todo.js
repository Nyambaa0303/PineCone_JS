const taskInputEl = document.getElementById('taskInput');

const buttonEl = document.getElementById('btn');
const taskListEl = document.getElementById('taskList');
function addTask(){
    addTaskAdd();
}

function addTaskAdd(){

    let test = document.getElementsByClassName('text-secondary m-0 p-2')[0];
    test.innerHTML = ''
    const newTask = document.createElement('div');
    newTask.className= 'text-center mt-3 border border-1 rounded border-warning bg-light p-4 d-flex justify-content-between';
    const newTaskBody = document.createElement('div');
    newTaskBody.className = 'text-secondary m-0 p-2';
    let newTaskBodyText = document.getElementsByClassName(newTaskBody.className).innerHTML = taskInputEl.value;

    newTask.append(newTaskBodyText);
    taskListEl.append(newTask);

    
    // taskListEl.append(test.innerHTML)
    // taskInputEl.value = '';
}

buttonEl.addEventListener("click", addTask);
