import {hangmanPics} from "./hangmanPics.js"

class View {
    constructor(game) {
        this.game = game
        this.game.start()
        this.events()
        this.play()
    }
    //foundation() {
       
        let form = document.querySelector("#guessSubmission")
        let guessTextInput = document.querySelector("#guess")
        let submit = document.querySelector("#submit")
        // submit.setAttribute("id", "submit")
        // form.appendChild(guessTextInput)
        // this.vis.appendChild(form)
    }
    play(){
    this.displayBoard()
    this.displayGuesses()
    this.displayHangman()
        while(this.game.gameOver()){ 
            let hi = document.createElement("h1")
            hi.innerText = this.game.endGame()
            this.vis.appendChild(h1)
            let form = document.querySelector("form")
            form.parentNode.removeChild(form)
        }
    }
    events() {
        let form = document.querySelector("form")
        form.addEventListener("submit", event => {
            event.preventDefault()
            let input = document.querySelector("input")
            let guess = input.value
            input.value = ""
            if (this.game.isValidGuess(guess)) {
                this.game.enterValidGuess(guess)
            }
            this.play()
        })
        
        // let submit = document.querySelector("#button")
        // submit.addEventListener("click", () => {
    }
    displayBoard(board = this.game.board){
        let secretWord = document.querySelector("#secretWord")
        for(let i=0; i < board.length(); i++){
            let guessLetter = document.createElement("li")
            guessLetter.innerText = board[i]
            secretWord.appendChild(guessLetter)
            }
    }
    displayGuesses(){
        let guesses = document.querySelector("#guesses")
        for(let i=0; i < this.game.guesses.length; i++){
            let guesses = document.createElement("li")
            guesses.innerText = this.game.guesses[i]
            guesses.appendChild(guesses)
        }
    }
    displayHangman(){
        let hangmanPics = document.querySelector("img")
        hangmanPics.innerText = hangmanPics[this.game.guessCount]
    }
}

export default View