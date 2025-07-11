let mainButtons = document.querySelectorAll(".btns");
let cardHiden = document.querySelector(".card");
let cardShow = document.querySelector(".content");
let body = document.getElementsByTagName("body");
for (let i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener("click", function (e) {
    e.preventDefault();
    cardShow.classList.remove("card");
    // cardShow.getElementsByTagName('body').remove
  });
}

// let cardHiden = document.querySelector(".card");
// let cardShow = document.querySelector(".content");
// document.querySelector(".btns").addEventListener("click", function (e) {
//   cardShow.classList.remove("card");
//   e.preventDefault();
// });

document.querySelector(".cancle").addEventListener("click", function (e) {
  e.preventDefault();
  cardHiden.classList.add("card");
});
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key == "Escape") {
    cardHiden.classList.add("card");
  } else {
    return;
  }
});
