import {hangmanPics} from "./hangmanPics.js"

class View {
    constructor(vis, game) {
        this.game = game
        this.vis = vis
        this.game.beginGame()
        this.game.setUpTheGame()
        this.bindEvents()
        this.play()
    }
    play(){
    this.displayBoard()
    this.displayGuessedLetters()
    this.displayHangman()
        if(this.game.isGameOver()){       //while this.game.isGameOVer
            let hi = document.createElement("h1")
            hi.innerText = this.game.resolveGame()
            this.vis.appendChild(h1)
            let form = document.querySelector("form")
            form.parentNode.removeChild(form)
        }
    }
    setUpTheGame() {
        let guessed = document.createElement("ul")
        guessed.id = "guessed"
        this.vis.appendChild("#guessed")
        
        let hangpic = document.createElement("p")
        hangpic.id = "hangpic"
        this.vis.appendChild("#hangpic")

        let board = document.createElement("ul")
        board.id = "board"
        this.vis.appendChild("#board")

        let form = document.createElement("form")
        let input = document.createElement("input")
        let button = document.createElement("button")
        button.id = "button"
        form.appendChild(input)
        this.vis.appendChild(form)
    }
    bindEvents() {
        let form = document.querySelector("form")
        form.addEventListener("submit", v => {
            v.preventDefault()
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
        this.el.innerHTML = "" //clears the HTML
        let heading = document.createElement("h1")
        heading.innerText = "Guess the Word"
        this.vis.appendChild(heading)
    
        let ul = document.querySelector("#board")
        ul.innerText = "" //clears all the text in the ul. innerHTML shows the HTML code
        for(let i=0; i < board.length(); i++){
            let li = document.createElement("li")
            li.innerText = board.get(i)
            ul.appendChild(li)
            }
    }
    displayGuessedLetters(){
        let gueeses = document.querySelector("#guessed")
        guesses.innerHTML = ""
        guesses.innerText = this.game.guessedLetters
        
        // let input = document.createElement("input")
        // input.type = "text"
        // input.placeholder = "Enter Letter"
        // input.id = "words"
        // this.el.appendChild(input)
        
    }
displayHangman(){
        document.querySelector("#hangpic").innerText = hangmanPics[this.game.guessesRemaining] //hangman pics are in an array - shows pic based on index as guesses remaining 
    
        let hangpic = document.createElement("img")
        hangpic.src = 
        hangpic.id = "hangpic"
        this.el.appendChild("#hangpic")
    }


}



export default View