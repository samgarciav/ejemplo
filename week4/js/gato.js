const divs = [...document.getElementsByTagName('div')];
let turn = 'X';

function doSomething(e, i) {
  turn = turn === 'X' ? 'O' : 'X';
  e.target.innerHTML = turn;
  checkwin();
  e.target.removeEventListener("click", doSomething);
}

function checkwin() {
  t = 'innerText';
  if ( divs[0][t] != "" && divs[0][t] === divs[1][t] && divs[0][t] === divs[2][t]
    || divs[3][t] != "" && divs[3][t] === divs[4][t] && divs[3][t] === divs[5][t]
    || divs[6][t] != "" && divs[6][t] === divs[7][t] && divs[6][t] === divs[8][t]
    || divs[0][t] != "" && divs[0][t] === divs[3][t] && divs[0][t] === divs[6][t]
    || divs[1][t] != "" && divs[1][t] === divs[4][t] && divs[1][t] === divs[7][t]
    || divs[2][t] != "" && divs[2][t] === divs[5][t] && divs[2][t] === divs[8][t]
    || divs[0][t] != "" && divs[0][t] === divs[4][t] && divs[0][t] === divs[8][t]
    || divs[2][t] != "" && divs[2][t] === divs[4][t] && divs[2][t] === divs[6][t]) {
    const header = document.querySelector('header');
    const p = document.createElement('P');
    p.innerHTML = `Congrats ${turn} Won!`;
    header.appendChild(p);
    divs.forEach(div => div.removeEventListener("click", doSomething));
  }
}

function resetGame() {
  divs.forEach(div => div.innerHTML = '');
  divs.forEach(div => div.addEventListener("click", doSomething));
  const p= document.querySelector("header p");
  p.remove();
}

divs.forEach(div => div.addEventListener("click", doSomething));
const button = document.getElementsByTagName('button')[0];
button.addEventListener("click", resetGame); 
