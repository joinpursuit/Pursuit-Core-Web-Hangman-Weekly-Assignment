import Game from "./Game"

class View {
    constructor(el, game){
        this.game = game
        this.el = el
        this.game.board.displayBoard(this.game.referee)
        this.createBoard()
    }

    createBoard() {
        this.removeElements()
        let moveValidity = document.createElement("p")
        moveValidity.id = "moveValidity"

        let word = document.createElement("p")
        word.id = "word"
        word.innerText = this.game.board.board.join(" ")

        let guessMade = document.createElement("p")
        guessMade.id = "guessMade"
        guessMade.innerText = "guesses: " + this.game.board.guesses

        let movesLeft = document.createElement("p")
        movesLeft.id = "movesLeft"
        movesLeft.innerText = "guesses remaining: " + this.game.board.guessesRemaining

        this.el.appendChild(moveValidity)
        this.el.appendChild(word)
        this.el.appendChild(guessMade)
        this.el.appendChild(movesLeft)
        this.isGameOver()
    }

    removeElements() {
        let word = document.querySelector("#word")
        if(word) {
            word.parentNode.removeChild(word)
        }
        let guessMade = document.querySelector("#guessMade")
        if(guessMade) {
            guessMade.parentNode.removeChild(guessMade)
        }
        let movesLeft = document.querySelector("#movesLeft")
        if(movesLeft) {
            movesLeft.parentNode.removeChild(movesLeft)
        }
    }

    play() {
       let button = document.querySelector("#button")
       button.addEventListener("click", () =>  {
           let userInput = document.querySelector("#guess")
           let moveValidity = document.querySelector("#moveValidity")
           if(!this.game.board.isValidMove(userInput.value)) {
               moveValidity.innerText = "Invalid Letter"
            } else {
                if(this.game.referee.newWord.includes(userInput.value)){
                    moveValidity.innerText = "Correct Guess"
                } else {
                    moveValidity.innerText = "Incorrect Guess"
                }
                this.game.board.placeMark(userInput.value, this.game.referee)
                userInput.value = ""
               this.createBoard()
           }
       })
    }
    isGameOver() {
        let moveValidity = document.querySelector("#moveValidity")
        if(this.game.isGameOver()){
            if(this.game.board.isComplete()){
                moveValidity.innerText = "You Win!"
            } else {
                moveValidity.innerText = "You Lose!"
            }
            this.replay()
        } else {
            this.play()
        }
    }
        replay() {
        let div = document.querySelector("#userInput")
        div.style.display = "None"
        let newButton = document.createElement("newButton")
        newButton.innerText = "Replay"
        document.body.appendChild(newButton)
        newButton.addEventListener("click", () =>{
            let moveValidity = document.querySelector("#moveValidity")
            moveValidity.parentNode.removeChild(moveValidity)
            newButton.parentNode.removeChild(newButton)
            div.style.display = "inline" 
            new View(this.el, new Game())
        })
    }
}
export default View;