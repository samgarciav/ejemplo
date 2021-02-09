const list = document.getElementById("list");
console.log(list)

class Activitie {
  constructor(description) {
    this.timeId = new Date().getTime();
    this.description = description;
  }

  delete() {
  }

  display() {
    const li = document.createElement("li");
    li.innerHTML =
      ` <input type="checkbox" name="done" id="${this.timeId}" />
    <label for="${this.timeId}">${this.description}</label>
    <img src="images/close.png" alt="close" />
    `
    list.appendChild(li);
  }
}


function creatActivitie() {
  let description = document.getElementById("newActivitie").value;
  let activitie1 = new Activitie(description);
  activitie1.display();

}

const addBtn = document.getElementById("addNewActivitie");
addBtn.addEventListener("click", creatActivitie);

