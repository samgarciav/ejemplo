import Hikes from './hikes.js';

const myCurrentHikes = new Hikes("hikes");

window.addEventListener("load", () => {
  myCurrentHikes.showHikeList();
});
          
console.log(myCurrentHikes);