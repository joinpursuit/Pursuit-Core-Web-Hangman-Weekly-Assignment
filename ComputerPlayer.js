const Dictionary = require("./Dictionary.js")

class ComputerPlayer{
    constructor(){
        this.listOfWords = new Dictionary()
        this.compGuessed = []
        this.letter = ""
    }

    wordSelect(){
        let ind = Math.floor(Math.random()*this.listOfWords.words.length)
        return this.listOfWords.words[ind]

    }
    letterGuess(){
        let abc = "abcdefghijklmnopqrstuvwxyz"
        let ind = Math.floor(Math.random()*25)
        this.letter = abc[ind]
        this.compGuessed.push(this.letter)
        return this.letter
    }
    guess(){
        this.letterGuess()
        if(this.compGuessed.length === 0){
            return this.letter
        } else {
            while(!this.compGuessed.includes(this.letter)){
                this.letterGuess()
            }
            
            return this.letter
        }
    }
    
    
}

comp = new ComputerPlayer()
comp.letterGuess()
console.log(comp.guess())
module.exports = ComputerPlayer;