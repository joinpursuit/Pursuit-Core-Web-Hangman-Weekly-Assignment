class Board {
  constructor(length) {
    this.board = new Array(length).fill("_");
  }
  length() { 
    return this.board.length;
  }

  get(idx) {
  return this.board[idx];
  }

  isComplete() {
    return this.board.every(element => element !== "_");
     
  
  addLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        this.board[i] = letter;
      }
    }
  }  
}

module.exports = Board;

