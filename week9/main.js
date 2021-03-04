function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => { key.addEventListener("transitionend", removeTransition) })

window.addEventListener("keydown", playsound);


function move(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  let top = key.style.top
  if (top === "") {
    top = '10px';
    key.style.top = top;
  } else if (parseInt(top) < 100) {
    let pos = parseInt(top) + 10;
    key.style.top = `${pos}px`;
  } else {
    key.style.top=0;  
  }
}

window.addEventListener("keydown", move);