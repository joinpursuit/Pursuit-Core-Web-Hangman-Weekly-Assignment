// * Should have guesser and referee. 
//   * Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 
// const HumanPlayer = require("./HumanPlayer.js")

const Board = require ("./Board")
const ComputerPlayer = require("./ComputerPlayer")
const HumanPlayer = require("./HumanPlayer.js")

class Game {
    constructor(player){
        this.word = word
        this.guessRemaining = board.length + 3
        this.board = new Board(word)
        this.play1 = player["player1"]
    }
    play() {
        let boardLength = this.word.length
        this.board = new Board(boardLength)

        while(!this.isGameOver()) {
            this.play1.displayBoard(this.board)

            while(!this.isValidGuess(guess)) {
                guess = this.guesser.getMove();
                if(!this.isValidGuess(guess)) {
                    console.log("INVALID GUESS!")
            }
            }



        }
    }
    isGameOver() {
        return  this.board.isComplete() || this.guessesRemaining === 0;
    }
    isGuessValid(userInput) {
        let alph=/^[a-zA-Z]+$/;
        while (!userInput.match(alph)) {
            console.log("MUST INPUT A LETTER !");
        }
    }
}

export default Game;