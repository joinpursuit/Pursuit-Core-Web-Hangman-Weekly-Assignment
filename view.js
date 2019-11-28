import Game from "./game.js"; 
import HumanPlayer from "./humanPlayer.js"

class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.displayBoard();
        // this.play();
    }
    // }
    // play(){
    //     if(this.game.isGameOver()){
    //         this.displayBoard();
    //         this.showGuess();
    //         this.bindEvents();
    //         this.hangmanPics();
    //     } else if(this.game.isComplete(this.game.computer.word)){
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
        img.src =`./images/base.${guessesRemaining}.jpg`
        newDiv.appendChild(img)
        this.el.prepend(newDiv)
    }
    showGuess(){
        let userGuessed = document.querySelector("#userPicked") 
        userGuessed.innerText = userGuessed
    }
    displayBoard(){
        this.el.innerHTML = "";
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.displayBoard()
        let h1 = document.createElement("h1");
        h1.innerText= currentBoard
        let button = document.createElement("button");
        button.innerText= "Enter Guess"
        let input = document.createElement("input");
        let p = document.createElement("p");
        p.innerText= "Choose a letter"
        let showGuess = document.createElement("p");
        showGuess.id = "alreadyPicked";
        let showRemaining = document.querySelector("h3");
        showRemaining.id = "guessesRemaining";
        
        boardDiv.appendChild(h1);
        boardDiv.appendChild(button);
        boardDiv.appendChild(input);
        boardDiv.appendChild(p);
        boardDiv.appendChild(alreadyPicked);
        document.body.appendChild(showRemaining);
        this.el.appendChild(boardDiv);

    }
    bindEvents(){ 
        let button = document.querySelector("button");
        button.addEventListener(click,() => this.result());
    }
    result(){
        let input = document.querySelector("input")
        let showRemaining = document.querySelector("#guessesRemaining")
        if(this.game.isValidGuess(input.value) && !this.game.computer.word.includes(input.value)){
            this.game.guessedLetters.push(input.value);
            this.game.guessesRemaining --;
            showRemaining.innerText = `Incorrect, Guesses remaining: ${this.game.guessesRemaining}`;
        } else if(this.game.isValidGuess(input.value.toLowerCase())){
            this.game.guessedAlready.push(input.value.toLowerCase());
            this.game.board.addChar(this.game.computer.word, input.value.toLowerCase());
            showRemaining.innerText = `Good choice! Guesses remaining: ${this.game.guessesRemaining}`;
        } else {
            showRemaining.innerText = "Please enter a letter! " + "Guesses Remaining: " + this.game.guessesRemaining;
        }
        this.play();
    }

}
export default View;