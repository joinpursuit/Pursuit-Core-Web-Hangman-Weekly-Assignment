
document.addEventListener('DOMContentLoaded', () =>{
  //First I declare all variables I'll need to make my game work.

  //Allows me to manipulate the CSS on my webpage.
  let css = document.querySelector("link")

  //Setting variables for tags on my HTML page
  let header1 = document.querySelector('h1')
  let form = document.querySelector('form')
  let first_button = document.getElementById('Guess-Button')
  let body = document.querySelector('body')
  let p = document.querySelector('p')
  let rule1 = document.getElementById('item1')
  let rule2 = document.getElementById('item2')
  let rule3 = document.getElementById('item3')
  let rule4 = document.getElementById('item4')
  let ul = document.querySelector('ul')
  let rule_paragraph = document.getElementById('rules')

  //My array of mystery words
  let arr = ['Avengers', 'Titanic', 'Aladdin', 'Godzilla', 'Jaws']
  const wordGrabber = (arr) => arr[Math.floor((Math.random() * arr.length))]
  let mysteryWord = wordGrabber(arr)
  let rightGuesses = [];
  let wrongGuesses = [];
  let allGuesses = [];
  let guessesLeft = 6

// A function for when the player wins the game
  function win() {
    window.alert(`You Have Won! Your Word Was ${mysteryWord}. Play Again!`)
    header1.innerText = `You've Saved Us All.`
    form.removeChild(guess)
    form.removeChild(first_button)
    para3.innerText = (`Your word was ${mysteryWord}. GOOD JOB!`)
    document.body.appendChild(para3)
  }

// A function for when the player loses
  function lose() {
    header1.innerText = 'The Asteroid Has Arrived'
    css.setAttribute("href", "lose.css")
    window.alert(`You Have Lost. Your Word Was ${mysteryWord}. Play Again?`)
    form.removeChild(guess)
    form.removeChild(first_button)
    ul.removeChild(rule1)
    ul.removeChild(rule2)
    ul.removeChild(rule3)
    ul.removeChild(rule4)
    form.removeChild(rule_paragraph)
    para3.innerText =
    (`You ran out of time.
    Your word was: ${mysteryWord.toUpperCase()}.
    Luckily the asteroid just barely missed.`)
    document.body.appendChild(para3)
  }

  for (let i = 0; i < mysteryWord.length; i++) {
      rightGuesses[i] = "_";
  }

  let remainingLetters = mysteryWord.length


  let para1 = document.createElement('p')
  para1.innerText = rightGuesses.join(" ")

  let para2 = document.createElement('p')
  para2.innerText = (`You Have ${guessesLeft} Guesses Left`)

  let para3 = document.createElement('p')
  let para4 = document.createElement('p')
  para4.innerText = `Wrong Answers: ${wrongGuesses}`


  document.body.appendChild(para1)
  document.body.appendChild(para2)
  document.body.appendChild(para4)


  document.addEventListener('submit',()=>{
    event.preventDefault()
    guess = document.querySelector('#Guess')
    let string_checker = /^[a-zA-Z]+$/
    p.innerText = ''

    while (!allGuesses.includes(guess.value.toUpperCase())) {

      for (let i = 0; i < mysteryWord.length; i++) {
        if(guess.value.trim() === ''){
          window.alert(`You Entered Nothing. Please Enter a Valid Guess. Letters Only!`)
          break;
        }else if(!guess.value.match(string_checker)){
          window.alert(`You Entered a Number or Special Character. Please Enter a Valid Guess. Letters Only!`)
          break;
        }else if(mysteryWord[i].toLowerCase() === guess.value.toLowerCase()) {
          rightGuesses[i] = guess.value.toUpperCase();
          allGuesses.push(guess.value.toUpperCase());
          remainingLetters --;
          window.alert('You Guessed Right!');
          para1.innerText = rightGuesses.join(" ")
        }else if(!mysteryWord.toLowerCase().includes(guess.value.toLowerCase())){
          header1.innerText = 'The asteroid is getting closer...'
          css.setAttribute("href", "mid_game.css")
          guessesLeft --
          allGuesses.push(guess.value.toUpperCase());
          wrongGuesses.push(guess.value.toUpperCase())
          para4.innerText = (`Wrong Answers: ${wrongGuesses}`)
          para2.innerText = (`You Have ${guessesLeft} Guesses Left`)
          window.alert(`You Guessed Wrong`)
          break;
        }
      }
    }guess.value = ''

    /*Calling win function when the player has guessed
    all correct letters*/
    if(remainingLetters === 0){
      win()
    }

    //Calling late game fuction when the player has one guess left
    if(guessesLeft === 1){
      header1.innerText = 'S#!T'
      css.setAttribute("href", "late_game.css")
      para2.innerText = (`You Have ${guessesLeft} Guess Left`)
    }

    //Calling lose function when the player has no guesses left
    if(guessesLeft === 0){
      lose()
    }

  })
  //A reset button to start the game over.
  let reset_button = document.createElement('button')
  reset_button.innerText = 'Restart Game'
  document.body.appendChild(reset_button)
  reset_button.addEventListener('click', restart)
})


//The function my reset button uses.
const restart = () => {
  document.location.reload()
}
