document.addEventListener("DOMContentLoaded", () => {
   event.preventDefault();
  let form = document.querySelector("#form");
  let button = document.querySelector("#submitButton");
  let typeOfGuess = document.querySelector("#typeOfGuess");
  let progress = document.querySelector("#progress");
  let lettersGuessed = document.querySelector("#lettersGuessed");
  let guessesRemaining = document.querySelector("#guessesRemaining");

  typeOfGuess.innerText = "Welcome to Hangman"

  let words = ["sky", "icecream", "blue", "pink"];

  let word = words[Math.floor(Math.random() * words.length)];
   console.log(word);

  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  progress.innerText = answerArray.join(" ");

   let remainingLives = 6;
  guessesRemaining.innerText = `There are ${remainingLives} lives remaining`;

  form.addEventListener('submit', () => {
    event.preventDefault();
    let userInput = document.querySelector("#userInput");
    let guess = userInput.value

    lettersGuessed.innerText += " " + guess + ",";
    userInput.value = "";

    if (guess.length !== 1) {
      window.alert("Please enter a single letter.")
    } else if (!guess.match(/[a-z]/i)) {
      window.alert("Please enter a letter.")
    }


    for (let j = 0; j < word.length; j++){
    if (word[j] === guess) {
      answerArray[j] = guess
     typeOfGuess.innerText = "Correct Guess";
  } else if (!word[j].includes(guess)){
   typeOfGuess.innerText = "Incorrect Guess"
   remainingLives --;
  //  break;
   console.log(remainingLives);
   }
  }

     progress.innerText = answerArray.join(" ");
     guessesRemaining.innerText = `There are ${remainingLives} lives remaining`;

})

})
