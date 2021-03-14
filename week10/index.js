/* import { getJSON, getLocation } from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const position = await getLocation();
console.log(position);
console.log(position.coords);
let lat = position.coords.latitude;
let lon = position.coords.longitude;

let url = `${baseUrl}&latitude=${lat}&longitude=${lon}&maxradiuskm=1000`;

const quakeList = await getJSON(url);
console.log(quakeList);

const listElement = document.getElementById('quakeList');
quakeList.features.forEach(element => {
  const li = document.createElement('li');
  li.setAttribute('data-id', element.id);
  li.innerHTML = `<h2>${element.properties.title}</h2>
  <p>${new Date(element.properties.time)}</p>`;
  listElement.appendChild(li);
});

const element = document.getElementById('quakeList');
const quakeProperties = Object.entries(quakeList.features[0].properties);
quakeProperties.forEach(propertie => {
  const li = document.createElement('li');
  if (propertie[0] == 'time' || propertie[0] == 'updated') {
    li.innerHTML = `<p class="propertie"><span>${propertie[0]}:</span> ${new Date(propertie[1])}</p>`
  } else {
    li.innerHTML = `<p class="propertie"><span>${propertie[0]}:</span> ${propertie[1]}</p>`
  }
  element.appendChild(li);
}); */

import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();

let test = document.getElementById('radius');
test.addEventListener('change', (e) => {
  new QuakesController('#quakeList', '', e.target.value).init();
});

