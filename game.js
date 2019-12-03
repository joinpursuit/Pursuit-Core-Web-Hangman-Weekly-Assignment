import Board from "./Board.js";
import ComputerPlayer from "./ComputerPlayer.js" ;


class Game {
    constructor(player) {
        this.player = player;
        this.computer = new ComputerPlayer();
        this.guessesRemaining = 6; 
        this.guessedLetters = [];
        this.board = new Board();
    }
    play() {
        console.clear()
        while(!this.isGameOver()) {
            this.displayBoard();
            let guess = this.player.getMove()
            while(this.guessedLetters.includes(guess)) {
                guess = readline.question("That letter has already been entered, choose another letter")
                if(this.isValidGuess(guess) && !this.computer.word.includes(guess)) {
                    this.guessedAlready.push(guess);
                    this.guessesRemaining --;
                } else if(this.isValidGuess(guess)){
                    this.guessedLetters.push(guess)
                    this.board.addChar(this.computer.word, guess)
                } else {
                    guess = readline.question("Enter a Letter: ")
                }
                console.clear()
            }
        }
        if(this.guessesRemaining){
            console.log(this.computer.reveal())
            console.log("You're a WINNER")
        } else {
            console.log("You lose!!!!")
        }

    }
    isValidGuess(char) {
        let alph = "abcdefghijklmnopqrstuvwxyz";
        return char.length === 1 && alph.includes(char) && 
        !this.guessedLetters.includes(char);
    }
    isGameOver() {
        return this.guessesRemaining > 0 && !this.board.isComplete(this.computer.word)
    }
}

export default Game;