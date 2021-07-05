//  document.addEventListener("DOMContentLoaded", () => {

// let remainingGuesses = 9
// let usedWords = []

function getRandomWord(words) {
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  return selectedWord;
}

function hideWord(selectedWord) {
  let answerArray = [];
  for (let i = 0; i < selectedWord.length; i++) {
    answerArray.push("_");
  }
  return answerArray;
}

let selectedWord = getRandomWord(words);
let answerArray = hideWord(selectedWord);
let p = document.getElementById("hidden_word");
let w = document.getElementById("WrongL");
let l = document.getElementById("lives");
let guessesArray = [];
p.innerText = answerArray;
p.innerText;
let lives = 6;
let imagePara = document.querySelector("#image");
let currImage = document.createElement("img");
currImage.setAttribute("src", "./Step6.jpg");
imagePara.appendChild(currImage);
console.log(selectedWord);
let playerInput = document.querySelector("input");
  
  let inputDiv = document.querySelector("#input_div");
let button = document.querySelector("button");
button.addEventListener("click", event => {
  let userLetter = playerInput.value.toLowerCase();
  console.log(userLetter, "userLetter");
  //debugger
  console.log(lives, "lives");
  
  if (guessesArray.includes(userLetter.trim())) {
    window.alert("Please Choose Another Letter");
  } else if (selectedWord.includes(userLetter.trim())) {
    // console.log("good guess")
    for (let i = 0; i < selectedWord.length; i++) {
      if (userLetter === selectedWord[i]) {
        answerArray[i] = userLetter;
        p.innerText = answerArray;
      }
    }
    guessesArray.push(userLetter);
    w.innerText = guessesArray;
    if (lives === 0) {
      l.innerText = "You lost";
      console.log("playerInput", playerInput);
      console.log("body", document.body);
      inputDiv.removeChild(playerInput);
      inputDiv.removeChild(button);
      console.log("GAME OVER");
      return "GAME OVER";
    }
  } else {
    lives--;
    console.log("livessss", lives);
    guessesArray.push(userLetter);
    w.innerText = guessesArray;
  }
  
  
  console.log(answerArray.join("") + " === " + selectedWord)
  if(answerArray.join("") === selectedWord){
    
    l.innerText = "YOU WIN"

    inputDiv.removeChild(playerInput);
    inputDiv.removeChild(button);
    
    
  }

  
   let newImage = document.createElement("img");
  currImage = document.querySelector("img");
  newImage.setAttribute("src", `./Step${lives}.jpg`);
  imagePara.replaceChild(newImage, currImage);

  playerInput.value = "";
});
