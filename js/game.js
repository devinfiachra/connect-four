class Game {
  constructor() {
    (this.boardMatrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]),
      (this.currentPlayer = "");
  }

  startClassic() {
    console.log("THE GAME HAS STARTED");
  }

  startCustom() {
    console.log("A CUSTOM GAME HAS STARTED");
  }

  checkForWinner() {
    console.log("Checked For Winner");
  }
}
