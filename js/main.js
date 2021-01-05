const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week 2",
    url: "week2/index.html"
  }
];

var ol = document.getElementsByTagName('ol')[0];

links.forEach((el,i)=>{
let li = document.createElement('li');
let a = document.createElement('a');
ol.appendChild(li);
a.setAttribute('href', links[i].url);
li.appendChild(a);
a.innerHTML = links[i].label;
});


