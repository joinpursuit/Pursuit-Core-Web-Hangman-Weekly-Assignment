document.addEventListener('DOMContentLoaded',() =>{
// button to enter the game
// document.addEventListener('click',()=>{
//   const enterGame = () =>{
//   let game =  document.getElementById('hangmanGame');
//   let displaySetting = game.style.display;
//   let enterButton = document.querySelector('#enter');
//
//   if(displaySetting === 'block'){
//     game.style.display = 'none';
//     enterButton.innerHTML = 'Escape Game'
//   } else{
//     game.style.display = 'block'
//     enterButton.innerHTML = 'Click here to play hangman!'
//   }
//   }
// })


  //create the list of words for the hangman
let wordsList = [ 'creative', 'influental', 'empowered', 'constructive', 'formative', 'effective', 'ambitious', 'capable', 'resilient', 'dynamic']

// select a random word from the list of words provided
let randomWord = wordsList[Math.floor(Math.random()* wordsList.length)]
console.log(randomWord)

//create an array to hold the hiddenAnswer
let answer = [];
for(let i=0; i < randomWord.length; i++){
  answer[i] = '_'
}
let para = document.getElementById('hiddenAnswer')
//displays the dashes on html
para.innerText = answer.join(' ')

// loop to check if input value matches the actual value of randomWord
let lives = 6;
let livesLeft = document.getElementById('livesLeft');
livesLeft.innerText = 'You have ' + lives + ' tries left.'

//putting the JS inside of the form to make sure that everything is executed after the button is clicked
let form = document.querySelector('#enter-value')
form.addEventListener('submit',event =>{
  event.preventDefault();
  console.log("hi")

//calling out the value of the guess input box
let inputBox = document.getElementById('guess')
let inputValue = inputBox.value
let submit = document.getElementById('button2')
inputBox.value = "";

// creates the container of all attempted guesses
let guessedLetters = document.getElementById('guessedLetters')
guessedLetters.innerText += ' ' + inputValue + ' '

//replaces the dash with the correct guess and decrements the lives ig the guesses are wrong.
for(let s = 0; s < randomWord.length; s++){
      if(randomWord[s] === inputValue){
        answer[s] = inputValue;
      }else if(!randomWord.includes(inputValue)){
          lives--
          livesLeft.innerText = 'You have ' + lives + ' tries left.'
          break;
          console.log(lives);
      }
    }
    para.innerText = answer.join(' ')

// removing the input box so no more entries can be made after losing
if (lives === 0){
        livesLeft.innerText = 'Game Over'
        form.removeChild(inputBox)
        form.removeChild(submit)
    }
    console.log(answer)
  })

//creates a button that allows you to call the function to reset the game
  let reset_btn = document.createElement('button');
  reset_btn.innerText = 'Play again!'
  document.body.appendChild(reset_btn);
  reset_btn.addEventListener('click', restart)

})

// resets the entire game
const restart = () =>{
  document.location.reload()
}
