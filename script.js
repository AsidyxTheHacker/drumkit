window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the function
    audio.currentTime = 0; //makes spammable
    audio.play();
    key.classList.add('playing');

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; //skips if not a transform
        this.classList.remove('playing');
    }

    const keys = this.document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
});

function playAudio(url) {
    new Audio(url).play();
  }