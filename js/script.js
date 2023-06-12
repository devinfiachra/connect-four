// Screens

const startScreen = document.getElementById("start-screen");
const customGameScreen = document.getElementById("custom-game-menu-screen");
const gameScreen = document.getElementById("game-screen");
const endGameScreen = document.getElementById("end-game-screen");

// SETUP -> GAME START

const boardUI = document.getElementById("board");

function startClassicGame() {
  let game = new Game(6, 7);
  console.log(game);

  let slots = Array.from(document.getElementsByClassName("slot"));

  slots.map((slot) => {
    slot.addEventListener("click", (e) => {
      // where the event is triggered
      console.log("SLOT: ", e.target);

      // where the game piece should go
      let CurrentRow = e.target.getAttribute("row");
      let CurrentColumn = e.target.getAttribute("column");
      console.log("Row: ", e.target.getAttribute("row"));
      console.log("Column: ", e.target.getAttribute("column"));
      game.boardMatrix[CurrentRow][CurrentColumn] = 1;

      //loop from the bottom to the top of the rows (Board Height)
      for (let i = game.rows - 1; i >= 0; i--) {
        console.log(i);
      }

      e.target.style.backgroundColor = "red";
      console.log(game.boardMatrix);
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
