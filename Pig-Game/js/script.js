'use strict';
console.log('Congrats you found an easter egg');
//selecting buttpons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnPlayer = document.querySelector('.btn--player');
const returnBtn = document.querySelector('.btn--return');

//Selecting elements
const player0Name = document.querySelector('#name--0');
const player1Name = document.querySelector('#name--1');
const modal2El = document.querySelector('.modal2');
const overlay2El = document.querySelector('.overlay2');
const enterNameBtn = document.querySelector('.enter-name');
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const enterName1 = document.querySelector('#player1--name');
const enterName2 = document.querySelector('#player2--name');

const btnNewAudio = new Audio('assets/start.mp3');
const btnPlayerAuido = new Audio('assets/start.mp3');
const diceAudio = new Audio('assets/diceaudio.mp3');
const errorAudio = new Audio('assets/error.mp3');
const holdAudio = new Audio('assets/hold.mp3');
const winAudio = new Audio('assets/winning.mp3');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden2');
let currentScore = 0;
let activePlayer = 0;
let totalScores = [0, 0];
let playing = true;

//Modal2 & name functionality
const closeModal2 = function () {
  modal2El.classList.add('hidden2');
  overlay2El.classList.add('hidden2');
};
const openModal2 = function () {
  modal2El.classList.remove('hidden2');
  overlay2El.classList.remove('hidden2');
};

const returnFunc = function () {
  window.location.href = 'index.html';
};

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
};

//Name button functionality
btnPlayer.addEventListener('click', function () {
  openModal2();
  btnPlayerAuido.play();
});
enterNameBtn.addEventListener('click', function () {
  btnPlayerAuido.play();
  if (enterName1.value !== '' && enterName2.value !== '') {
    // console.log('s');
    player0Name.textContent = enterName1.value;
    player1Name.textContent = enterName2.value;
    closeModal2();
  } else {
    alert('Please enter valid Names');
  }
});

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceAudio.play();
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden2');
    diceEl.src = `assets/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      errorAudio.play();
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    holdAudio.play();
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 100) {
      winAudio.play();
      playing = false;
      diceEl.classList.add('hidden2');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  btnNewAudio.play();
  window.location.reload();

  // player0Name.textContent = 'Player 1';
  // player1Name.textContent = 'Player 2';
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner');

  // document.querySelector(`#current--${activePlayer}`).textContent = 0;

  // document.querySelector(`.player--0`).classList.add('player--active');

  // score0El.textContent = 0;
  // score1El.textContent = 0;
  // diceEl.classList.add('hidden2');
  // currentScore = 0;
  // activePlayer = 0;
  // totalScores = [0, 0];
  // playing = true;
});
