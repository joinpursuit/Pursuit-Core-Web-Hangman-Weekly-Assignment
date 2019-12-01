document.addEventListener('DOMContentLoaded', () => {
  const allTheWords = 'clown, acrobat, animal, trapeze, music, dancers, tightrope, jugglers, magicians, unicycle, stunts, tigers, lions, elephants, popcorn, cottoncandy'.split(', ');

  // Create random word for player to guess
  const getRandomWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  // Replaces img to change base on how many incorrect guesses the player has
  function replacePicture() {
    let picture = document.querySelector("img")
    let newPicture = document.createElement("img")
    newPicture.src = imageArray[guess];
    picture.parentNode.replaceChild(newPicture, picture)
  }

  const selectedWord = getRandomWord(allTheWords).split('');
  const selectedWordBlanks = [];
  let answerArray = selectedWordBlanks;
  let guessedLetters = [];
  let usedLetters = [];
  let guess = 6;
  let underScore = document.getElementById('underScore');
  let wrongGuess = document.getElementById('wrongGuess');
  let comment = document.getElementById('comments');




  let imageArray = ['http://www.foreverbermuda.com/wp-content/uploads/2019/05/no-balloons-sign-generic-cTcQvAEA-ForB.jpg', 'http://www.loneballoon.com/images/loneballoon.jpg', 'https://www.sccpre.cat/mypng/detail/206-2061546_balloons-pink-green-flying-png-image-2-balloons.png', 'http://cdn.shopify.com/s/files/1/1413/4098/products/2e584a30e15f2c2ca2ac7aea27dca87b_grande.jpg?v=1489474672', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWTX9iItH_EEawk1Gfn6IqhkgM2QGy4E7tUdmUDgPgky1NfOJbQ', 'https://images-na.ssl-images-amazon.com/images/I/31zvxz0xxKL._SY355_.jpg', 'https://www.balloondealer.com/app/images/BD11ASSORT.jpg']

  const makeBlanks = () => {
    for (let i = 0; i < selectedWord.length; i++) {
      selectedWordBlanks.push('_');
    }
    return selectedWordBlanks;
  }

  console.log(selectedWord)


  //this function will check for duplicates of user's input
  function checkDuplicate(userInput) {
    if (!usedLetters.includes(userInput)) {
      return true;
    } else {
      window.alert(`You've used this letter before. Please pick another.`);
    }
  }

  //Start of the game
  makeBlanks();
  underScore.innerHTML = selectedWordBlanks.join(' '); //shows underscore on the screen
  
  //event listener to know if user has pressed a key (letter) or not
  document.addEventListener('keypress', (event) => {

    let keyCode = event.keyCode;
    let input = String.fromCharCode(keyCode);
    if (guess === 0) {
      underScore.innerText = selectedWord.join('');
    } else if (input === ' ' || input === input.toUpperCase()) {
      window.alert(`Please enter a valid lowercase letter`)
    } else if (selectedWord.indexOf(input) > -1) {
      if (checkDuplicate(input)) {
        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === input) {
            answerArray[i] = input;
            underScore.innerText = selectedWordBlanks.join(' '); //works to replace the letters in the world
            
            if (!usedLetters.includes(input)) {
              usedLetters.push(input)
              if (answerArray.join('') === selectedWord.join('')) {
                underScore.style.color = '#FFD700';
                outcome.style.fontFamily = 'Courgette, cursive';
                outcome.style.color = '#008000'
                outcome.innerText = (`You win!`);
              }
            }
          }
        }
      }
    } else {
      if (checkDuplicate(input)) {
        guessedLetters.push(input);
        usedLetters.push(input);
        comment.innerText = `you have ${guess - 1} balloons left`;
        console.log(guessedLetters)
        wrongGuess.innerText = guessedLetters.join(' ');
        switch (guess) {
          case 6:
            guess--;
            replacePicture();
            break;
          case 5:
            guess--;
            replacePicture();
            break;  
          case 4:
            guess--;
            replacePicture();
            break;
          case 3:
            guess--;
            replacePicture();
            break;
          case 2:
            guess--;
            comment.innerText = `you only have ${guess} balloon left`;
            replacePicture();
            break;
          case 1:
            guess--;
            replacePicture();
            outcome.style.color = '#FF0000';
            outcome.innerText = (`You lost!`);
            outcome.style.fontFamily = 'Trade Winds, cursive';
            underScore.innerText = selectedWord.join('');
            underScore.style.color = '#cccccc';
            
            replacePicture();
        }
      }
    }
    document.removeEventListener('keypress', event)
  }, true);
})