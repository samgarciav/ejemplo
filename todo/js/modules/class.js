import {summaryBtns, viewAll, viewDone, viewToDo, tasksLeft} from './summary.js'

export class Task {
  constructor(timeId, description, ischeck) {
    this.timeId = timeId
    this.description = description;
    this.ischeck = ischeck;
  }

  display(task) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.innerHTML = ` 
    <input type="checkbox" name="checkbox" id="${this.timeId}" ${this.ischeck}/>
    <label for="${this.timeId}">${this.description}</label>
    <img src="images/close.png" alt="close" class="hide"/>
    `
    list.appendChild(li);

    this.hideTask(li);
    this.check(li, task);
  }

  hideTask(task) {
    console.log(task);
    const hideBtn = document.querySelector('label[for="' + this.timeId + '"]+img');
    console.log(hideBtn);
    hideBtn.addEventListener("click", function () {
      task.style.display = "none";
    })
  }

  save(task) {
    summaryBtns(); 
    tasksLeft();
    if (localStorage.getItem("taskList") == null) {
      const taskList = [];
      taskList.push(task);
      localStorage.setItem("taskList", JSON.stringify(taskList))
    } else {
      const taskList = JSON.parse(localStorage.getItem("taskList"))
      taskList.push(task);
      localStorage.setItem("taskList", JSON.stringify(taskList))
    }
  }

  check(li, task) {
    console.log(li);
    const input = li.querySelector("input");
    console.log(input);
    input.addEventListener('change', function () {
      tasksLeft();
      if (input.checked) {
        const taskList = JSON.parse(localStorage.getItem("taskList"));
        const i = taskList.findIndex(element => element.timeId == task.timeId)
        taskList[i].ischeck = "checked";
        localStorage.setItem("taskList", JSON.stringify(taskList));
      } else {
        const taskList = JSON.parse(localStorage.getItem("taskList"));
        const i = taskList.findIndex(element => element.timeId == task.timeId)
        taskList[i].ischeck = "";
        localStorage.setItem("taskList", JSON.stringify(taskList));
      }
    });
  }
}