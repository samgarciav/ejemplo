const getPeople = (url) => {
  return fetch(url)                       // this fetch returns a promise (a function that will be called depending on the result, resolve or reject)
    // the fetch will return as an argument's promise a response Object
    .then((response) => {
      return response.json()                                  // this method will return a PROMISE, it is not yet the actual data
    }).then(data => data)
    .catch(err => console.log(err));
}

const page1 = () => {
  getPeople("https://swapi.dev/api/people/").then(response => {
    const personsArray = response.results;
    const divPersonas = document.getElementById('personas');
    divPersonas.innerHTML="";
    renderPersons(divPersonas, personsArray);
    divPersonas.appendChild(creatBtnNext(response));
  });
}

function creatBtnNext(response) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  if (response.next != null) {
    btn.innerHTML = "Next page";
    btn.addEventListener("click", nextpage.bind(response));
  } else {
    btn.innerHTML = "Go to start";
    btn.addEventListener("click", page1);
  }
  return btn;
}

function nextpage() {
  getPeople(this.next.replace("http","https")).then(response => {
    const personsArray = response.results;
    const divPersonas = document.getElementById('personas');
    divPersonas.innerHTML = "";
    renderPersons(divPersonas, personsArray);
    divPersonas.appendChild(creatBtnPrev(response));
    divPersonas.appendChild(creatBtnNext(response));
  });
}

function creatBtnPrev(response) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.innerHTML = "Previous page";
  btn.addEventListener("click", previouspage.bind(response));
  return btn;
}

function previouspage() {
  getPeople(this.previous).then(response => {
    const personsArray = response.results;
    const divPersonas = document.getElementById('personas');
    divPersonas.innerHTML = "";
    renderPersons(divPersonas, personsArray);
    divPersonas.appendChild(creatBtnPrev(response));
    divPersonas.appendChild(creatBtnNext(response));
  });
}

function renderPersons(divPersonas, personsArray) {
  personsArray.forEach(person => {
    divPersonas.appendChild(renderOnePerson(person));
  });
}

function renderOnePerson(person) {
  let div = document.createElement('div');
  div.innerHTML = `<h2>${person.name}</h2>
<ul>
<li> Gender: ${person.gender}</li> 
<li> Height: ${person.height}</li> 
</ul>`
  div.setAttribute("class", "singlePerson");
  return div;
}

page1();