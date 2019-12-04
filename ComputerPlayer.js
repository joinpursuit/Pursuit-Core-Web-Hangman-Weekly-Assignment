const { allTheWords } = require("./words.js")

class ComputerPlayer {
    constructor(name = "SunnySheetMetal") {
        this.dictionary = allTheWords;
        this.name = name; 
        this.guessesMade = new Set();
    }

    displayBoard(board) {
        this.board = board; 
    }

    getMove() {
        let abcds = "abcdefghijklmnopqrstuvwxyz";
        this.dictionary = this.dictionary.filter(word => word.length === this.board.length())
        let missed = new Set([...this.guessesMade])
        for(let i = 0; i < this.board.length(); i++) {
            let char = this.board.get(i)
            if(char !== "_") {
                missed.delete(char);
                this.dictionary = this.dictionary.filter(word => word[i] === char);
            }
        }

        missed.forEach(char => {
            this.dictionary = this.dictionary.filter(word => !word.includes(char))
        })

        let letterCounter = {}
        this.dictionary.forEach(word => {
            for(let char of word) {
                letterCounter[char] ? letterCounter[char]++ : letterCounter[char] = 1;
            }
        })

        let max = 0; 
        let guess = null; 

        for(let char in letterCounter) {
            if(letterCounter[char] > max && !this.guessesMade.has(char)) {
                max = letterCounter[char];
                guess = char; 
            }
        }

        while(!guess) {
            let rand = Math.floor(Math.random() * abcds.length);
            let char = abcds[rand];
            if(!this.guessesMade.has(char)) {
                guess = char;
            }
        }
        this.guessesMade.add(guess)
        return guess; 

    }

    chooseSecretWord() {
        let idx = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[idx];
        return this.secretWord.length; 
    }

    checkGuess(char) {
        let indices = [];
        for(let i = 0 ; i < this.secretWord.length; i++) {
            if(this.secretWord[i] === char) {
                indices.push(i);
            }
        }
        return indices
    }

    reveal() {
        return this.secretWord;
    }
}

module.exports = ComputerPlayer;
