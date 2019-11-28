import Board from "./Board.js";
import ComputerPlayer from "./ComputerPlayer.js" ;


class Game {
    constructor(player) {
        this.player = player;
        this.computer = new ComputerPlayer();
        this.guessesRemaining = 6; 
        this.guessedLetters = new set();
    }
    play() {
        let boardLength = this.ref.chooseSecretWord()
        this.board = new Board(boardLength);
        while(!this.isGameOver()) {
            console.log(hangManPics[this.guessesRemaining])
          
        
            this.guesser.displayBoard(this.board);
            this.ref.displayBoard(this.board);
            let guess = "0"; 
            while(!this.isValidGuess(guess)) {
                guess = this.guesser.getMove();
                if(!this.isValidGuess(guess)) {
                    console.log("INVALID GUESS!")
                }
            }
            this.guessedLetters.push(guess)
            let positions = this.ref.checkGuess(guess);
            if(positions.length === 0) {
                this.guessesRemaining--;
            }
            this.board.addChar(positions, guess);
        }
        if(this.guessesRemaining > 0) {
            console.log(this.guesser.name + " wins!")
        } else {
            let winningWord = this.ref.reveal();
            console.log("word was " + winningWord)
            console.log(this.ref.name + " wins!")
        }

    }
    isValidGuess(char) {
        let alph = "abcdefghijklmnopqrstuvwxyz";
        return char.length === 1 && alph.includes(char) && 
        !this.guessedLetters.includes(char);
    }
    isGameOver() {
       return  this.board.isComplete() || this.guessesRemaining === 0;
    }
}

export default Game;