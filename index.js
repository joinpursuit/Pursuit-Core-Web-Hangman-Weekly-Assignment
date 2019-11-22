import Game from "./Game.js";
import Guesser from "./Guesser.js";
import View from "./View.js";


document.addEventListener("DOMContentLoaded", () => {
    let start = document.createElement("button");
    start.innerText = "Start New Game"
    document.body.appendChild(start);
    start.addEventListener("click", () => {
        document.body.removeChild(start);
        let game = new Game(new Guesser("contestant"));
        let el = document.querySelector("#hm");
        new View(game,el);

    })
    
})