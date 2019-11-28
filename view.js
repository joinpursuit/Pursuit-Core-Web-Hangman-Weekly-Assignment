import Game from './Game.js'
import HumanPlayer from './HumanPlayer.js'
import ComputerPlayer from './ComputerPlayer.js'

class View{
    constructor(game,displayEl,gameEl){
        this.game = game
        this.displayEl = displayEl
        this.gameEl = gameEl
        this.play()
    }
    play(){
        if(this.game.gameIsOver()){
            let button = document.querySelector("button");
            let userGuess = document.querySelector("#userGuess");
            button.parentNode.removeChild(button);
            userGuess.parentNode.removeChild(userGuess);
            let h1 = document.createElement("h1")
            h1.innerText = this.game.reveal()
        } else {
            this.display()
            this.makeGuess()
        }

    }

    display(){
        let disH1 = document.createElement("h1")
        disH1.innerText = "Let's play a game"
        this.displayEl.appendChild(disH1)
        let p = document.createElement("p")
        p.id = "guessword"
        let secret = this.game.startBoard()
        p.innerText = `Guess this word \n ${secret.toString()} \n ${this.game.guessWord}`
        this.displayEl.appendChild(p)
        debugger


        this.gameEl.innerHTML =""
        let userGuess = document.createElement("input")
        userGuess.type = "Text"
        userGuess.id = "userGuess"
        userGuess.maxLength = "1"
        userGuess.size = "5"
        let button = document.createElement("button")
        button.innerText = "Guess"
        this.gameEl.appendChild(userGuess)
        this.gameEl.appendChild(button)
    }
    makeGuess(){
        let button = document.querySelector("button")
        button.addEventListener("click", ()=>{
            let input = document.querySelector("#userGuess")
            this.game.guess = input.value
            debugger
            if(this.game.isValidGuess(this.game.guess)){
                this.game.replace(this.game.guess)
                // if(this.wordCheck() === 0){break;}
            }else{
            this.guessRemaining -=1
            }
            
        })
    }
}

export default View;