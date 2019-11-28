const allTheWords = require('./word.js')

class HumanPlayer{
    constructor(human){
        this.human = human
        this.word = allTheWords[(Math.floor(Math.random() * dictionary.length))]
    }
    secretWordLength(){
        let secretWord = this.word
        return secretWord.length
    }
    reveal(){
        let revealStr = []
        for(let i = 0; i < this.word.length; i++){
            revealStr.push(this.word[i])
        }
        let currentBoard = revealStr.join(" ")
        return currentBoard
    }

}
export default HumanPlayer