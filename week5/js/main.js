import Hikes from './hikes.js';

const myCurrentHikes = new Hikes("hikes");
const oneHike = new Hikes('oneHike');

window.addEventListener("load", () => {
  myCurrentHikes.showHikeList();
  oneHike.showOneHike("Teton Canyon");
});

console.log(myCurrentHikes);
