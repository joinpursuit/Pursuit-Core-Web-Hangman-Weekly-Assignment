const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const { hangManPics } = require("./hangmanPics.js");
class Game {
    constructor(players){
        this.ref = players["ref"]
        this.guesser = players["guesser"];
        this.guessesRemaining = 6;
        this.guessedLetters = [];

        /*make a variable that is equal to the length of the word. 
        each time a letter is guessed, subtract from that variable. 
        game will end when the variable reaches 0*/
        
    }
    beginGame(){
        let boardLength = this.ref.chooseSecretWord()
        this.board = new Board(boardLength)

    }
    wordLength(){
        if(this.guessesRemaining===0){
            this.guesser.innerText = "you lost!"

        }
    }
    play(){
        let boardLength = this.ref.chooseSecretWord();
        this.board = new Board(boardLength);
        while (!this.isGameOver()){
            console.log(hangManPics[this.guessesRemaining])
            console.log("letter that were guess")
            console.log("Guessed: " + this.guessedLetters.join(" , "))
            this.guesser.displayBoard(this.board)
            this.ref.displayBoard(this.board)
            let guess = "0"
            while (!this.isValidGuess(guess)){
                guess = this.guesser.getMove();
                if (!this.isValidGuess(guess)){
                    console.log("Invalid")
                }
            }
            this.enterValidGuess(guess)
        }
        console.log(this.resolveGame())

    }
    resolveGame(){
        if(this.guessesRemaining === 0){
            let winningWord = this.ref.reveal();
            return "The word was: " + winningWord() + " " + "Sorry you lose! PLAY AGAIN"
        }



    }
    enterValidGuess(guess){
        this.guessedLetters.push(guess);
        let positions = this.ref.checkGuess(guess)
        if (positions.length === 0 ){
            this.guessesRemaining --;
        }
        this.board.addChar(positions, guess)
    }
    isValidGuess(char){
        let abcds = "abcdefghijklmnopqrstuvwxyz"
        return (char.length === 1 && abcds.includes(char) && !this.guessedLetters.includes(char))
    }
}

export default Game;





