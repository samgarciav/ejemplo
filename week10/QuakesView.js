import QuakesController from './QuakesController.js';

export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    if (quakeList.features == '') {
      listElement.innerHTML = 'No quakes withing this radius, increment the radius';
    } else {
      listElement.innerHTML = '';
      quakeList.features.forEach(element => {
        const li = document.createElement('li');
        li.setAttribute('data-id', element.id);
        li.innerHTML = `<h2>${element.properties.title}</h2>
      <p>${new Date(element.properties.time)}</p>`;
        listElement.appendChild(li);
      });
    }
  }

  renderQuake(quake, element) {
    element.innerHTML = '';
    const quakeProperties = Object.entries(quake.properties);
    const h2 = document.createElement('h2');
    h2.innerText = quake.properties.title;
    element.appendChild(h2);
    quakeProperties.forEach(propertie => {
      const li = document.createElement('li');
      if (propertie[0] == 'time' || propertie[0] == 'updated') {
        li.innerHTML = `<p class="propertie"><span>${propertie[0]}:</span> ${new Date(propertie[1])}</p>`
      } else {
        li.innerHTML = `<p class="propertie"><span>${propertie[0]}:</span> ${propertie[1]}</p>`
      }
      element.appendChild(li);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    });
    const btn = document.createElement('button');
    btn.innerText = 'Go back';
    btn.addEventListener('click', e => {
      const radius = document.getElementById('radius').value;
      new QuakesController('#quakeList', '', radius).init();

    });
    element.appendChild(btn);
  }
}
