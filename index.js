import Game from "./game.js"
import HumanPlayer from "./humanPlayer.js"
import ComputerPlayer from "./computerPlayer.js"
import View from "./view.js"


document.addEventListener("DOMContentLoaded", () => {
  let robot = new ComputerPlayer("RoBot");
  let human = new HumanPlayer(name);
  let game = new Game({referee: robot, guessee: human});
  
  let el = document.querySelector("#hm");
  
  new View(game, el)


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let p = document.getElementById(alert); 
// p.onclick = showAlert(); 

// const showAlert = () => {
//   let name = prompt("Enter your name : ", "your name here");  
//   return name;
// }

// const getName = () => {  
//     document.write("You have entered : " + name);  
//     if (name !== null){
//         document.getElementById(alert).innerHTML =
//         alert("Hey, there " + name + "! Let's play some hangman like it's 1995!")
//     }else{
//         alert("Woops, try again!")
//     }
// } 

})
game.play()




export default View;