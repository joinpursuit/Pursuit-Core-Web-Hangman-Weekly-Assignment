import Game from("./Game.js")
import HumanPlayer from ("./HumanPlayer.js")
import ComputerPlayer from ("./ComputerPlayer.js")
import View from ("./View.js")
// const { hangManPics } = require ("./hangmanPics.js")

document.addEventListener("DOMContentLoaded", () => {
    let game = new Game(
        new HumanPlayer("Deja"),
        new ComputerPlayer("Computer ")
    )
    let el = document.querySelector("#SSS")
    new View(game, el)
  
})