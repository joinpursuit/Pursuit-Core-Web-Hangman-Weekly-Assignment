import HumanPlayer from "./humanPlayer.js"
import Game from "./game.js"
import View from "./view.js"


// document.addEventListener("DOMContentLoaded",()=>{
//     let button = document.createElement("button")
//     button.innerText = "Let's Play!"
//     document.body.appendChild(button)
    
document.addEventListener("DOMContentLoaded",()=>{
    let el = document.querySelector("#game")
    // let Human = new HumanPlayer("Human");
    let game = new Game();
    new View(el,game)
}
)


