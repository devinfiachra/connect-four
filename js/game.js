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
    // console.log("A CLASSIC GAME HAS STARTED");
    this.winCondition = 4;
    this.powerUpMode = false;
    this.theme = "classic";
  }

  checkForWinner(matrix) {
    //console.log("Checked For Winner");
  }

  newGame() {}
}
