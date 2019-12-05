class View {
    constructor(game, element) {
        this.game = game;
        this.element = element;
        this.game.getNewWord();
        this.displayBoard();
    }

    displayBoard() {
        this.removeChildren();
        let guessFeedback = document.querySelector("#guessFeedback");
        if(!guessFeedback) {
            let guessFeedback = document.createElement("p");
            guessFeedback.id = "guessFeedback";
            this.element.appendChild(guessFeedback);
        }

        let board = document.createElement("h2");
        board.innerText = this.game.getBoard().join(" ");

        let guesses = document.createElement("p");
        guesses.innerText = `Guesses: ${this.game.getGuesses().join(", ")}`;
        guesses.id = "guesses";

        let movesRemaining = document.createElement("p");
        movesRemaining.innerText = `Moves Remaining: ${this.game.getMoves()[0]}`;
        movesRemaining.id = "movesRemaining";

        this.appendChildren(board, guesses, movesRemaining);

        this.isGameOver();
    }

    removeChildren() {
        let board = document.querySelector("h2");
        if(board) {
            board.parentNode.removeChild(board);
        }

        let guesses = document.querySelector("#guesses");
        if(guesses) {
            guesses.parentNode.removeChild(guesses);
        }

        let movesRemaining = document.querySelector("#movesRemaining");
        if(movesRemaining) {
            movesRemaining.parentNode.removeChild(movesRemaining);
        }
    }

    appendChildren(...elements) {
        elements.forEach(child => this.element.appendChild(child));
    }
    
    guess() {
        let button = document.querySelector("#guess");
        let guessFeedback = document.querySelector("#guessFeedback");

        button.addEventListener("click", () => {
            let userInput = document.querySelector("input");
            if(!this.game.isValidMove(userInput.value)) {
                guessFeedback.innerText = "Invalid Letter";
                userInput.value = "";
            } else if(this.game.isGuessedMove(userInput.value)) {
                guessFeedback.innerText = "Guessed Letter";
            } else {
                this.validGuess(userInput);
            }
        })
    }

    validGuess(userInput) {
        let guessFeedback = document.querySelector("#guessFeedback");
        if(this.game.isCorrectGuess(userInput.value)) {
            guessFeedback.innerText = "Correct Guess";
            this.game.placeLetter(userInput.value);
        } else {
            guessFeedback.innerText = "Incorrect Guess";
            this.game.incorrectGuess();
        }
        this.game.addGuess(userInput.value);
        userInput.value = "";
        this.displayBoard();
    }

    isGameOver() {
        if(this.game.isGameOver()) {
            this.removeGuessing();
            if(this.game.board.movesRemaining === 0) {
                guessFeedback.innerText = "Lose!";
            } else if(this.game.getBoard().every(el => el !== "_")){
                guessFeedback.innerText = "Win!";
            }
        } else {
            this.guess();
        }
    }

    removeGuessing() {
        let guessing = document.querySelector("#guessBox");
        guessing.parentNode.removeChild(guessing);
    }
    
}

export default View;