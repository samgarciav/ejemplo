const list=document.getElementById("list");
console.log(list)


const ul=document.createElement("ul");
list.appendChild(ul)
const li = document.createElement("li")
li.innerHTML='Hola mundo';
ul.appendChild(li);