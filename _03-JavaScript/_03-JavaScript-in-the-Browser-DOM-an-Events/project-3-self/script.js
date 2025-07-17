let totalScoreOfPlayer1 = document.querySelector(".score");
let currentScoreOfPlayer1 = document.querySelector(".current-score");
let totalScoreOfPlayer2 = document.querySelector(".score1");
let currentScoreOfPlayer2 = document.querySelector(".current-score1");
let rollDise = document.querySelector(".ROLLDISE");
let newGame = document.querySelector(".NEWGAME");
let hold = document.querySelector(".HOLD");
let imageOfDice = document.querySelector(".imageofdice");
let arr = [];
let numarr = [];
let sum = 0;
let random = () => {
  return Math.floor(Math.random() * 6) + 1;
};

rollDise.addEventListener("click", function (e) {
  e.preventDefault();
 
  imageOfDice.innerHTML = `<h1><img src="./images/inverted-dice-${random()}.svg" ></h1>`;
  arr.push(random());
  console.log(arr);
});
