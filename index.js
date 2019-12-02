import View from "./view.js";
import Game from "./GamePro1.js";
import ComputerPlayer from "./ComputerPlayerPro1";
import HumanPlayer from "./HumanPlayerPro1";

document.addEventListener("DOMContentLoaded", ()=> {
   let ai = new ComputerPlayer();
   let karen = new HumanPlayer();
   let game = new Game();
   new View(el, game)
})