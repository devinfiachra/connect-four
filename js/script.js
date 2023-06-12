// Screens

const startScreen = document.getElementById("start-screen");
const customGameScreen = document.getElementById("custom-game-menu-screen");
const gameScreen = document.getElementById("game-screen");
const endGameScreen = document.getElementById("end-game-screen");

// SETUP

function startClassicGame() {
  let game = new Game();
  game.startClassic();
}

// START MENU

const startButton = document.getElementById("start-game");
const optionsMenu = document.getElementById("open-options");

// START MENU - START CLASSIC GAME
startButton.addEventListener("click", (e) => {
  alert("START CLASSIC GAME");
  startScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
  startClassicGame();
});

// START MENU -> CUSTOM GAME MENU -> START CUSTOM GAME

optionsMenu.addEventListener("click", (e) => {
  alert("CUSTOM GAME MENU");
  startScreen.style.visibility = "hidden";
  customGameScreen.style.visibility = "visible";
});

const customStart = document.getElementById("custom-menu-start");
const backButton = document.getElementById("custom-back-button");

customStart.addEventListener("click", (e) => {
  alert("CUSTOM GAME MENU");
  customGameScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
});

backButton.addEventListener("click", (e) => {
  alert("CUSTOM GAME MENU");
  startScreen.style.visibility = "visible";
  customGameScreen.style.visibility = "hidden";
});
