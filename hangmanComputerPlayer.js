const {allTheWords} = require("./humanDictionary.js")

class ComputerPlayer {
    constructor (name = "Robo"){
        this.dictionary = {allTheWords}
        this.name = name
    }
    chooseSecretWord() {
        let idx = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[idx]
        return this.secretWord.length
    }
    checkGuess(character){
        let indicies = []
        for (let i=0; i<this.secretWord.length; i++){
            if (this.secretWord[i] === character){
            indicies.push(i)
            }
        }
        return indicies
    }
    reveal () {
        return this.secretWord
    }
}

export default ComputerPlayer

