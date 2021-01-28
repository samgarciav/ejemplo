const links = [
  {
    label: "Week1: Practicing localStorage",
    url: "week1/index.html"
  },
  {
    label: "Week 2: Reading Inputs and Calculator",
    url: "week2/week2.html"
  },
  {
    label: "Week 3: Notes an team activity",
    url: "week3/week3.html"
  },  
  {
    label: "Week 4: Notes from the readings and Tic Tac Toe",
    url: "week4/week4a.html"
  }
];

var ol = document.getElementsByTagName('ol')[0];

links.forEach((el, i) => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  ol.appendChild(li);
  a.setAttribute('href', links[i].url);
  li.appendChild(a);
  a.innerHTML = links[i].label;
});


