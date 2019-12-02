import {hangmanPics} from "./hangmanPics.js"

class View {
    constructor(vis, game) {
        this.game = game
        this.vis = vis
        this.game.start()
        this.foundation()
        this.events()
        this.play()
    }
    foundation() {
        let guess = document.querySelector("#guess")
        let hangpic = document.querySelector("img")
        let secretWord = document.querySelector("ul")
        

        let form = document.createElement("form")
        let guessTextInput = document.createElement("input")
        let submit = document.createElement("button")
        submit.setAttribute("id", "submit")
        form.appendChild(guessTextInput)
        this.vis.appendChild(form)
    }
    play(){
    this.displayBoard()
    this.displayGuessedLetters()
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
        this.vis.innerHTML = ""
        let heading = document.createElement("h1")
        heading.innerText = "Guess the Word"
        this.vis.appendChild(heading)
    
        let ul = document.querySelector("#board")
        ul.innerText = ""
        for(let i=0; i < board.length(); i++){
            let li = document.createElement("li")
            li.innerText = board[i]
            ul.appendChild(li)
            }
    }
    displayGuesses(){
        let guess = document.querySelector("#guessed")
        guesses.innerHTML = ""
        guesses.innerText = this.game.guessedLetters
        
        // let input = document.createElement("input")
        // input.type = "text"
        // input.placeholder = "Enter Letter"
        // input.id = "words"
        // this.el.appendChild(input)
        
    }
displayHangman(){
    let hangmanPic = document.createElement("img")
    hangmanPic.setAttribute("id", "board")
    hangmanPic.setAttribute("src", )
    this.vis.appendChild("#hangmanPic")
    document.querySelector("#hangmanPic").innerText = hangmanPics[this.game.guessCount]
    }


}

export default View