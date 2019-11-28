import View from "./view.js"
import HumanPlayer from "./hangmanHumanPlayer.js"
import ComputerPlayer from "./hangmanComputerPlayer.js"
import Game from "./hangmanGame.js"

document.addEventListener("DOMContentLoaded", () => {
    let vis = document.querySelector("#hg")

    let human = new HumanPlayer("Nilber")
    let cylon = new ComputerPlayer()
    let game = new Game ({ref: cylon}, {guesser: human})
    newView (vis,game)
})