const Board = require("./BoardPro1.js")
const HumanPlayer = require("./HumanPlayerPro1")
const ComputerPlayer = require("./ComputerPlayerPro1")


class Game {
    constructor() {
        this.playing = true
        this.players = [new HumanPlayer(), new ComputerPlayer()];
        this.currentPlayer = 0;
        this.board = new Board(this.word)
        this.letters = new Set();
        this.maxGuesses = 6;
        this.failedGuesses = 0;
    }
    play() {
        let theGuess = "";
        while (this.playing) {
            theGuess = this.players[this.currentPlayer].guess(this.letters)
            this.letters.add(theGuess);
           
            if (this.word.search(theGuess) == -1) {
                this.failedGuesses++;
                if (this.failedGuesses >= this.maxGuesses) {
                    this.playing = false;
                    return "GAME OVER!"
                }
            } else { // it's a good guess   
                let wordLetters = new Set(this.word.split(""));
                let didWin = wordLetters.subSet(this.letters);
                if (didWin) {
                    this.playing = false;
                    return "YOU WIN!";
                }
            }
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        }
    }
}
export default Game;