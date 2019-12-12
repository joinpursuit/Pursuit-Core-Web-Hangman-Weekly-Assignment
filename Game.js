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

    isValidMove(guess) {
        return this.board.isValidMove(guess);
    }

    isGuessedMove(guess) {
        return this.board.isGuessedLetter(guess);
    }

    isCorrectGuess(guess) {
        return this.board.isCorrectGuess(guess);
    }

    incorrectGuess() {
        this.board.incorrectGuess();
    }

    placeLetter(guess) {
        this.board.placeLetter(guess);
    }

    addGuess(guess) {
        this.board.addGuess(guess);
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

export default Game;