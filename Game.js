// const HumanPlayer = require("./HumanPlayer.js")
// const ComputerPlayer = require("./ComputerPlayer")
const Board = require("./Board.js")
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    //this.computer = computer;
    this.currentPlayer = player1;
    this.board = new Board();
    // (this.computer.secretWordLength());
    this.guessesRemaining = 9;
    this.guessedLetters = [];
  }
  switchPlayers(){
    
    this.currentPlayer === this.player1? this.player2: this.player1
  }  
  isGameOver() {
    if(this.board.isComplete(this.computer.secretWord) || this.guessesRemaining === 0) {
      return true;
    } else {
      return false;
    }
  }

   
  guessValidity(letter) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (!this.guessedLetters.includes(letter) &&  alphabets.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  play() {
    while(!this.isGameOver()) {
    console.clear();
    console.log('Welcome ' + this.player1.name )

      this.board.display();
      console.log("you have " + this.guessesRemaining  + " guesses remaining")
      console.log("Guessed letter: " + this.guessedLetters)
      let letter = this.player1.getMove();

      if(this.guessedLetters.includes(letter)) {
        letter = readline.question("You already picked this letter. Please enter a different letter: ")
      } 
      if (this.guessValidity(letter)) {
        this.guessedLetters.push(letter);
        this.board.addLetter(this.computer.secretWord, letter);
        this.guessesRemaining --;
      } else {
         letter = console.log("Please enter a valid letter: ")
      }


      console.clear();
    } 

    if(this.board.isComplete(this.computer.secretWord)) {
      console.log(" YOU WON! ")
      console.log("The word is: " + this.computer.reveal());
    } else {
      console.log(" YOU lOOSE ! ")
      console.log("The word is: " + this.computer.reveal());
    }
  }
}
export default Game;


// let playerName = console.log('Please enter name ');
// let game = new Game(new HumanPlayer(playerName))
// game.play(); 
