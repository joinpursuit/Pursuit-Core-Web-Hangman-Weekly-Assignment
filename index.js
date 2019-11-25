import Game from"./Game.js";
import HumanPLayer from"./HumanPlayer.js";
import ComputerPlayer from"./ComputerPlayer.js";
// import Dictionary from"./Dictionary.js";
import View from"./View.js"
document.addEventListener('DOMContentLoaded', () => {
let playerOne;
let playerTwo;
  // let input = document.querySelector('#input').value

 let game = new Game(
   new HumanPLayer("Faris"),
   new ComputerPlayer("Robot")
 );
//  game.play()
  let el = document.querySelector("#hm")
  new View(game, el)
 
})