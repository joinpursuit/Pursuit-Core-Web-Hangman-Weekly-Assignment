class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.displayBoard();
        this.bindEvents();
        
    }

    displayBoard(){
        let boardDiv = document.createElement("div");
        boardDiv.id = "boardDiv"
        let currentBoard = this.game.board.displayBoard();
        let boardSpace = document.createElement("h1")
        boardSpace.innerText = currentBoard;
        boardDiv.appendChild(boardSpace);

        this.el.appendChild(boardDiv);
    }

    bindEvents(){
        let submit = document.querySelector("#getLetterBtn");
        submit.addEventListener("click", () => {
            let guess = document.querySelector("#getLetter").value;
           let bull =  this.game.isValidGuess(guess)
             debugger
             console.log(bull)

        })
    }
    


}

export default View;