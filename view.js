class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
    }
    showGuess(){
        let userGuessed = document.querySelector("#userPicked") 
        userGuessed.innerText = userGuessed
    }
    displayBoard(){
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.display()
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
        button.addEventListener(click, this.result());
    }
    result(){
        let input = document.querySelector("input")
        let showRemining = document.querySelector("#guessesRemaining")
    }

}

export default View;