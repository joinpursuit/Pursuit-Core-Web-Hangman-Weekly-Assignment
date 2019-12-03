import Game from "./game.js"; 
import HumanPlayer from "./humanPlayer.js"

class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        // this.play();
        this.displayBoard();
    }
    // play(){
    //     if(this.game.isGameOver()){
    //         this.displayBoard();
    //         this.showGuess();
    //         this.bindEvents();
    //         this.hangmanPics();
    //     } else if(this.game.board.isComplete()){
    //         this.displayBoard();
    //         this.finishedGame();
    //     }else{
    //         this.displayBoard();
    //         this.finishedGame();
    //     }
        
    // }
    hangmanPics(guessesRemaining){
        let newDiv = document.createElement("div")
        newDiv.id = "hangmanPics"
        let img = document.createElement("img")
        let hangmanImg =`./images/base.${guessesRemaining}.jpg`
        img.src = hangmanImg
        newDiv.appendChild(img)
        this.el.prepend(newDiv)
    }
    showGuess(){
        let userGuessed = document.querySelector("input") 
        userGuessed.innerText = input.value
    }
    displayBoard(){
        this.el.innerHTML = "";
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.board.displayBoard()
        let h1 = document.createElement("h1");
        h1.innerText= currentBoard
        let button = document.createElement("button");
        button.innerText= "Enter Guess"
        let input = document.createElement("input");
        let p = document.createElement("p");
        p.innerText= "Choose a letter"
        let showGuess = document.createElement("p");
        showGuess.id = "userPicked";
        let showRemaining = document.querySelector("h3");
        showRemaining.id = "guessesRemaining";
        
        boardDiv.appendChild(h1);
        document.body.appendChild(button);
        document.body.appendChild(input);
        boardDiv.appendChild(p);
        boardDiv.appendChild(showGuess)
        boardDiv.appendChild(alreadyPicked);
        boardDiv.appendChild(showRemaining);
        this.el.appendChild(boardDiv);

    }
    bindEvents(){ 
        let button = document.querySelector("button");
        button.addEventListener(click,() => this.result());
    }


}
export default View;