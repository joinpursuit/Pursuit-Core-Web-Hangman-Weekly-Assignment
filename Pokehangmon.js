document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('#form')
  let form1 = document.querySelector('#form1')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let newLetter = document.querySelector('#new_letter');

    if (newLetter.value === '') {
      window.alert("Cant leave it empty")
      } else {
        processLetter(newLetter.value)
        newLetter.value = '';
    }
  })

  form1.addEventListener('submit', (event) => {
    event.preventDefault()
    location.reload();
  })
})

//List of all 151 pokemon
let pokemon = ["BULBASAUR","IVYSAUR","VENUSAUR","CHARMANDER","CHARMELEON","CHARIZARD","SQUIRTLE","WARTORTLE","BLASTOISE","CATERPIE","METAPOD","BUTTERFREE","WEEDLE","KAKUNA","BEEDRILL","PIDGEY","PIDGEOTTO","PIDGEOT","RATTATA","RATICATE","SPEAROW","FEAROW","EKANS","ARBOK","PIKACHU","RAICHU","SANDSHREW","SANDSLASH","NIDORAN","NIDORINA","NIDOQUEEN","NIDORAN","NIDORINO","NIDOKING","CLEFAIRY","CLEFABLE","VULPIX","NINETALES","JIGGLYPUFF","WIGGLYTUFF","ZUBAT","GOLBAT","ODDISH","GLOOM","VILEPLUME","PARAS","PARASECT","VENONAT","VENOMOTH","DIGLETT","DUGTRIO","MEOWTH","PERSIAN","PSYDUCK","GOLDUCK","MANKEY","PRIMEAPE","GROWLITHE","ARCANINE","POLIWAG","POLIWHIRL","POLIWRATH","ABRA","KADABRA","ALAKAZAM","MACHOP","MACHOKE","MACHAMP","BELLSPROUT","WEEPINBELL","VICTREEBEL","TENTACOOL","TENTACRUEL","GEODUDE","GRAVELER","GOLEM","PONYTA","RAPIDASH","SLOWPOKE","SLOWBRO","MAGNEMITE","MAGNETON","FARFETCH'D","DODUO","DODRIO","SEEL","DEWGONG","GRIMER","MUK","SHELLDER","CLOYSTER","GASTLY","HAUNTER","GENGAR","ONIX","DROWZEE","HYPNO","KRABBY","KINGLER","VOLTORB","ELECTRODE","EXEGGCUTE","EXEGGUTOR","CUBONE","MAROWAK","HITMONLEE","HITMONCHAN","LICKITUNG","KOFFING","WEEZING","RHYHORN","RHYDON","CHANSEY","TANGELA","KANGASKHAN","HORSEA","SEADRA","GOLDEEN","SEAKING","STARYU","STARMIE","MR. MIME","SCYTHER","JYNX","ELECTABUZZ","MAGMAR","PINSIR","TAUROS","MAGIKARP","GYARADOS","LAPRAS","DITTO","EEVEE","VAPOREON","JOLTEON","FLAREON","PORYGON","OMANYTE","OMASTAR","KABUTO","KABUTOPS","AERODACTYL","SNORLAX","ARTICUNO","ZAPDOS","MOLTRES","DRATINI","DRAGONAIR","DRAGONITE","MEWTWO","MEW"];

let lives = 6;
let letterWordArr = [];
let guessArr = [];

class Letter {
  constructor(letter, guessed = false) {
    this.letter = letter;
    this.guessed = guessed;
  }

  populateLetter() {
    if (this.guessed) {
      return this.letter + ' ';
    } else {
      return '_ ';
    }
  }

  isGuess(guess) {
    if (guess === this.letter) {
      this.guessed = true;
    }
  }

};

class Word extends Letter {
  constructor(word, letterArr = [], letter, guessed) {
    super(letter, guessed)
    this.word = word;
    this.letterArr = letterArr;
  }

  // Takes the randomly generated word make an array out of it in out word class array
  populateArray() {
    for (let i = 0; i < this.word.length; i++) {
      if (this.word.charAt(i) === ' ') {
        this.letterArr.push(' ');
      } else {
        this.letterArr.push(new Letter(this.word.charAt(i)));
      };
    };
    return this.letterArr;
  };

  // Takes the current letters in the Word class and converts them to underscores based of how many have been guessed
  createHiddenString() {
    let wordString = '';

    this.letterArr.forEach(el => {
      if (el === ' ') {
        wordString += '  ';
      } else {
        wordString += el.populateLetter();
      }
    });

    return wordString;
  };

  // updates the status of the guessed letters
  checkGuessWord(guessedLetter) {
    this.letterArr.forEach(el => {
      if (el.guessed === false) {
        el.isGuess(guessedLetter);
      }
    });
  }
};

let gameWord = pokemon[Math.floor(Math.random() * pokemon.length)];
let randomWord = new Word(gameWord);

//creating sound with this function
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.head.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
}

//this will remove the starter page and begint he dialog
function removePageOne() {
  let runGameBtn = document.getElementById('runGame')
  let firstPic = document.getElementById('introPic')
  let newNode = document.createElement('p')
  let secondPic = document.createElement('img')
  let nextText = document.createElement('button')
    
    newNode.innerText = "Hi, my name is Professor Hair. I'm this town's lead researcher on Pokemon.\n";
    newNode.id = "dialog"
    secondPic.src = "./Pictures/professorHair.gif"
    secondPic.id = "secondPic"
   
  runGameBtn.parentNode.replaceChild(newNode, runGameBtn)  
  firstPic.parentNode.replaceChild(secondPic, firstPic)
  appendButton(newNode.id, continueDialog)
}

function replaceGuessArr(guessArr) {
  let guessedLetters = document.getElementById('recent_guesses')
  let newPara = document.createElement('p')

  newPara.innerText = guessArr;
  newPara.id = 'recent_guesses'

  guessedLetters.parentNode.replaceChild(newPara, guessedLetters)  
}

//this continues the dialog so we can play the first game
function continueDialog() {
  myIntroMusic.stop();
  shockingSound.play();
let firstDialog = document.getElementById('dialog')
let secondDialog = document.createElement('p')

secondDialog.innerText = "However I've made this game too complex for the tools available to me in HTML SOOOOO SURPRISE LETS BATTLE!\n";
secondDialog.id = "battleBtn"
firstDialog.parentNode.replaceChild(secondDialog,firstDialog);
appendBattleBtn(secondDialog.id, gameRules)
battleMusic.play();

}

//Create dialog button
function appendButton(elementId, src){
	let buttonEl = document.createElement("button");
	buttonEl.onclick = src;
	let buttonTextEl = document.createElement("span");
	buttonTextEl.className = "nextTextBtn";
	buttonTextEl.innerText = "Next";
	buttonEl.appendChild(buttonTextEl);
	document.getElementById(elementId).appendChild(buttonEl);
   }

function appendBattleBtn(elementId, src){
  let buttonEl = document.createElement("button");
    buttonEl.onclick = src;
  let buttonTextEl = document.createElement("span");
    buttonTextEl.className = "battleBtn";
    buttonTextEl.innerText = "BATTLE!";
    buttonEl.appendChild(buttonTextEl);
    document.getElementById(elementId).appendChild(buttonEl);
     }

// function winOrLose(message, imageUrl) {
//   let battleImage = document.getElementById('secondPic')
//   let oldWordArea = document.getElementById('battleBtn')
//   let winOrLosePic = document.createElement('img')
//   let newDialog = document.createElement('p')

//   winOrLosePic.src = imageUrl;
//   winOrLosePic.id = "secondPic"
//   newDialog.innerText = `${message}`;
//   newDialog.id = "battleBtn";
 
//   oldWordArea.parentNode.replaceChild(newDialog, oldWordArea)  
//   battleImage.parentNode.replaceChild(battlePic, battleImage)
// }

function hangmanGuessChange(randomWord, src) {
      let secondImg = document.getElementById('secondPic')
      let oldDialog = document.getElementById('battleBtn')
      let battlePic = document.createElement('img')
      let currentWord = document.createElement('p')
        
        battlePic.src = src;
        battlePic.id = "secondPic"
        currentWord.innerText = `${randomWord}`;
        currentWord.id = "battleBtn";
       
      oldDialog.parentNode.replaceChild(currentWord, oldDialog)  
      secondImg.parentNode.replaceChild(battlePic, secondImg)
    }

let myIntroMusic = new sound("./Music/Music_Title_Screen.mp3");
let shockingSound = new sound("./Music/MGS_Alert.mp3");
let battleMusic = new sound("./Music/Music_Battle_Vs_Gym_Leader_rdblu.mp3");
let victoryMusic = new sound("./Music/victoryMusic.mp3");
let defeatMusic = new sound("./Music/nooo.swf.mp3");


function changeClass(currentLife) { 
  document.getElementById(currentLife).className = "red"; 
} 

// The first thing the user will see when loading game/web page
const playGame = () => {
myIntroMusic.play();
  removePageOne();
  // lives = 6;
  
  randomWord.populateArray();
}

// Heart of the gameplay code
const gameRules = () => {

  hangmanGuessChange(randomWord.createHiddenString(), "./Pictures/professorOak.png")

  randomWord.letterArr.forEach(element => {
    letterWordArr.push(element.letter);

  })

}

const processLetter = (theirLetter) => {

  let letterGuess = theirLetter;
    let upperCaseAnswer = letterGuess.toUpperCase();
    guessArr.push(upperCaseAnswer);

    randomWord.checkGuessWord(upperCaseAnswer);


    hangmanGuessChange(randomWord.createHiddenString(), "./Pictures/ProfessorWhatThe.jpg")

    if (letterWordArr.indexOf(letterGuess.toUpperCase()) > -1) {
        //add replace here to show picked letters
        replaceGuessArr(guessArr); //recent_guesses
        // return 'yes';
        } else {
          // Code to update life bar
          changeClass(lives)
          lives--;
          //add replace here to show picked letters
          replaceGuessArr(guessArr);  
          // return 'no'; 
        }

        //Display answer in console for debugging
        // console.log(letterWordArr.join(' '))
      
        //Check win condition. Keep the space after the string interpolation
      if (`${letterWordArr.join(' ')} ` === randomWord.createHiddenString()) {
        hangmanGuessChange('YOU WIN', "./Pictures/winner.gif")
        battleMusic.stop();
        victoryMusic.play();
        }

      if (lives < 1) {
          //Add a replace here to show defeat
          hangmanGuessChange('YOU LOSE', "./Pictures/defeat_pic.png")
          console.log('You were defeated and your adventure has come to an end.')
          battleMusic.stop();
          defeatMusic.play();
          }
      }