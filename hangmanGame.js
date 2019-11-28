import Board from "./hangmanBoard.js"

class Game {
    constructor(players){
        this.under = player["ref"]
        this.guesser = players["guesser"]
        this.guessesRemaining = 6
        this.guessedLetters = []
    }

    start() {
        let boardLen = this.ref.secretWords()
        this.board = new Board(boardLen)
    }
    enterValidGuess(guess) {
        this.lettersGuessed.push(guess);
        let place = this.checkGuess.referee(guess);
        if (place.length === 0) {
            this.guessesRemaining--;
        }
        this.board.addChar(place, guess);
    }
    resolveGame {
        if (this.guessesRemaining > 0){
            return `YOU ${this.guesser.name}`
        } else {
            let winningWord = this.ref.reveal()
            return `word was ${winningWord}. YOU LOSE`
        }
    }
    isValidGuess(char){
            let alph = "abcdefghijklmnopqrstuvwxyz"
            return char.length === 1 && alph.includes(char) && !this.guessedLetters.includes(char)
    }
    isGameOver(){
        return this.board.isComplete() || this.guessesRemaining === 0
    }

}

export default Game;