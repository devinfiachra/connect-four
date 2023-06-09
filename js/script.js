// Screens

const startScreen = document.getElementById("start-screen");
const customGameScreen = document.getElementById("custom-game-menu-screen");
const gameScreen = document.getElementById("game-screen");
const endGameScreen = document.getElementById("end-game-screen");

// START MENU

const startButton = document.getElementById("start-game");
const optionsMenu = document.getElementById("open-options");

startButton.addEventListener("click", (e) => {
  alert("START CLASSIC GAME");
  startScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
});

optionsMenu.addEventListener("click", (e) => {
  alert("CUSTOM GAME MENU");
  startScreen.style.visibility = "hidden";
  customGameScreen.style.visibility = "visible";
});

// CUSTOM GAME MENU
