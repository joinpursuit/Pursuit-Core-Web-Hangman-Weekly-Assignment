import Board from "./Board.js";
import ComputerPlayer from "./ComputerPlayer.js";
//const HumanPlayer = require("./HumanPlayer.js")
//const ComputerPlayer = require("./ComputerPlayer")
//const Board = require("./Board.js")
class Game {
  constructor(player) {
    this.player = player;
    this.ComputerPlayer = ComputerPlayer;
    this.board = new Board
    new Board = this.ComputerPlayer.secretWordLength();
    this.guessesRemaining = 6;
    this.guessedLetters = [];
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
    console.clear();
    console.log('Welcome To Hangman ' + this.player.name + " Let's Have Fun!");

    while(!this.isGameOver()) {
      this.board.display();
      console.log("you have " + this.guessesRemaining  + " guesses remaining")
      console.log("Guessed letter: " + this.guessedLetters)
      let letter = this.player.getMove();

      if(this.guessedLetters.includes(letter)) {
        letter = readline.question("You already picked this letter. Please enter a different letter: ")
      } 
      if (this.guessValidity(letter)) {
        this.enterValidGuess(letter);
      } else {
         letter = readline.question("Please enter a valid letter: ")
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

  enterValidGuess(letter) {
    this.guessedLetters.push(letter);
    this.board.addLetter(this.computer.secretWord, letter);
    this.guessesRemaining--;
  }
 
}
module.exports = Game;
//export default Game;
