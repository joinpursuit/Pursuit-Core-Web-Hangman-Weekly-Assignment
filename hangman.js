document.addEventListener("DOMContentLoaded", () => {
    
const celebrities = ['Beyonce', 'Taylor Swift', 'Ellen DeGeneres', 'Dwayne Johnson', 'George Clooney', 'Sean Combs', 'Alec Baldwin', 'Bradley Cooper', 'Serena Williams', 'Laila Ali', 'Rosario Dawson', 'Belcalis Almanzar', 'Leonardo DiCaprio', 'Liam Hemsworth', 'Will Smith', 'Shawn Carter', 'Sofia Vergara', 'Demi Lovato', 'Jennifer Lawrence','Miley Cyrus','Idris Elba', 'Kanye West','Kylie Jenner','Ed Sheeran','Rihanna','Drake','Ermias Asghedom', 'Chris Brown', ]

const celebWord = (celebrities) => {
    return celebrities[Math.floor(Math.random() * celebrities.length)];
} 
let hiddenCeleb = celebWord(celebrities);


const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
let guessedLetters = new Set();

const selectCeleb = (word) => {
    let displayCelebWord = document.querySelector("h3");
    let blanks = ('_ ').repeat(selectCeleb.length);
    displayCelebWord.innerText = blanks;
}
selectCeleb(hiddenCeleb) ;

let form = document.querySelector('form')
  form.addEventListener ("submit", (event) => {
    event.preventDefault();

let winner = false;
let misses = 6;

while (!winner && misses > 0) {
    console.log(`you have ${misses} guesses left`);
    console.log(`Guessed letters: ${Array.from(guessedLetters).join(', ')}`);
    console.log(blanks);
  
  
    // is the guess a letter? did they guess it before?
    if (alphabet.has(x) && !guessedLetters.has(x)) {
      let wrongGuess = true;
  
      //check each letter in selectCeleb
      for (letterIndex in selectCeleb) {
        //if it matches update blanks
        if (selectCeleb[letterIndex] === x) {
          let tempBlanks  = '';
  
          //check each letter and build a new string to replace blanks
          for (blanksIndex in blanks) tempBlanks += blanksIndex === letterIndex ? x : blanks[blanksIndex];
  
          //update blanks with new string with user guesses
          blanks = tempBlanks;
  
          wrongGuess = false;
        }
      }
  
      //regardless add their guess to the list of guessed letters
      guessedLetters.add(x);
  
      //if letter was found, lose a turn
      if (wrongGuess) misses--;
  
      //if there is a "_" then theyt haven't won yet
      winner = !blanks.includes('_');
    } else if (!alphabet.has(x)) {
      console.log(`${x} is not a letter`);
    } else if (guessedLetters.has(x)) {
      console.log(`${x} was guessed already. Try again`);
    }
  }
  
  if (misses === 0) {
    console.log('YOU LOSER!');
  }
  
  if (winner) {
    console.log("You're smart! Congrats!!!!");
  }
    })
})