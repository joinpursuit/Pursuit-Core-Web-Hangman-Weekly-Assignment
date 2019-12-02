import Board from "./hangmanBoard.js"

class Game {
    constructor(players){
        this.god = players["god"]
        this.diviner = players[""]
        this.guessCount = 7
        this.guesses = []
    }
    start() {
        let boardLength = this.god.secretWord()
        this.board = new Board(boardLength)
    }
    guessValidator(){
        let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return (guess.length === 1 && alphabet.includes(guess) && !this.guesses.includes(guess))
    }
    guessIndexValidator(guess){
        let secretWordIndex = []
        for (let i=0; i<this.secretWord.length; i++){
            if (this.secretWord[i] === guess){
            secretWordIndex.push(i)
            }
        }
        return secretWordIndex
    }
    enterGuess(guess){
        this.guesses.push(guess);
        let secretWordIndex = this.guessIndexValidator(guess);
        if (secretWordIndex.length === 0) {
            this.guessCount--;
        } else {
            this.board.addLetter(secretWordIndex,guess);
        }
    }
    gameOver(){
        return this.board.boardDisclosure() || this.guessCount === 0
    }
    endGame(){
        if (this.guessCount > 0){
            return `YOU ${this.diviner.name} WIN`
        } else {
            let secretWord = this.disclosure()
            return `Word was ${secretWord}. YOU LOSE`
        }
    }

}

export default Game;