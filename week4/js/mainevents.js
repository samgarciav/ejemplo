const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);


const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);


function highlight(event) {
    event.target.classList.toggle('highlight');
}


/* addEventListener('keydown', highlight); */

/* addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`)); */

const onceParagraph = document.getElementById('once');

onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'red';
    onceParagraph.removeEventListener('click', remove);
}