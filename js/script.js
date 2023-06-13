// Screens

const startScreen = document.getElementById("start-screen");
const customGameScreen = document.getElementById("custom-game-menu-screen");
const gameScreen = document.getElementById("game-screen");
const endGameScreen = document.getElementById("end-game-screen");

//MUSIC

function coinIn() {
  let sound = new Audio("../styles/audio/game/coinDrop.wav");
  console.log("SOUND");
  sound.play();
}

function soundtrack() {
  let music = new Audio("../styles/audio/soundtrack/arctic-monkeys/tbhanc.mp3");
  music.play();
}

// TO DO: add a class to elements which take a color, and create a querySelectorAll function to map over them and apply a class primary, secondary so that a user can change the style of the board dynamically

// SETUP -> GAME START

const boardUI = document.getElementById("board");

const isColumnFull = (column) => {
  const topSlot = document.querySelector(`[column="${column}"][row="${0}"]`);
  return topSlot.hasAttribute("filledBy");
};

function startClassicGame() {
  let game = new Game(6, 7);
  console.log(game);
  let slots = Array.from(document.getElementsByClassName("slot"));

  slots.forEach((slot) => {
    slot.addEventListener("click", (e) => {
      // where the event is triggered
      console.log("SLOT: ", e.target);

      // where the game piece should go
      let currentRow = e.target.getAttribute("row");
      let currentColumn = e.target.getAttribute("column");
      console.log("Row: ", e.target.getAttribute("row"));
      console.log("Column: ", e.target.getAttribute("column"));

      //loop from the bottom to the top of the rows (Board Height)
      for (let i = game.rows - 1; i >= 0; i--) {
        let openSlot = document.querySelector(
          `[column="${currentColumn}"][row="${i}"]`
        );

        if (isColumnFull(currentColumn)) return;

        if (openSlot.getAttribute("filledBy") === null) {
          coinIn();
          openSlot.setAttribute("filledBy", game.currentPlayer);
          openSlot.style.backgroundColor = game.playerColor[game.currentPlayer];
          game.boardMatrix[i][currentColumn] = game.currentPlayer;

          // this is the board in the background which we will run the wingame function on
          console.log(game.boardMatrix);

          //check for winning condition

          // switch players
          game.togglePlayer();

          console.log(game.currentPlayer);
          return;
        }
      }
    });
  });
}

function startCustomGame(rows, columns, toWin, theme, music, powerUp) {
  let customGame = new CustomGame();
  console.log(customGame);
}

// START MENU

const startButton = document.getElementById("start-game");
const optionsMenu = document.getElementById("open-options");

// START MENU - START CLASSIC GAME
startButton.addEventListener("click", (e) => {
  startScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
  soundtrack();
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
