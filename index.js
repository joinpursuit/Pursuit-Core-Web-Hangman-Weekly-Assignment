import Game from "./Game.js";
import Guesser from "./Guesser.js";
import View from "./View.js";

document.addEventListener("DOMContentLoaded", () => {
    let game = new Game(new Guesser("contestant"));
    let el = document.querySelector("#hangman");
    new View(game,el);
    
})