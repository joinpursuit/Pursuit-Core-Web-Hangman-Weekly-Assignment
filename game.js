const Board = require("./board.js")
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer =  require("./cpu.js")
// const {hangManPics} = require("./hangmanPics.js")

class Game{
    constructor(wordUsed){
        this.wordUsed = wordUsed;
        this.letterused =new HumanPlayer()
        this.board = new Board(wordUsed)
        this.cpu = new ComputerPlayer()
        
    }
    gameOver(){
        return this.cpu.winOrLose(this.wordUsed);
    }
    play(){
       
        let makeBlank = this.board.blankLetters()
        console.log(": "+makeBlank)
        while(!this.gameOver()){
            let letter =this.letterused.getLetter();
            let lIndex = this.cpu.checkLetter(letter,this.wordUsed);
            makeBlank = this.board.blankLetters(letter,lIndex);
            console.log("word: "+makeBlank);  
    }
}
isLetter(input){
    let letter =input
    let lIndex = this.cpu.checkLetter(letter,this.wordUsed)
    let makeBlank = this.board.blankLetters(letter,lIndex)
    console.log("Word: " +this.wordUsed)
    return makeBlank;
}

}


export default Game;