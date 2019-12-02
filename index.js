import View from "./view.js"
import HumanPlayer from "./hangmanHumanPlayer.js"
import ComputerPlayer from "./hangmanComputerPlayer.js"
import Game from "./hangmanGame.js"

document.addEventListener("DOMContentLoaded", () => {
    let vis = document.querySelector("#vis")

    let human = new HumanPlayer("Nilber")
    let cylon = new ComputerPlayer()
    let lostsoul = new Game ({diviner: cylon}, {guesser: human})
    new View (vis,lostsoul)
})