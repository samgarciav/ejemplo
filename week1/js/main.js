function loadStory() {
  let storyName = document.getElementById('name_input').value;
  let storyHTML = localStorage.getItem(storyName);
  document.getElementById('story_editor').value = storyHTML;
}

function saveStory() {
  let storyName = document.getElementById('name_input').value;
  let storyHTML = document.getElementById('story_editor').value;
  /* localStorage.setItem(storyName, storyHTML); */
  localStorage[storyName] = storyHTML;  // using bracket notation allows me to use variables, which is different from dot notation 
}

function displayStory() {
  let storyHTML = document.getElementById('story_editor').value;
  document.getElementById('story_display').innerHTML = storyHTML;
}

/* localStorage.clear(); I can use this code to clear or erase all the localStorage
   localStorage.removeItem('myCat'); or use this code to remmove one Item that was Storage

   There is this other way to store things:

   sessionStorage.setItem('itemName','itemValue');
   sessionStorage.getOtem('itemName');

   Or

   sessionStorage.itemName = 'itemValue';

 */