document.addEventListener("DOMContentLoaded", () => {
  let words = ["chicken", "dog", "bird", "snake", "rabbit", "deer", "cat"];
  // Pick a random word
  let word = words[Math.floor(Math.random() * words.length)];
  // // set tries to 5 for the chances
  let tries = 5;
  //tell you how many chances left
  let livesRemaining = document.getElementById("tries");
  // Set up the dashes
  let underScores = [];
  //variable calling guesses paragraph
  let progress = document.getElementById("Guesses");
  //calling random word
  let win = word.length;
  // check for letters only
  let strCheck = /^[a-zA-z]+$/;

  for (var i = 0; i < word.length; i++) {
    underScores[i] = "_";
  }
  //assign innerText at answerText
  let answerText = document.getElementById("dashes");
  answerText.innerText = underScores.join(" ");

  // form will prevnt loop from occuring when entering a letter.
  let form = document.querySelector("form");
  form.addEventListener("submit", event => {
    // Show the player their progress]
    answerText.innerText = underScores.join(" ");
    // Get a guess from the player
    let input = document.getElementById("input");
    //grabbing the value entered into the input
    let guess = input.value.trim();
    //clearing the input box
    input.value = "";

    //pushes guessed letters to letters guessed
    event.preventDefault();
    progress.innerText += " " + guess + ",";

    //Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
      if (!guess.match(strCheck)) {
        answerText.innerText = "Please Enter a Letter!";
      }
      //check letters against word
      if (word[j] === guess) {
        underScores[j] = guess;
        answerText.innerText = underScores.join(" ");
        win--;
      } //check to see if the letter is in the word
      else if (word.includes(guess) === false) {
        tries--;
        livesRemaining.innerText = "You have " + tries + " left";
        break;
      }
    }
    //add the pictures depending on the lives left
    let newElement = document.createElement("img");
    switch (tries) {
      case 4:
        newElement.setAttribute("src", "FullSizeRender.png");
        document.getElementById("image").appendChild(newElement);
        break;
      case 3:
        // let newElement = document.createElement("img");
        newElement.setAttribute("src", "FullSizeRender-1.png");
        document.getElementById("image").appendChild(newElement);
        break;
      case 2:
        // let newElement = document.createElement("img");
        newElement.setAttribute("src", "FullSizeRender-2.png");
        document.getElementById("image").appendChild(newElement);
        break;
      case 1:
        // let newElement = document.createElement("img");
        newElement.setAttribute("src", "FullSizeRender-3.png");
        document.getElementById("image").appendChild(newElement);
        break;
      case 0:
        // let newElement = document.createElement("img");
        newElement.setAttribute("src", "FullSizeRender-4.png");
        document.getElementById("image").appendChild(newElement);
        break;
    }
    //checking if the word has no remaining letters
    if (win === 0) {
      answerText.innerText = "You Win!";
      form.removeChild(input);
      form.removeChild(submit);
    }
    //checking remaining Lives
    if (tries === 0) {
      answerText.innerText = "You Lose!";
    }
  });

  let reset = document.getElementById("reset");
  reset.addEventListener("click", restart);
});

const restart = () => {
  document.location.reload();
};
