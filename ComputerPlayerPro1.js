const Board = require("./BoardPro1.js")


class ComputerPlayer {
    constructor() {
        this.name = "AI"
        this.letters = new Set();

    }

   

    
    //show guessed letters not in word
    letterNotInWord() {
        return "Guessed Letters: " + Array.from(this.letters);
    }
    //show number of failed guesses
    failedGuesses() {
        return "failed guesses: " + this.failedGuesses;
    }
}


module.exports = ComputerPlayer;