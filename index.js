import Game from "./Game.js";
import HumanPLayer from "./HumanPlayer.js";
import ComputerPlayer from "./ComputerPlayer.js";
import View from"./View.js"

document.addEventListener('DOMContentLoaded', () => {
  
  let element = document.querySelector("#hm");
  let computer =new ComputerPlayer()
  let game = new Game(new HumanPLayer("contestant"));
  new View(game,element);
  //new View(el, game)
    });
