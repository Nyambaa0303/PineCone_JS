const taskInputEl = document.getElementById("taskInput");
const buttonEl = document.getElementById("btn");
const taskListEl = document.getElementById("taskList");

document.getElementById("date").innerHTML =
  "Он сар өдөр : " +
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getDate();

function addTask() {
  addTaskAdd();
}

function addTaskAdd() {
  const sec = new Date().getSeconds();
  if (taskInputEl.value !== "") {
    //   bvten cardiig aguulj baigaa class buyuu tag
    const newTask = document.createElement("div");
    newTask.className =
      "text-center mt-3 border border-1 rounded border-warning bg-light p-4 d-flex justify-content-between";

    // task name ug oroh div
    const newTaskBody = document.createElement("div");
    newTaskBody.className = "text-secondary m-0 p-2";

    //   buttonii gaduurhi uusgesen div
    const taskBody2 = document.createElement("div");
    taskBody2.className = "button";

    //   hamgiin ehnii button uzegnii zuragtai:
    const taskBodyBtn = document.createElement("button");
    taskBodyBtn.className = "btn toggle";

    //   button tovch dotorhi ocin
    const taskButtonIcon = document.createElement("i");
    taskButtonIcon.className = "bi bi-pen-fill text-secondary";

    //  hoyr dahi button
    const taskBodyBtn2 = document.createElement("button");
    taskBodyBtn2.className = "btn check";

    //   button tovch dotorhi ocin
    const taskButtonIcon2 = document.createElement("i");
    taskButtonIcon2.className = "bi bi-bag-check-fill text-success";

    //  gurav dahi button
    const taskBodyBtn3 = document.createElement("button");
    taskBodyBtn3.className = "btn delete";

    //   button tovch dotorhi ocin
    const taskButtonIcon3 = document.createElement("i");
    taskButtonIcon3.className = "bi bi-trash-fill text-danger";

    let newTaskBodyText = (document.getElementsByClassName(
      newTaskBody.className
    ).innerHTML = taskInputEl.value);

    //   uzegnii zuragtai button
    taskBodyBtn.append(taskButtonIcon);
    taskBody2.append(taskBodyBtn);

    // check nogoon button
    taskBodyBtn2.append(taskButtonIcon2);
    taskBody2.append(taskBodyBtn2);

    //   trashnii zuragtqi button
    taskBodyBtn3.append(taskButtonIcon3);
    taskBody2.append(taskBodyBtn3);

    //   shine uusgesen elemtuud
    newTask.append(newTaskBody);
    //   inputiin valueg div d oruulj ogov
    newTaskBody.append(taskInputEl.value);
    newTask.append(newTaskBody);
    newTask.append(taskBody2);
    taskListEl.append(newTask);
    taskInputEl.value = "";
    newTask.id = `par${sec}`;
    taskBodyBtn3.id = `delete${sec}`;

    updateCount();
  }
}

buttonEl.addEventListener("click", addTask);

const deleteButton = document.getElementById(`delete${sec}`);
const deleteTask = document.getElementById(`par${sec}`);

function removeTask(id) {
  if (confirm("Ustgah uu?")) {
    document.getElementById(id).remove();
    updateCount();
  }
}

function updateCount() {
  document.getElementById("countNumber").innerHTML =
    taskListEl.childNodes.length;
}

deleteButton.removeEventListener("click", removeTask);
