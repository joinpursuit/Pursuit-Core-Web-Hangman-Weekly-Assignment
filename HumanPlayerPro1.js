//const readline = require("readline-sync");

class HumanPlayer {
    constructor (name = "Karen"){
        this.name = name;
    }
    guessLetter() {
        return readline.question("guess a letter: ").toUpperCase;
    }
}

module.exports = HumanPlayer;