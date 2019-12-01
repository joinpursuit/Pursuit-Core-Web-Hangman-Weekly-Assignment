import View from "./View.js"
import HumanPlayer from "./HumanPlayer.js"
import ComputerPlayer from "./ComputerPlayer.js"
import Game from "./Game"
document.addEventListener("DOMContentLoaded", ()=>{
    let el = document.querySelector("#myHangman")
    let human = new HumanPlayer("Sunshine")
    let robot = new ComputerPlayer()
    let game = new Game({ref: robot, guesser:human})
    new View(game, el)
})