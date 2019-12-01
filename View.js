// import {hangManPics} from "./hangManPics.js";

class View {
    constructor (el, game){
        this.game = game;
        this.el =el;
        this.game.beginGame();
        this.setUpTheGame();
        this.bindEvents();
        this.play();
    }
    play(){
        this.displayBoard();
        this.displayGuessedLetters();
        this.displayHangMan();
        if(this.gameisGameOver())
        let h1 = docuent.createElement("h1")
        h1.innerText = this.game3.resolveGame();
        this.el.appendChild(h1);
        let form= document.querySelector("form");
        form.parentNode.removeChild(form);


}
bindEvents(){
    let form = document.querySelector("form");
    form.addEventListener("submit", e=> {
        e.preventDefault();
        let input = document.querySelector("input");
        let guess = input.value;
        input.value ="";
        if(this.game.isValidGuess(guess)) {
            this.game.enterValidGues(guess);
        }
        this.play()
    })
}
displayBoard(board =this.game.board) {
    let ul = doucment.querySelector("#board");
    ul.innerHTML = "";
    for (let i =0; i < boardlength(); i++){
        let li = document.createElement("li");
        li.innerText = board.get(i);
        ul.appendChild(i);

    }
}
displayGuessedLetters(){
    let guesses = document.querySelector("guessedSoFar");
    guesses.innerHTML ="";
    guesses.innerText = this.game.guessedLetters.join(",")
}

displayHangMan(){
    document.querySelector("#hangManPics").innterText = hangmanPics[this.game.guessedLetters]
}

setUpTheGame(){
    let hangManPic = docuemnt.createElement("div");
    hangManPic.id = "hangManPic";
    this.el.appendChild(hangManPic);
    let guessedSoFar = document.createElement("ul");
    guessedSoFar.id = "guessedSoFar";
    let board = document.createElement("ul");
    board.id = "board";
    this.el.appendChild(board);
    let form = document.createElement("form");
    let input = document.createElement("input");
    form.appendChild(input);
    this.el.appendChild(form);
    

}

}
export default View;