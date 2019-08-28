document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let submit = document.querySelector('#button')
  let header = document.querySelector("#header")
    header.innerText = 'WELCOME TO HANGMAN!'
    image.innerText = 'TO PLAY, ENTER A GUESS BELOW!'
  // let input = document.querySelector("#input"); // guess/ input
    // let value = input.value
  let para = document.querySelector("#para"); //holding dashes/ hidden word
  let error = document.querySelector('#error_msg');
  let correctLetters = document.querySelector("#letters_guessed_right");
  let wrongLetters = document.querySelector("#letters_guessed_wrong");
  let guess = document.querySelector("#guesses_left");

  let randomArr = ["apple", "orange", "banana"]
    let arrLength = randomArr.length
  let randomWord = randomArr[Math.floor(Math.random()* arrLength)]
  let guessesLeft = 5
  let hiddenWord = []
  for(let i = 0; i < randomWord.length; i++) {
    hiddenWord[i] = "_"
  }
  para.innerText = hiddenWord.join(" ")

form.addEventListener("submit", () => {
  event.preventDefault();
  header.innerText = "HANGMAN";
  image.innerText = "Take a guess!"

let input = document.querySelector("#input");
let stringChecker = /^[a-zA-Z]+$/

for(let i = 0; i < randomWord.length; i++) {
    if(input.value.trim() === ""){
      error.innerText = 'Please enter a valid guess.'
    }
    else if(!input.value.match(stringChecker)) {
      error.innerText = 'Please only submit a letter.'
    }
    else if(randomWord[i] === input.value) {
      hiddenWord[i] = input.value;
      para.innerText = hiddenWord.join(' ')
      guess.innerText = `You have ${guessesLeft} guesses left.`
      // correctLetters.innerText += input.value
    }
    else if(randomWord.includes(input.value) === false) {
      error.innerText = "You guessed wrong."
      guessesLeft--;
      guess.innerText = `You have ${guessesLeft} guesses left.`
      wrongLetters.innerText += input.value
      if(guessesLeft <= 0) {
        image.innerText = `YOU LOSE!`;
        form.removeChild(input);
        form.removeChild(submit);
        para.innerText = `The correct word was ${randomWord}.`
        break;
      }
      break;
    }
  }   input.value = "";
})
})

const reset = () => {
  document.location.reload()
}
