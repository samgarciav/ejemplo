import { Task } from './modules/class.js'
import {summaryBtns, viewAll, viewDone, viewToDo, tasksLeft} from './modules/summary.js'

const taskLists = JSON.parse(localStorage.getItem("taskList"));
console.log(taskLists);
const addBtn = document.getElementById("addNewActivitie");
addBtn.addEventListener("click", creatTask);

window.onload = displayOnLoad();

function displayOnLoad() {
  if (localStorage.getItem("taskList") !== null) {
    summaryBtns();
    taskLists.forEach(task => {
      const retriveTask = new Task(task.timeId, task.description, task.ischeck);
      retriveTask.display(task);
      const li = [...document.querySelectorAll("li")];
      li.forEach(li => {
        if (li.querySelector("input").checked) {
          li.style.display = "none";
        }
      });
    });
    tasksLeft();
  }
}

function creatTask() {
  const timeId = new Date().getTime();
  const description = document.getElementById("newActivitie").value;
  const ischeck = ""
  const task = new Task(timeId, description, ischeck);
  console.log(task)
  task.display(task);
  task.save(task);
  document.getElementById("newActivitie").value = "";
}

