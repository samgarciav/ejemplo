function summaryBtns() {
  const summaryBtns = [...document.querySelectorAll(".summaryBtns")];
  summaryBtns.forEach(sb => sb.style.display = "grid");
  summaryBtns[1].addEventListener("click", viewAll);
  summaryBtns[2].addEventListener("click", viewToDo);
  summaryBtns[3].addEventListener("click", viewDone);
}

function tasksLeft() {
  const pending = document.getElementById("pending");
  const li = [...document.getElementsByTagName("li")];
  let tasksLeft = 0;
  li.forEach(li => {
    if (!li.querySelector("input").checked) {
      return tasksLeft++;
    }
  })
  pending.innerText = tasksLeft;
};

function viewAll() {
  const li = [...document.getElementsByTagName("li")];
  li.forEach(e => e.style.display = "grid");
};

function viewToDo() {
  const li = document.querySelectorAll("li");
  li.forEach(li => {
    li.style.display = "none"
    if (!li.querySelector("input").checked) {
      li.style.display = "grid";
    }
  })
};

function viewDone() {
  const li = document.querySelectorAll("li");
  li.forEach(li => {
    li.style.display = "none"
    if (li.querySelector("input").checked) {
      li.style.display = "grid";
    }
  })
};

export {summaryBtns, viewAll, viewDone, viewToDo, tasksLeft}