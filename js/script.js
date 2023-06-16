// Screens
const startScreen = document.getElementById("start-screen");
const customGameScreen = document.getElementById("custom-game-menu-screen");
const gameScreen = document.getElementById("game-screen");
const endGameScreen = document.getElementById("end-game-screen");

//MUSIC

async function fetchSoundFiles() {
  let response = await fetch("styles/audio/soundtrack/monkeys");
  let data = await response.text();
  let parser = new DOMParser();
  let html = parser.parseFromString(data, "text/html");
  let links = html.querySelectorAll("a");

  let soundFiles = Array.from(links)
    .map((link) => link.href)
    .filter((href) => href.endsWith(".mp3") || href.endsWith(".m4a")); // Adjust the file extension if needed

  return soundFiles;
}

function soundtrack() {
  fetchSoundFiles().then((soundFiles) => {
    // Randomly select a sound file
    var randomIndex = Math.floor(Math.random() * soundFiles.length);
    var soundPath = soundFiles[randomIndex];

    // Play the sound
    var audio = new Audio(soundPath);
    audio.play();
  });
}

function coinIn(currentPlayer) {
  const coinDrop = `styles/audio/game/${currentPlayer}.wav`;
  const sound = new Audio(coinDrop);
  sound.play();
}

function warning() {
  const warn = "styles/audio/game/warning.mp3";
  const warning = new Audio(warn);
  warning.play();
}

function select() {
  const beep = "styles/audio/game/select.wav";
  const confirm = new Audio(beep);
  confirm.play();
}

function navBack() {
  const beep = "styles/audio/game/return.wav";
  const nav = new Audio(beep);
  nav.play();
}

function resetPieces() {
  const beep = "styles/audio/game/reset.wav";
  const reset = new Audio(beep);
  reset.play();
}

// TO DO: add a class to elements which take a color, and create a querySelectorAll function to map over them and apply a class primary, secondary so that a user can change the style of the board dynamically

// SETUP -> GAME START

const boardUI = document.getElementById("board");

const isColumnFull = (column) => {
  const topSlot = document.querySelector(`[column="${column}"][row="${0}"]`);

  return topSlot.hasAttribute("filledBy");
};

const activePlayer = (playerColor) => {
  let active = document.getElementById("active-player-coin");
  active.style.backgroundColor = playerColor;
};

let gameStyle = "";

function startGame() {
  let game = new Game();
  let slots = Array.from(document.getElementsByClassName("slot"));
  activePlayer(game.playerColor[game.currentPlayer]);

  slots.forEach((slot) => {
    slot.addEventListener("click", (e) => {
      // where the game piece should go
      let currentRow = e.target.getAttribute("row");
      let currentColumn = e.target.getAttribute("column");

      //loop from the bottom to the top of the rows (Board Height)
      for (let i = game.rows - 1; i >= 0; i--) {
        let openSlot = document.querySelector(
          `[column="${currentColumn}"][row="${i}"]`
        );

        if (isColumnFull(currentColumn)) {
          warning();
          return;
        }

        if (openSlot.getAttribute("filledBy") === null) {
          coinIn(game.currentPlayer);
          openSlot.setAttribute("filledBy", game.currentPlayer);
          openSlot.setAttribute("filled", "true");
          openSlot.style.backgroundColor = game.playerColor[game.currentPlayer];

          game.boardMatrix[i][currentColumn] =
            game.currentPlayer === "player1" ? 1 : -1;

          //check for winning condition or Draw Game

          game.checkForWinner();

          let occupiedSlots = Array.from(
            document.querySelectorAll(`[filled="true"]`)
          );

          game.checkDraw(occupiedSlots.length, slots.length);

          if (game.gameOver === true) {
            slots
              .filter((slot) => !slot.hasAttribute("filledBy"))
              .map((slot) => {
                return slot.setAttribute("filledBy", "gameOver");
              });

            game.score[game.winner] += 1;
            game.score.total = `${game.score.player1} : ${game.score.player2}`;

            let endgameText = document.getElementById("end-game-text");
            let endgameScore = document.getElementById("end-game-score");

            endgameText.innerText =
              game.winner === "player1"
                ? "PLAYER 1 WINS"
                : game.winner === "player2"
                ? "PLAYER 2 WINS"
                : "STALEMATE";

            endgameScore.innerText = `${game.score.total}`;

            endGameScreen.style.backgroundColor = `${
              game.playerColor[game.winner]
            }`;

            endGameScreen.style.visibility = "visible";

            // THE REMATCH FUNCTION

            const rematch = document.getElementById("rematch");

            rematch.addEventListener("click", (e) => {
              select();
              game.newGame();

              slots
                .filter((slot) => slot.hasAttribute("filledBy"))
                .map((slot) => {
                  slot.removeAttribute("filledBy");
                  slot.removeAttribute("filled");
                  slot.style.backgroundColor = "black";
                  resetPieces();
                });

              return (endGameScreen.style.visibility = "hidden");
            });

            // add functionality to start game again and display scores
          }

          // switch players
          game.togglePlayer();
          activePlayer(game.playerColor[game.currentPlayer]);

          return;
        }
      }
    });
  });
}

function startCustomGame(rows, columns, toWin, theme, music, powerUp) {
  let customGame = new CustomGame();
}

// START MENU

const startButton = document.getElementById("start-game");
const optionsMenu = document.getElementById("open-options");

// START MENU - START CLASSIC GAME
startButton.addEventListener("click", (e) => {
  startScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
  select();
  soundtrack();
  startGame();
});

// START MENU -> CUSTOM GAME MENU -> START CUSTOM GAME

optionsMenu.addEventListener("click", (e) => {
  startScreen.style.visibility = "hidden";
  customGameScreen.style.visibility = "visible";
  select();
});

const customStart = document.getElementById("custom-menu-start");
const backButton = document.getElementById("custom-back-button");

customStart.addEventListener("click", (e) => {
  customGameScreen.style.visibility = "hidden";
  select();
  // ADD RULES TO TAKE CUSTOM PARAMETERS FROM CUSTOM FORM AND CREATE CUSTOM GAME FROM THE USER INPUT
  startCustomGame();

  gameScreen.style.visibility = "visible";
});

backButton.addEventListener("click", (e) => {
  startScreen.style.visibility = "visible";
  customGameScreen.style.visibility = "hidden";
  navBack();
});
