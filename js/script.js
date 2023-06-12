// Screens

const startScreen = document.getElementById("start-screen");
const customGameScreen = document.getElementById("custom-game-menu-screen");
const gameScreen = document.getElementById("game-screen");
const endGameScreen = document.getElementById("end-game-screen");

// SETUP -> GAME START

const boardUI = document.getElementById("board");

function startClassicGame() {
  let board = new Board();
  let game = new Game(board.createBoard());
  game.setupClassic();
  // console.log(game);

  let slots = Array.from(document.getElementsByClassName("column"));
  // console.log("SLOTS", slots);
}

function startCustomGame(rows, columns, toWin, theme, music, powerUp) {
  let board = new Board(rows, columns);
  let game = new Game(board.createBoard(), toWin, theme, music, powerUp);
  game.setupCustom();
  // console.log(game);
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

  // ADD RULES TO TAKE CUSTOM PARAMETERS FROM CUSTOM FORM AND CREATE CUSTOM GAME FROM THE USER INPUT
  startCustomGame();

  gameScreen.style.visibility = "visible";
});

backButton.addEventListener("click", (e) => {
  alert("CUSTOM GAME MENU");
  startScreen.style.visibility = "visible";
  customGameScreen.style.visibility = "hidden";
});
