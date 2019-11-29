import Humanplayer from "./HumanPlayer.js"
import Board from "./board.js"
import Game from "./game.js"
import Word from "./words.js"
import Cpu from "./cpu.js"
import View from "./view.js"

document.addEventListener("DOMContentLoaded",()=>{
    let cpuPlay = new Cpu()
    let game = new Game(cpuPlay.cpuWord())
    let el = document.querySelector("#gameDiv")
    new View(game,el)
})