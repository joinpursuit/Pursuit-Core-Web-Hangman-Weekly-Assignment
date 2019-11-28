import Game from "./Game 2.js"
import HumanPlayer from "./HumanPlayer.js"
import ComputerPlayer from "./ComputerPlayer 2.js"
import View from "./View.js"
// console.log(HumanPlayer)

document.addEventListener("DOMContentLoaded",()=>{
    let el = document.querySelector("#show")
    let Human = new HumanPlayer("Human");
    let robo = new ComputerPlayer();
    let game = new Game({ref:robo, guesser:Human});
    new View(el,game)
}
)



