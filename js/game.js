class Game {
  constructor(rows, columns) {
    this.rows = rows || 6;
    this.columns = columns || 7;
    (this.boardMatrix = this.createBoard()),
      (this.winCondition = 4),
      (this.currentPlayer = "player1"),
      (this.score = [0, 0]);
    (this.playerColor = { player1: "magenta", player2: "blue" }),
      (this.theme = "");
    this.powerUpMode = false;
    this.createBoardUI();
  }

  createBoard() {
    const board = [];

    for (let i = 0; i < this.rows; i++) {
      board.push(Array(this.columns).fill(0));
    }

    return board;
  }

  testArray() {
    return [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
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

  togglePlayer() {
    this.currentPlayer =
      this.currentPlayer === "player1" ? "player2" : "player1";
  }

  setupClassic() {
    this.winCondition = 4;
    this.powerUpMode = false;
    this.theme = "classic";
  }

  // rows is height, columns are width;
  checkForWinner() {
    this.checkVerticalWin();
    this.checkHorizontalWin();
    this.checkDiagonalRight();
    this.checkDiagonalLeft();
    this.checkDraw();
  }

  checkVerticalWin() {
    for (let i = 0; i < this.rows - 1; i++) {
      let counter = 0;

      for (let k = 0; k < this.columns - 1; k++) {
        if (this.boardMatrix[k][i] === 0) {
          counter = 0;
        }

        counter += this.boardMatrix[k][i];

        if (counter === this.winCondition) {
          return alert("player1 vertical win!");
        }

        if (counter === -1 * this.winCondition) {
          return alert("player2 vertical win!");
        }
      }
    }
  }

  checkHorizontalWin() {
    for (let i = 0; i < this.rows; i++) {
      let counter = 0;

      for (let k = 0; k < this.columns - 1; k++) {
        if (this.boardMatrix[i][k] === 0) {
          counter = 0;
        }

        counter += this.boardMatrix[i][k];

        if (counter === this.winCondition) {
          return alert("player1 horizontal win!");
        }

        if (counter === -1 * this.winCondition) {
          return alert("player2 horizontal win!");
        }
      }
    }
  }

  checkDiagonalRight() {
    for (let i = 0; i <= this.rows - this.winCondition; i++) {
      let counter = 0;

      for (let j = 0; j <= this.columns - this.winCondition; j++) {
        console.log("JJJJJ: ", j);
        counter +=
          this.boardMatrix[i][j] +
          this.boardMatrix[i + 1][j + 1] +
          this.boardMatrix[i + 2][j + 2] +
          this.boardMatrix[i + 3][j + 3];
      }

      console.log("DIAGONAL COUNTER!: ", counter);

      if (counter === this.winCondition) {
        return alert("player1 diagonal win right!");
      }
      if (counter === -1 * this.winCondition) {
        return alert("player2 diagonal win right!");
      }
    }
  }

  checkDiagonalLeft() {
    // for (let i = 0; i + 3 < arr.length; i++) {
    //   let counter = 0;
    //   for (let j = arr[i].length - 1; j - 3 >= 0; j--) {
    //     counter +=
    //       arr[i][j] + arr[i + 1][j - 1] + arr[i + 2][j - 2] + arr[i + 3][j - 3];
    //   }
    //   if (counter === this.winCondition) {
    //     return alert("player1 diagonal win left!");
    //   }
    //   if (counter === -1 * this.winCondition) {
    //     return alert("player2 diagonal win left!");
    //   }
    // }
  }

  checkDraw() {
    console.log("Check Draw!");
  }

  newGame() {}
}
