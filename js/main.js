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
  },
  {
    label: "Week 4: Event Listener Practice",
    url: "week4/eventListeners.html"
  },
  {
    label: "Week 5: Hikes",
    url: "week5/hikes.html"
  },
  {
    label: "Week 5: Notes",
    url: "week5/notes.html"
  },
  {
    label: "Week 6: To Do App",
    url: "todo/index.html"
  },
  {
    label: "Week 7: Comments",
    url: "week7/hikes.html"
  },
  {
    label: "Week 8: Learning Notes",
    url: "week8/practice/index.html"
  },
  {
    label: "Week 8: FETCH",
    url: "week8/assignment/index.html"
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


