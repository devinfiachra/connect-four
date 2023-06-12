class Game {
  constructor(boardMatrix) {
    (this.boardMatrix = boardMatrix),
      (this.winCondition = 4),
      (this.currentPlayer = 1),
      (this.score = [0, 0]);
    this.theme = "";
    this.powerUpMode = false;
  }

  setupClassic() {
    // console.log("A CLASSIC GAME HAS STARTED");
    this.winCondition = 4;
    this.powerUpMode = false;
    this.theme = "classic";
  }

  setupCustom(boardMatrix, toWin, theme, music, powerUp) {
    // console.log("A CUSTOM GAME HAS STARTED");
    this.winCondition = toWin;
    this.powerUpMode = powerUp;
    this.theme = theme;
    this.music = music;
    this.boardMatrix = boardMatrix;
  }

  checkForWinner() {
    // console.log("Checked For Winner");
  }

  newGame() {}
}
