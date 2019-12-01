import Board from "./hangmanBoard.js"

class Game {
    constructor(players){
        this.god = players["god"]
        this.guesser = players[""]
        this.guessesRemaining = 7
        this.guessedLetters = []
    }
    start() {
        let boardLen = this.god.secretWords()
        this.board = new Board(boardLen)
    }
    enterValidGuess(guess){
        this.lettersGuessed.push(guess);
        let place = this.checkGuess.ref(guess);
        if (place.length === 0) {
            this.guessesRemaining--;
        }
        this.board.addLetter(place,guess);
    }
    resolveGame(){
        if (this.guessesRemaining > 0){
            return `YOU ${this.guesser.name} WIN`
        } else {
            let winningWord = this.reveal()
            return `Word was ${winningWord}. YOU LOSE`
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