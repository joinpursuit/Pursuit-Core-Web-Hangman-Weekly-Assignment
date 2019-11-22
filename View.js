class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.play();
        
    }

    play(){
        let h1 = document.querySelector("#h1");

        if(this.game.isGameOver()){
            this.displayBoard();
            this.displayGuessed();
            this.displayImgs(this.game.guessesRemaining);
            this.bindEvents();
        } else if(this.game.board.isComplete(this.game.computer.word)){
            let currentBoard = this.game.computer.reveal();
            h1.innerText = currentBoard;
            p.innerText = "You win hangman! Congratulations!";
        } else if(this.remainingGuesses === 0){
            h1.innerText = currentBoard;
            p.innerText = "You ran out of guesses! You lose! The word was: ";
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

        let h4 = document.createElement("h4");
        h4.id="guessesRemaining"
        document.body.appendChild(h4)

        let p = document.createElement("p");
        p.id="enterGuess";
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
        let h4 = document.querySelector("#guessesRemaining")
        let p = document.querySelector("#enterGuess")
        if(this.game.isValidGuess(input.value.toLowerCase()) && !this.game.computer.word.includes(input.value.toLowerCase())){
            this.game.guessedAlready.push(input.value.toLowerCase());
            this.game.guessesRemaining -= 1;
            h4.innerText = `Incorrect guess! Guesses remaining: ${this.game.guessesRemaining}`;
        } else if(this.game.isValidGuess(input.value.toLowerCase())){
            this.game.guessedAlready.push(input.value.toLowerCase());
            this.game.board.addChar(this.game.computer.word, input.value.toLowerCase());
            h4.innerText = `Correct guess! Nice! Guesses remaining: ${this.game.guessesRemaining}`;
        } else {
            h4.innerText = "Please enter a valid letter!! " + "Guesses Remaining: " + this.game.guessesRemaining;
        }
        
        this.play();

    }


}

export default View;