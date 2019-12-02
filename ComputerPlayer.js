const { dictionary } = require("./Dictionary.js")

  class ComputerPlayer {
    constructor (name = "Computer") {
      this.dictionary = dictionary;
      this.name = name;
      this.userGuess = new guess()
    }
  display(board) {
    this.board = board;
  }
  secretWordLength() { 
    return this.secretWord.length
  }

  reveal() {
    let revealStr = [];
    for(let i = 0; i < this.word.length; i++){
        revealStr.push(this.word[i]);
    }
    let currentBoard = revealStr.join(" ");
    return currentBoard;
  } 
  checkGuess(letter) {
    let word = [];
    for(let i = 0 ; i < this.secretWord.length; i++) {
        if(this.secretWord[i] === char) {
            word.push(i);
        }
    }
    return word
}

reveal() {
    return this.secretWord;
} 
}
export default ComputerPlayer;

