class Game {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    (this.boardMatrix = this.createBoard()),
      (this.winCondition = 4),
      (this.currentPlayer = 1),
      (this.score = [0, 0]);
    this.theme = "";
    this.powerUpMode = false;
    this.createBoardUI();
  }

  createBoard() {
    let board = [];

    for (let i = 0; i < this.rows; i++) {
      console.log(i);
      board.push(Array(this.columns).fill(0));
    }

    return board;
  }

  createBoardUI() {
    const parentBoard = document.getElementById("board");

    let counter = 0;

    for (let i = 0; i < this.rows; i++) {
      const rowElemet = document.createElement("div");
      rowElemet.classList.add("row");

      for (let j = 0; j < this.columns; j++) {
        const columnELement = document.createElement("div");
        columnELement.classList.add("slot");
        columnELement.setAttribute("id", `${counter}`);
        rowElemet.appendChild(columnELement);
        counter++;
      }

      parentBoard.appendChild(rowElemet);
    }
  }

  setupClassic() {
    // console.log("A CLASSIC GAME HAS STARTED");
    this.winCondition = 4;
    this.powerUpMode = false;
    this.theme = "classic";
  }

  checkForWinner() {
    //console.log("Checked For Winner");
  }

  newGame() {}
}
