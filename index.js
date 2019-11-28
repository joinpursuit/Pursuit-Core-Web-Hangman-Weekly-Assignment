import Game from './Game.js'
import HumanPlayer from './HumanPlayer.js'
import ComputerPlayer from './ComputerPlayer.js'
import View from './View.js'

document.addEventListener("DOMContentLoaded", ()=>{
    let displayEl = document.querySelector("#gameDisplay")
    let gameEl = document.querySelector("#gameArea")
    let game = new Game()
    new View (game,displayEl,gameEl)
})