const ComputerPlayer = require("./ComputerPlayer.js");
const Moves = require("./Moves.js");

class Board {
    constructor() {
        this.board = []; 
        this.answer;
        this.guesses = [];
        this.movesRemaining = 9; 
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
        if(guess === undefined || !isNaN(guess) || !this.isMoveLong(guess) || this.board.includes(guess.toLowerCase()) || this.guesses.includes(guess.toLowerCase())) {
            return false; 
        } else {
            if(!Moves[guess.toUpperCase()]) {
                return false;
            }
            return true;
        }
    } 

    placeLetter(guess) {
        if(this.isValidMove(guess)) {
            this.answer.forEach((el, i) => {
                if(el === guess.toLowerCase()) {
                    this.board[i] = guess.toLowerCase();
                }
            })

            if(!this.board.includes(guess.toLowerCase())) {
                this.movesRemaining -= 1;
            }

            this.guesses.push(guess.toLowerCase());
        }
    }

    isGameOver(board) {
        if(this.movesRemaining === 0) {
            return true; 
        } else {
            return board.every((el) => el !== "_"); 
        }
    } 
} 

module.exports = Board; 