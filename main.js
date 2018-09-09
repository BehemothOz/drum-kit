let keys = document.querySelectorAll('.key');

let removeTransition = function(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};

let soundPlay = function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; // stop function
  audio.currentTime = 0; // rewind to the sart
  audio.play();

  key.classList.add('playing');
};

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', soundPlay);