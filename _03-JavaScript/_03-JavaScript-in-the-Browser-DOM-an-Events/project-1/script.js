let screctNum = Math.trunc(Math.random() * 20) + 1;
// console.log(screctNum);

// in js secte class or id by textcontent help to see the content
console.log(document.querySelector(".guess-msg").textContent);

// we can write new things
document.querySelector(".guess-msg").textContent = "Correct Number";

// totake input from input field we use .value

// to add event in JS
// we selct the button so when ever the button will click the function exuxute. and the value of input box will log
let score = 19;
// let input = Number(document.getElementById("guess").value);

document.getElementById("check").addEventListener("click", function (e) {
  e.preventDefault();
  let input = Number(document.getElementById("guess").value);
  let status = (document.querySelector(".guess-msg").textContent =
    "Enter a valid Number");
  let number = document.querySelector(".number").textContent;
  let lifespan = (document.querySelector(
    ".score-decrement"
  ).textContent = `Score ${score}`);
  // let highscore = (document.querySelector(".high-score").textContent =
  //   "High Score");
  let highscore = document.querySelector("#high-score").textContent;

  if (input == 0 || input == "") {
    status;
  } else if (input !== screctNum) {
    if (score > 0) {
      status = document.querySelector(".guess-msg").textContent =
        input > screctNum ? "Too Big" : "Too Low";
      lifespan = document.querySelector(
        ".score-decrement"
      ).textContent = `Score ${score--}`;
    } else {
      status = document.querySelector(".guess-msg").textContent =
        "YOU LOSEEEEEEE";
    }
  } else {
    status = document.querySelector(".guess-msg").textContent =
      "You Guess Correct";
    number = document.querySelector(".number").textContent = screctNum;
    highscore = document.querySelector(
      "#high-score"
    ).textContent = `high score ${score}`;
  }
});
document.getElementById("agian").addEventListener("click", function (e) {
  document.querySelector(".score-decrement").textContent = `Score ${
    (score = 19) + 1
  }`;
  let newscretnum = Math.trunc(Math.random() * 20) + 1;
  screctNum = newscretnum;
  number = document.querySelector(".number").textContent = "?";
});
// console.log(score);
