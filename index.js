import Game from "./Game.js";
import Guesser from "./Guesser.js";
import View from "./View.js";


document.addEventListener("DOMContentLoaded", () => {
    let startImg = document.createElement("img");
    startImg.src = "./extraStuff/startImg.gif";
    startImg.id = "startImg";
    document.body.appendChild(startImg);
    let start = document.createElement("button");
    start.innerText = "START"
    start.id = "startBtn";

    document.body.appendChild(start);
    start.addEventListener("click", () => {
        document.getElementById("music").play();
        document.body.removeChild(startImg);
        document.body.removeChild(start);
        let game = new Game(new Guesser("contestant"));
        let el = document.querySelector("#hm");
        new View(game,el);
    })
})