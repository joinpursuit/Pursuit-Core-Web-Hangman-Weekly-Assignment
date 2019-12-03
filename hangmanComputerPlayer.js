import {dictionary} from "./humanDictionary.js"

class ComputerPlayer {
    constructor (name = "Cylon 6"){
        this.dictionary = {dictionary}
        this.name = name
    }
    secretWord() {
        let index = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[index]
        return this.secretWord.length
    }
    disclosure() {
        return this.secretWord
    }
}

export default ComputerPlayer

