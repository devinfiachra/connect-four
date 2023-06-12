class CustomGame extends Game {
  constructor(rows, columns, toWin, theme, music, powerUp) {
    super();
    this.winCondition = toWin;
    this.powerUpMode = powerUp;
    this.theme = theme;
    this.music = music;
    this.rows = rows;
    this.columns = columns;
  }

  log() {
    alert("I AM A CUSTOM GAME");
  }
}
