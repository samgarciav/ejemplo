const divs = [...document.getElementsByTagName('div')];
let turn = 'X';

function doSomething(e, i) {
  console.log(e.target);
  turn = turn === 'X' ? 'O' : 'X';
  e.target.innerHTML = turn;
  checkwin();
  e.target.removeEventListener("click", doSomething);
}

function checkwin() {
  t = 'innerText';
  if (divs[0][t] != "" && divs[0][t] === divs[1][t] && divs[0][t] === divs[2][t]
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

divs.forEach(div => div.addEventListener("click", doSomething));

