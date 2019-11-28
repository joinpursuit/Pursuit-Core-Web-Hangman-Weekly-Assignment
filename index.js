import Game from "./Game.js"
import Guesser from "./Guesser.js"
import view from "./view.js"
//import HumanPlayer from "./HumanPlayer.js"

document.addEventListener("DOMContentLoaded", () =>{
    let start = doctument.createElement("button")
    start.innerText = "Let's Start A New Game"
    document.body.appendChild(start)
    start.addEventListener("click", () =>{
    let game = new Game(new Guesser("human player"))
    let el = document.querySelector("#hm")
    new view(game, el)
    })
})
