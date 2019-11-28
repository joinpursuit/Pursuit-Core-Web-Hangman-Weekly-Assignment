import HumanPlayer from "./humanPlayer.js"
import Game from "./game.js"

document.addEventListener("DOMContentLoaded",()=>{
    let button = document.createElement("button")
    button.innerText = "Let's Play!"
    document.body.appendChild(button)
    
    button.addEventListener("click",()=>{
        document.body.removeChild(button)
        let newGame = new Game(new HumanPlayer());
        let el = document.querySelector("#game")
        new View(game, el)

    })
})


