"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const curentSc0 = document.querySelector("#current--0");
const curentSc1 = document.querySelector("#current--1");

let playeraCurrentScore = 0;
let currentPlayer = 0;
let playIng = true;
let score = [0, 1];
// make the inittal value 0
let scorereset = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
};
scorereset();
let swtichplayer = () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
diceEl.classList.add("hidden");
// dice functonilty
btnRoll.addEventListener("click", function (e) {
  e.preventDefault();
  if (playIng == true) {
    let random = Math.floor(Math.random() * 6 + 1);
    // diceEl.innerHTML = `<h1><img src="./images/inverted-dice-${random}.svg" ></h1>`;
    diceEl.classList.remove("hidden");
    diceEl.src = `./images/inverted-dice-${random}.svg`;
    if (random != 1) {
      playeraCurrentScore += random;
      // curentSc0.textContent = player0current;
      document.getElementById(`current--${currentPlayer}`).textContent =
        playeraCurrentScore;
    } else {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      playeraCurrentScore = 0;
      swtichplayer();
    }
  }
});
btnHold.addEventListener("click", function (e) {
  e.preventDefault();
  score[currentPlayer] += playeraCurrentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    score[currentPlayer];
  btnHold.addEventListener("click", function (e) {
    e.preventDefault();
    score[currentPlayer] += playeraCurrentScore;
    document.getElementById(`score---${currentPlayer}`).textContent =
      score[currentPlayer];
  });
  playeraCurrentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  if (score[currentPlayer] >= 20) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove("player--active");
    playIng = false;
  } else {
    swtichplayer();
  }
});
btnNew.addEventListener("click", function (e) {
  e.preventDefault();

  scorereset();
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");
  score = [0, 0];
  playIng = true;
  diceEl.classList.add("hidden");
  playeraCurrentScore = 0;
  currentPlayer = 0;
  curentSc0.textContent = 0;
  curentSc1.textContent = 0;
  document.querySelector(`.player--${currentPlayer}`).classList.add("player--active");
});
