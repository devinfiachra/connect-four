class Board {
  constructor(rows, columns) {
    this.rows = rows || 6;
    this.columns = columns || 7;
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
    // create main div
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
}
