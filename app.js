const OneForHomeEl = document.querySelector(".oneForHome");
const OneForGuestEl = document.querySelector(".oneForGuest");
const TwoForHomeEl = document.querySelector(".twoForHome");
const TwoForGuestEl = document.querySelector(".twoForGuest");
const ThreeForHomeEl = document.querySelector(".threeForHome");
const ThreeForGuestEl = document.querySelector(".threeForGuest");
const scoreHomeEL = document.querySelector(".scoreHome");
const scoreGuestEL = document.querySelector(".scoreGuest");
let scoreHome = 0;
let scoreGuest = 0;

OneForHomeEl.addEventListener("click", function () {
  scoreHome++;
  scoreHomeEL.textContent = scoreHome;
});

OneForGuestEl.addEventListener("click", function () {
  scoreGuest++;
  scoreGuestEL.textContent = scoreGuest;
});

TwoForHomeEl.addEventListener("click", function () {
  scoreHome += 2;
  scoreHomeEL.textContent = scoreHome;
});

TwoForGuestEl.addEventListener("click", function () {
  scoreGuest += 2;
  scoreGuestEL.textContent = scoreGuest;
});

ThreeForHomeEl.addEventListener("click", function () {
  scoreHome += 3;
  scoreHomeEL.textContent = scoreHome;
});

ThreeForGuestEl.addEventListener("click", function () {
  scoreGuest += 3;
  scoreGuestEL.textContent = scoreGuest;
});
