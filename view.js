import ComputerPlayer from "./computerPlayer.js"
import Game from "./game.js"
import HumanPlayer from "./humanPlayer.js"
import View from "./view.js"
// import dictionary from "./words.js"

class View{ 
    constructor(game,element){
        this.game = game;
        this.element = element;
        this.bindEvents()
        this.play()
        this.playAgain()
        this.makeMove()
        this.displayBoard();
    }
    play(){
        let playerText = document.querySelector("#playerText")
        this.displayBoard();
        this.makeMove();
        if (this.game.gameOver()) {
            playAgain();
        }
    
    }       
    bindEvents(){
        let enterLetter = document.querySelector("#boardDiv")
        enterLetter.addEventListener("click",(e)=>{
        let selected = e.target.innerText;
            this.makeMove(selected);
        })
    }
    displayBoard(board = this.game.board) {
       let gameDiv = document.createElement("div")
       gameDiv.id = "boardDiv";
       this.element.innerHTML = this.game.board.reveal().forEach(word =>{
        let ul = document.createElement("ul")
        ul.classList.add("word")
        let li = document.createElement("li")
        li.innerText = "val";
        ul.appendChild(li)
        gameDiv.appendChild(ul);
        this.element.appendChild(gameDiv)
        })
    
    }
    makeMove() {
        if(this.game.board.isValidMove()){
            this.game.nextGuess();
        } else if (playAgain()){
            this.game.makeMove();
        } else {
           this.game.gameOver();
        }
        this.displayBoard()
    }
}
    
export default View;