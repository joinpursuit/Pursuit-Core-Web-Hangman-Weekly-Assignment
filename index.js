// import Game from"./Game.js";
// import HumanPLayer from"./HumanPlayer.js";
// import ComputerPlayer from"./ComputerPlayer.js";
// import Dictionary from"./Dictionary.js";
// import View from"./View.js"


import humanBody from"./words.js"
import humanMind from"./words.js"
import everydayLife from"./words.js"
import historyAndCulture from"./words.js"
import communication from"./words.js"

import humanBodyDefinition from"./words.js"
import humanMindDefinition from"./words.js"
import everydayLifeDefinition from"./words.js"
import historyAndCultureDefinition from"./words.js"
import communicationDefinition from"./words.js"
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