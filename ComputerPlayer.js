const Dictionary = require("./Dictionary.js")

class ComputerPlayer {
    constructor() {
        this.dictionary = Dictionary;
    }

    getWord() {
        return this.dictionary[Math.floor(Math.random() * this.dictionary.length - 1)]
    }
}

module.exports = ComputerPlayer;