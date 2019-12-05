const ComputerPlayer = require("./ComputerPlayer.js");
const HumanPlayer = require("./HumanPlayer.js");
const Board = require("./Board.js");
// const readline = require("readline");

class Game {
    constructor() {
        this.board = new Board();
        this.referee = new ComputerPlayer();
        this.player = new HumanPlayer();
    }

    isGameOver() {
        return this.board.isGameOver();
    }

    getNewWord() {    
        this.board.buildBoard(this.referee.getWord());
    }

    placeGuess(guess) {
        guess = readline.question("Enter a guess: ");
        this.board.placeLetter(guess);
    }

    getBoard() {
        return this.board.board;
    }

    getAnswer() {
        return this.board.answer;
    }

    getGuesses() {
        return this.board.guesses;
    }

    getMoves() {
        return [this.board.movesRemaining, this.board.movesTaken];
    }
}