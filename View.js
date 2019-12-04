import {hangmanPics} from "./hangmanPics.js"
class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.game.beginGame()
        this.gameSetUp();
        this.bindEvents()
        this.play()
    }
    play(){
        this.boardDisplay()
        this.guessedLetters()
        this.hangmanDisplay()
        if(this.game.isGameOver()){
            let header = document.createElement("h1")
            header.innerText = this.game.resolveGame()
            this.el.appendChild(header)
            let form = document.querySelector("#form")
            form.parentNode.removeChild(form)
        }
    }
    bindEvents(){
        let form = document.querySelector("form")
        form.addEventListener("submit", e =>{
            e.preventDefault()
            let input = document.querySelector("input")
            let guess = input.value;
            input.value = ""
            if(this.game.isValidGuess(guess)){
                this.game.enterValidGuess(guess)
            }
            this.play()
        })
    }
    boardDisplay(board = this.game.board){
        let ul = document.querySelector("#board");
        ul.innerHTML = ""
        for (let i = 0; i <board.length(); i++){
            let li = document.createElement("li")
            li.innerText = board.get(i)
            ul.appendChild(li)
        }
    }
    guessedLetters(){
        let guesses = document.querySelector("#guessSoFar")
        guesses.innerHTML = ""
        guesses.innerText = this.game.guessedLetters.join(" , ")
        this.game.guessesRemaining -=1;
    }
    hangmanDisplay(){
        document.querySelector("#hangmanPic").innerText = hangmanPics[this.game.guessesRemaining]
    }
    gameSetUp(){
        let hangmanPic = document.createElement("div")
        hangmanPic.id = "hangmanPic"
        this.el.appendChild(hangmanPic)
        let guessSoFar = document.createElement("ul")
        guessSoFar.id = "guessSoFar"
        this.el.appendChild(guessSoFar)
        let board = document.createElement("ul")
        board.id = "board"
        this.el.appendChild(board)
        let form = document.createElement("form")
        let input = document.createElement("input")
        form.appendChild(input)
        this.el.appendChild(form)

    }
}
export default View;