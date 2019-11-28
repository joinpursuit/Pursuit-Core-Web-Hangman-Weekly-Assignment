import Game from "./Game.js"
import Board from "./Board.js"
// import ComputerPlayer from "./ComputerPlayer.js"
import View from "./view.js"
import HumanPlayer from "./HumanPlayer.js"

document.addEventListener("DOMContentLoaded", () => {
    let el = document.querySelector("#board")
    // debugger
    // let game = new Game(new Guesser)
    new View(el)
})