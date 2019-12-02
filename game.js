import View from "./view.js"
import HumanPlayer from "./humanPlayer.js"
import ComputerPlayer from "./computerPlayer.js"
import Board from "./board.js"
import dictionary from "./words.js"

class Game {
  constructor(players) {
    this.referee = players["referee"]
    this.guessee = players["guessee"]
    this.guessesRemaining = 6
    this.lettersGuesses = []
    this.dictionary = dictionary
  }

  startGame() {
    let boardLength = this.referee.chooseSecretWrod()
    this.board = new Board(boardLength)
  }

  randomWord() {
    this.dictionary.words[Math.floor(Math.random() * words.length)]
  }

  play() {
    while (!this.gameOver()) {
      console.log("Letters guessed so far: " + this.lettersGuessed.join(","))

      this.guessee.displayBoard(this.board)
      this.referee.displayBoard(this.board)

      let guess = "0"

      while (!this.isValidGuess()) {
        guess = this.guessee.getMove()
        if (!this.isValidGuess()) {
          console.log("Aw, too bad! Try again!")
        }
      }
      this.enterValidGuess()
    }
  }

  playAgain() {
    if (this.guessesRemaining > 0) {
      alert("Play Again!")
    } else {
      let winWord = this.referee.reveal()
      alert("Aw, too bad for you")
    }
  }
  isValidGuess() {
    this.lettersGuessed.push(guess)
    let place = this.checkGuess.referee(guess)
    if (this.lettersGuessed === 0) {
      this.guessesRemaining--
    }
  }
  gameOver() {
    if (this.board.isComplete() || this.guessesRemaining === 0) {
      playAgain()
    }
  }
}

game.play()

export default Game
