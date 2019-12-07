import Game from "./Game.js"
import View from "./View.js"

document.addEventListener("DOMContentLoaded", () =>{
  let board = document.querySelector("#board")

  new View(board, new Game())

  
})