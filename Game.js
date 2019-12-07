const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
const ComputerPlayer = require("./ComputerPlayer")


class Game {
    constructor() {
      this.guesser = new HumanPlayer()
      this.board = new Board()
      this.referee = new ComputerPlayer()
    }
    
  isGameOver() {
    if(this.board.guessesRemaining === 0) {
      return true
    } else {
      if(this.board.isComplete()) {
        return true
      } else {
        return false
      }
    }

    
  }
  

}

export default Game