const Board = require("./Board.js")
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")

class Game {
    constructor() {
        this.player1 = new HumanPlayer();
        this.player2 = new ComputerPlayer();
        this.winner = undefined
        this.board = new Board()
        this.guessRemaining = 6
        this.gameOver = false
        this.guess = "guess"
        this.guessWord = ""
        this.displyWord = []
    }

    switchPlayers() {
        this.currentPlayer =
         this.currentPlayer === this.HumanPlayer ? this.ComputerPlayer : this.HumanPlayer
    }

    gameIsOver() {
        if(this.guessRemaining === 0 || this.wordCheck() === true){
             this.gameOver = true
        } else{this.gameOver = false}
    }

    // guess(){
    //      this.guess.toLowerCase() = this.player1.getGuess()
    // }

    startBoard() {

            this.guessWord = this.player2.wordSelect()
            return this.disply()
    }

    disply(){
        return this.displyWord = Array(this.guessWord.length).fill("_");
    }

    gameDisplay(){
        console.log(`lets play a game`)
        console.log(this.board.displyWord)
        console.log(`you have ${this.guessRemaining} guesses left`)
        console.log(`you have tried ${this.board.guessedLetters}`)
        console.log(this.board.guessWord)
        
    }
    reveal(){
        if(this.board.wordFound === true){
            return `You did it. the word was ${this.board.guessWord}`
        } else{
            return `Better luck next time. The word was ${this.board.guessWord}`
        }
    }

    wordCheck(){
        if(this.board.displyWord.join("") === this.guessWord){
            this.board.wordFound = true
        }
    }

    gameplay(){
        this.startBoard()
        while(!this.gameOver){
            console.clear()
            this.gameDisplay()
            this.gameIsOver()
            this.guess = this.player1.getGuess()
            if(this.board.isValidGuess(this.guess)){
                this.board.replace(this.guess)
                // if(this.wordCheck() === 0){break;}
            }else{
            this.guessRemaining -=1
            }
            
        }
        this.reveal()
    }
    isValidGuess(letter){
        if(this.guessWord.includes(letter) && !this.guessedLetters.includes(letter)){
            this.guessedLetters.push(letter);
            return true
        } else {
            this.guessedLetters.push(letter);
            return false
        }
    }
    replace(letter){

        for(let i = 0; i <= this.guessWord.length-1;i++){
            if(this.guessWord[i] === letter){
                this.displyWord[i] = letter
            }
        }
    }
    fillSpace(letter){
        if(this.isValidGuess(letter) === true){
            this.replace(letter)
        } else {
            return "try again"
        }

    }
}

export default Game;