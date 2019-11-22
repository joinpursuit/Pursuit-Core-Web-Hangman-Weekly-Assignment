class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.play();
        // these will run in play method
        
    }

    play(){
        if(!this.game.isGameOver()){
            this.displayBoard();
            this.displayGuessed();
            this.displayImgs(this.game.guessesRemaining);
            this.bindEvents();
        } else {
            let p = document.querySelector("#pSelect");
            let h1 = document.querySelector("#h1");
            let currentBoard = this.game.computer.reveal();
            if(this.game.guessesRemaining){
                h1.innerText = currentBoard;
                p.innerText = "You win hangman! Congratulations!";
            } else {
                h1.innerText = currentBoard;
                p.innerText = "You ran out of guesses! You lose! This was the word: ";
            }
        }
    }

    displayImgs(numGuesses){
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let newSrc = `./images/hangman${numGuesses}.jpg`;
        img.src = newSrc;

        imgDiv.appendChild(img);
        this.el.prepend(imgDiv);
    }

    displayBoard(){
        this.el.innerHTML = "";
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.board.displayBoard();
        let h1 = document.createElement("h1")
        h1.innerText = currentBoard;
        let p = document.createElement("p");
        p.id="pSelect";
        p.innerText = "Please enter a letter:"
        let guessed= document.createElement("p");
        guessed.id="guessedAlready";
        let input = document.createElement("input");
        input.id ="letterInput";
        let button = document.createElement("button");
        button.id="submitBtn"
        button.innerText = "Submit";

        boardDiv.appendChild(h1);
        boardDiv.appendChild(guessed);
        boardDiv.appendChild(p);
        boardDiv.appendChild(input);
        boardDiv.appendChild(button);
        this.el.appendChild(boardDiv);
    }

    bindEvents(){
        let button = document.querySelector("#submitBtn");
        button.addEventListener("click", () => this.result());
    }
    
    displayGuessed(){
        let guessedAlready = document.querySelector("#guessedAlready");
        if(this.game.guessedAlready.length === 0){
            guessedAlready.innerText = "No guesses have been made";
        } else {
            let guessedLetters = this.game.guessedAlready.join(", ");
            guessedAlready.innerText = `Letters guessed already: ${guessedLetters}`;
        }
    }

    result(){
        let input = document.querySelector("#letterInput")
        let p = document.querySelector("#pSelect")
        if(this.game.isValidGuess(input.value) && !this.game.computer.word.includes(input.value)){
            this.game.guessedAlready.push(input.value);
            this.game.guessesRemaining -= 1;
        } else if(this.game.isValidGuess(input.value)){
            this.game.guessedAlready.push(input.value);
            this.game.board.addChar(this.game.computer.word, input.value);
        } else {
            p.innerText = "Please enter a valid letter!!";
        }

        console.log(this.game.board);
        console.log(this.game.guessedAlready)
        console.log(this.game.guessesRemaining);
        console.log(this.game.computer.word);

        this.play();
    }


}

export default View;