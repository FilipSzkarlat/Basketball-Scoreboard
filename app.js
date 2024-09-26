const OneForHomeEl = document.querySelector(".oneForHome");
const OneForGuestEl = document.querySelector(".oneForGuest");
const TwoForHomeEl = document.querySelector(".twoForHome");
const TwoForGuestEl = document.querySelector(".twoForGuest");
const ThreeForHomeEl = document.querySelector(".threeForHome");
const ThreeForGuestEl = document.querySelector(".threeForGuest");
const scoreHomeEL = document.querySelector(".scoreHome");
const scoreGuestEL = document.querySelector(".scoreGuest");
const newBtn = document.querySelector(".new-btn");
let scoreHome = 0;
const lastGame = document.querySelector(".last-game");
const homeLastGameScore = document.querySelector(".home-last-game");
const guestLastGameScore = document.querySelector(".guest-last-game");
let scoreGuest = 0;

OneForHomeEl.addEventListener("click", function () {
  scoreHome++;
  scoreHomeEL.textContent = scoreHome;
  checkTheLeader();
});

OneForGuestEl.addEventListener("click", function () {
  scoreGuest++;
  scoreGuestEL.textContent = scoreGuest;
  checkTheLeader();
});

TwoForHomeEl.addEventListener("click", function () {
  scoreHome += 2;
  scoreHomeEL.textContent = scoreHome;
  checkTheLeader();
});

TwoForGuestEl.addEventListener("click", function () {
  scoreGuest += 2;
  scoreGuestEL.textContent = scoreGuest;
  checkTheLeader();
});

ThreeForHomeEl.addEventListener("click", function () {
  scoreHome += 3;
  scoreHomeEL.textContent = scoreHome;
  checkTheLeader();
});

ThreeForGuestEl.addEventListener("click", function () {
  scoreGuest += 3;
  scoreGuestEL.textContent = scoreGuest;
  checkTheLeader();
});

newBtn.addEventListener("click", function () {
  homeLastGameScore.textContent = scoreHome;
  guestLastGameScore.textContent = scoreGuest;
  scoreGuest = 0;
  scoreHome = 0;
  scoreGuestEL.textContent = scoreGuest;
  scoreHomeEL.textContent = scoreHome;
  checkTheLeader();
  lastGame.classList.remove("hidden");
});

function checkTheLeader() {
  if (scoreGuest > scoreHome) {
    scoreGuestEL.className = "scoreGuest highlight";
    scoreHomeEL.classList.remove("highlight");
  } else if (scoreHome > scoreGuest) {
    scoreHomeEL.className = "scoreHome highlight";
    scoreGuestEL.classList.remove("highlight");
  } else {
    scoreGuestEL.classList.remove("highlight");
    scoreHomeEL.classList.remove("highlight");
  }
}
