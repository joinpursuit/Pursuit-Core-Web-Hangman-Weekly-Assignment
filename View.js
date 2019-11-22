class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.displayImgs(this.game.guessesRemaining);
        this.displayBoard();
        this.bindEvents();
        // these will run in play method
        
    }

    displayImgs(numGuesses){
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let newSrc = `./images/hangman${numGuesses}.jpg`;
        img.src = newSrc;

        imgDiv.appendChild(img);
        this.el.appendChild(imgDiv);
    }

    displayBoard(){
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.board.displayBoard();
        let h1 = document.createElement("h1")
        let p = document.createElement("p");
        p.innerText = "Please Enter a letter:"
        let input = document.createElement("input");
        input.id ="letterInput";
        let button = document.createElement("button");
        button.id="submitBtn"
        button.innerText = "Submit";

        h1.innerText = currentBoard;

        boardDiv.appendChild(h1);
        boardDiv.appendChild(p);
        boardDiv.appendChild(input);
        boardDiv.appendChild(button);
        this.el.appendChild(boardDiv);
    }


    bindEvents(){
        let button = document.querySelector("#submitBtn");
        button.addEventListener("click", () => this.result());
    }
    
    result(){
        let input = document.querySelector("#letterInput")
        this.el.isValidGuess(input.value);
    }


}

export default View;