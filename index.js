import HumanPlayer from "./HumanPlayer.js"
import Board from "./Board.js"
import Game from "./game.js"
import View from "./View.js"

document.addEventListener("DOMContentLoaded",()=>{
    let button = document.createElement("button")
    button.innerText = "Start Game"
    document.body.appendChild(button)
    
    button.addEventListener("click",()=>{

        document.body.removeChild(button)
        let newGame = new Game();

        let el = document.querySelector("#gameDiv")
        
        new View(newGame, el)

    })
})