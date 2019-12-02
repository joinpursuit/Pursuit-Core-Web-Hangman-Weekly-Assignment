import { hangManPics } from "./hangmanPics.js"
class View {
  constructor( game, element) {
    this.game = game;
    this.element = element;
    this.display();
    this.setUp();
    this.bindEvents();
    this.play();
    this.playAgain = playAgain()
  }
 
  play() {
    this.display();
    this.showLetters();
    if (this.game.isGameOver()) {
      let h2 = document.querySelector("#playGame");
      h2.innerText = this.game.currentPlayer.name +" Text here this is view js";
      this.el.appendChild(h2);
      let form = document.querySelector("#form");
      form.parentNode.removeChild(form);
      this.displayImages(this.game.guessesRemaining);
      this.bindEvent();
    }
  
  }
  bindEvent() {
    let form = document.querySelector("#form");
    // add event listener when we click on submit button at the same time 
    // we prevent the page to refresh
    form.addEventListener("submit", event =>{
      event.preventDefault();
      // grab input and get its value.
      let input = document.querySelector("input")
      let letter = input.value;
      //clear the input and assign in to an empty value overtimes we entre a letter and hit enter 
      input.value = "";
      // check the letter guessed if it is valid
      if(this.game.guessValidity(letter)){
        this.game.enterValidGuess(letter);
      }
      //creat a play method
      this.play();
    })
  }
  display(board = this.game.board){
    let ul = document.querySelector("#ul");
    ul.innerText = "";
    for (let i = 0; i < board.length(); i++) {
      let li = document.createElement("li");
    li.innerText = board.get(i);
    ul.appendChild(li);
    //let currentBoard = this.game.board.displayBoard();
  }
}
displayShowLetters(){
  let guesses = document.querySelector("#guessedSoFar");
  guesses.innerHTML = "";
  guesses.innerText = this.game.guessedLetters.join(", ")
}

displayHangMan() {
  document.querySelector("#hangManPic").innerText = hangManPics[this.game.guessesRemaining]
}

  playAgain(){
    let button = document.querySelector("#playAgain");
    button.addEventListener("click", ()=> {
      this.game.playAgain();
      this.play();
    })
  }
}

export default View;
