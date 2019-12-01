import View from "./View.js";
import HumanPlayer from "./HumanPlayer.js";
import ComputerPlayer from "./ComputerPlayer.js";
import Game from "./Game.js";




document.addEventListener("DOMContentLoaded", () => {

let el = document.querySelector("#hangman")
let robot = new ComputerPlayer();
let human = new HumanPlayer("#You")
let game = new Game({referee: robot, guesses: human});
new View(el,game);
game.play();

})

