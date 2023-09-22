class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    if (this.game_over) {
      return "game over";
    }

    if (
      !this.words.length ||
      this.words[this.words.length - 1].slice(-1) === word[0]
    ) {
      if (!this.words.includes(word)) {
        this.words.push(word);
        return this.words;
      } else {
        this.game_over = true;
        return "game over";
      }
    } else {
      this.game_over = true;
      return "game over";
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

let myShiritori = new Shiritori();
