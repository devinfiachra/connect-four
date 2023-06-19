class Game {
  constructor(rows, columns, winCondition) {
    this.rows = rows || 6;
    this.columns = columns || 7;
    (this.boardMatrix = this.createBoard()),
      (this.winCondition = winCondition || 4),
      (this.currentPlayer = "player1"),
      (this.winner = ""),
      (this.gameOver = false);
    (this.score = { player1: 0, player2: 0, draw: 0, total: "" }),
      (this.playerColor = {
        player1: "magenta",
        player2: "blue",
        draw: "springgreen",
      }),
      (this.theme = "");
    this.createBoardUI();
    this.audioFiles = [];
    this.currentSongIndex = 0;
    this.audioElement = new Audio();
  }

  // async fetchSoundFiles() {
  //   try {
  //     let response = await fetch("styles/audio/soundtrack/music/");
  //     let data = await response.text();
  //     let parser = new DOMParser();
  //     let html = parser.parseFromString(data, "text/html");
  //     let links = html.querySelectorAll("a");

  //     this.audioFiles = Array.from(links)
  //       .map((link) => link.href)
  //       .filter((href) => href.endsWith(".mp3"));

  //     this.audioElement.src = this.audioFiles[0];
  //   } catch (error) {
  //     console.error("Error fetching sound files:", error);
  //   }
  // }

  // playRandomSong() {
  //   const randomIndex = Math.floor(Math.random() * this.audioFiles.length);
  //   this.audioElement.src = this.audioFiles[randomIndex];
  //   this.audioElement.play();
  // }

  createBoard() {
    const board = [];

    for (let i = 0; i < this.rows; i++) {
      board.push(Array(this.columns).fill(0));
    }

    return board;
  }

  createBoardUI() {
    const parentBoard = document.getElementById("board");

    let counter = 0;

    for (let i = 0; i < this.rows; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");

      for (let j = 0; j < this.columns; j++) {
        const columnELement = document.createElement("div");
        columnELement.classList.add("slot");
        columnELement.setAttribute("id", `${counter}`);
        columnELement.setAttribute("row", `${i}`);
        columnELement.setAttribute("column", `${j}`);
        rowElement.appendChild(columnELement);
        counter++;
      }

      parentBoard.appendChild(rowElement);
    }
  }

  clearBoard() {
    const parentBoard = document.getElementById("board");
    parentBoard.replaceChildren();
  }

  togglePlayer() {
    this.currentPlayer =
      this.currentPlayer === "player1" ? "player2" : "player1";
  }

  setupClassic() {
    this.winCondition = 4;
    this.theme = "classic";
  }

  // rows is height, columns are width;
  checkForWinner() {
    this.checkVerticalWin();
    this.checkHorizontalWin();
    this.checkDiagonalRight();
    this.checkDiagonalLeft();
  }

  checkVerticalWin() {
    for (let i = 0; i <= this.columns - 1; i++) {
      let counter = 0;

      for (let k = 0; k < this.rows; k++) {
        if (this.boardMatrix[k][i] === 0) {
          counter = 0;
        } else {
          counter += this.boardMatrix[k][i];
        }

        if (counter === this.winCondition) {
          this.winner = "player1";
          this.gameOver = true;
          return;
        }

        if (counter === -1 * this.winCondition) {
          this.winner = "player2";
          this.gameOver = true;
        }
      }
    }
  }

  checkHorizontalWin() {
    for (let i = 0; i < this.rows; i++) {
      let counter = 0;

      for (let k = 0; k <= this.columns - 1; k++) {
        if (this.boardMatrix[i][k] === 0) {
          counter = 0;
        }

        counter += this.boardMatrix[i][k];

        if (counter === this.winCondition) {
          this.winner = "player1";
          this.gameOver = true;
        }

        if (counter === -1 * this.winCondition) {
          this.winner = "player2";
          this.gameOver = true;
        }

        if (this.boardMatrix[i][k] !== this.boardMatrix[i][k + 1]) {
          counter = 0;
        }
      }
    }
  }

  checkDiagonalRight() {
    for (let i = 0; i <= this.rows - this.winCondition; i++) {
      for (let j = 0; j <= this.columns - this.winCondition; j++) {
        let counter = 0;

        // generate checker based on board size - Make this function dynamic
        for (let k = 0; k < this.winCondition; k++) {
          counter += this.boardMatrix[i + k][j + k];
        }

        if (counter === this.winCondition) {
          this.winner = "player1";
          this.gameOver = true;
          return;
        }

        if (counter === -1 * this.winCondition) {
          this.winner = "player2";
          this.gameOver = true;
          return;
        }
      }
    }
  }

  checkDiagonalLeft() {
    for (let i = 0; i <= this.rows - this.winCondition; i++) {
      for (let j = this.columns - 1; j + 1 - this.winCondition >= 0; j--) {
        let counter = 0;

        for (let k = 0; k < this.winCondition; k++) {
          counter += this.boardMatrix[i + k][j - k];
        }

        if (counter === this.winCondition) {
          this.winner = "player1";
          this.gameOver = true;
          return;
        }
        if (counter === -1 * this.winCondition) {
          this.winner = "player2";
          this.gameOver = true;
          return;
        }
      }
    }
  }

  checkDraw(filled, total) {
    if (filled == total) {
      this.winner = "draw";
      this.gameOver = true;
      return;
    }
  }

  newGame() {
    this.boardMatrix = this.createBoard();
    this.winner = "";
    this.gameOver = false;
    return;
  }
}
