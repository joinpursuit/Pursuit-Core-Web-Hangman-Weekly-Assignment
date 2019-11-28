// import Game from"./Game.js";
// import HumanPLayer from"./HumanPlayer.js";
// import ComputerPlayer from"./ComputerPlayer.js";
// import Dictionary from"./Dictionary.js";
// import View from"./View.js"


console.log('humanBody')
document.addEventListener('DOMContentLoaded', () => {
  let game = new Game(
    new HumanPLayer('namehere'),
    new ComputerPlayer("Robot")
  );
  })
  
// Enter name and Display into the HTML page
function HumanPLayer() {
let askForName = document.querySelector("#name");
let userName = askForName.value;
body.appendChild(userName)
}