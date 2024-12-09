const btnStart = document.querySelector('.btn--start');
const btnRules = document.querySelector('.btn--rules');
const btnAudio = document.querySelector('.btn--audio');
const btnAll = document.querySelectorAll('.btn');
const startAudio = new Audio('assets/start.mp3');
const gameAudio = new Audio('assets/audio1.mp3');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//modal functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Play audio only after a click
btnStart.addEventListener('click', e => {
  e.preventDefault(); // Prevent immediate navigation
  startAudio
    .play()
    .then(() => {
      window.location.href = 'game.html'; // Navigate only after audio starts
    })
    .catch(err => {
      console.error('Audio playback failed:', err);
    });
});

// Add click event to all buttons for audio
btnAll.forEach(button => {
  button.addEventListener('click', () => {
    startAudio.play().catch(err => {
      console.error('Audio playback failed:', err);
    });
  });
});

btnRules.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnAudio.addEventListener('click', function () {
  btnAudio.textContent = 'Pause🔈';
  if (gameAudio.paused) {
    gameAudio.play();
  } else {
    gameAudio.pause();
    btnAudio.textContent = 'Play🔊';
  }
});
