import {hangmanPics} from "./hangmanPics.js"

class View {
    constructor(game) {
        this.game = game
        this.game.start()
        this.play()
        this.gameMove()
    }
// let submit = document.querySelector("#button")
// submit.addEventListener("click", () => {
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
    displayHangmanPics(){
        let hangmanPics = document.querySelector("#hangmanPic")
        hangmanPics.innerText = hangmanPics[this.game.guessCount]
    }
    play(){
        this.displayBoard()
        this.displayGuesses()
        this.displayHangmanPics()
        while(this.game.gameOver()){ 
            let endGame = document.querySelector("#ticker")
            endGame.innerText = this.game.endGame()
            let submit = document.querySelector("#guessSubmission")
            submit.parentNode.removeChild(form)
        }
    }
    gameMove(){
        let submit = document.querySelector("#guessSubmission")
        submit.addEventListener("submit", event => {
            event.preventDefault() //prevent it from submitting
            let guessTextInput = document.querySelector("#guess")
            let guess = guessTextInput.value
            if (this.game.guessValidator(guess)) {
                this.game.enterGuess(guess)
            }
        })
        this.play()
    }
}
        
export default View
        
        // submit.setAttribute("id", "submit")
        // form.appendChild(guessTextInput)
        // this.vis.appendChild(form)