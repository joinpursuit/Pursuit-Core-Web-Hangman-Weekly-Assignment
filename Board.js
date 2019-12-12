const ComputerPlayer = require("./ComputerPlayer.js");
const Moves = require("./Moves.js");

class Board {
    constructor() {
        this.board = []; 
        this.answer;
        this.guesses = [];
        this.movesRemaining = 6; 
        this.movesTaken = 0;
        this.MOVES = Moves;  
    } 

    buildBoard(word) {
        this.board = new Array(word.length).fill("_");
        this.answer = [...word];

    } 

    isMoveLong(guess) {
        if(guess.length > 1 || guess.length === 0) {
            return false; 
        } else {
            return true;
        }
    } 

    isValidMove(guess) {
        if(guess === undefined || !isNaN(guess) || !this.isMoveLong(guess)) {
            return false; 
        } else {
            if(!Moves[guess.toUpperCase()]) {
                return false;
            }
            return true;
        }
    } 

    isGuessedLetter(guess) {
        if(this.guesses.includes(guess.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }

    isCorrectGuess(guess) {
        return this.answer.includes(guess);
    }

    incorrectGuess() {
        this.movesRemaining -= 1;
        this.movesTaken += 1;
    }

    placeLetter(guess) {
        this.answer.forEach((el, i) => {
            if(el === guess.toLowerCase()) {
                this.board[i] = guess.toLowerCase();               
            }
        })
        this.movesTaken++;
    }

    addGuess(guess) {
        this.guesses.push(guess);
    }

    isGameOver() {
        if(this.movesRemaining === 0) {
            return true; 
        } else {
            return this.board.every((el) => el !== "_"); 
        }
    } 
} 

module.exports = Board; 