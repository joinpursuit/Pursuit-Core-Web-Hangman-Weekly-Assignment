window.onload =function() {
    let arrayWord = [
        ["M", "O", "G", "W","A","I"],
        ["B", "I", "L", "L", "Y"],
        ["G", "R", "E", "M", "L", "I", "N", "S"],
        ["G", "I", "Z", "M", "O"],
        ["S", "T", "R", "I", "P", "E"],
        ["C", "A", "T","E"]    ];
    let gameNew = document.getElementById('gameNew')
    gameNew.onlick = newStartGame;
}
    //game start
    class GremlinsHang {
        constructor() {
            this.random = Math.floor(Math.random() * arrayWord.length);
            this.guessWord = arrayWord[this.random];
            this.placehoderArray = Array(this.guessWord.length).fill('_');
            this.picked = [];
            this.chances = 5;
        }
        //words
        newWord(){
            
            let placeholder= document.getElementById('G');
            guessSpace = document.getElementById('guessSpace');

            placeholder.setAttribute('id', 'placehoder');
            placeholder.innerHTML = this.placehoderArray.join('');
            guessSpace.appendChild(placeholder);
            let firstLetter = document.getElementById('firstLetter');
            firstLetter.onkeypress = this ifKeyPress.bind(this);
            let buttonToGuess = document.getElementById('buttonToGuess');
            buttonToGuess.onclick = this.ifKeyClick.bind(this);
        }
        //letters
        ifKeyPress(){
            let inputLetter = document.getElementById('firstLetter');
            let anyLetter = firstLetter.value.toUpperCase();
            let placehoder=document.getElementById('placeholder');
            let pickeAlready = document.querySelector('#pickedAlready');
            let incorrect = document.querySelector('#incorrect');
            let numbOfChances = document.querySelector('#numbOfChances');
           if(
               this.guessWord.indexOf(anyLetter) > -1 &&
               this.picked.indexOf(anyLetter) == -1
           ) {
               check(this.wordToGuess, anyLetter)== -1 &&
               hideElements('hide');
           } else if(
               this.guessWord.indexOf(anyLetter) == -1 &&
               this.pickeAlready.indexOf(anyLetter) ==-1
           ) {
               hideElements('hide', wrongLetters.parentNode);
               wrongLetters.innerHTML += anyLetter;
               this.chancess--;
               gremlinsHead(this.chances);
               hideGremlin(this.chances)
           } else {
          this.picked.indexOf(anyLetter) ===-1
          ?this.picked.push(anyLetter)
          :null;
          if (Array.from(placehoder.innerHTML).indexOf('__')==-1) {
              gameOver(true); 
          } else if (this.chances ==0) {
              gameOver();
          }
           }

            inputLetter.value ='';
        } -1

        handleKeyPress(g) {
            var takeAGuess = document.getElementById('takeAGuess');
            if (g.keyCode === 13) {
              takeAGuess.click();
            }
          }
        }
      //placeholder
        function guessCheck(guessWord, inputLetter) {
        
          let placeholder = document.getElementById("placeholder");
          let placeholderArray = Array.from(placeholder.innerHTML);
          placeholderArray = placeholderArray.map((el, i) => {
        
            if (guessWord[i] == userLetter) {
              return (el = userLetter);
            } else {
              return el;
            }
          });
      
          placeholder.innerHTML = placeholderArray.join('');
        }
      //end of game
        function gameOver(win) {
    
          let winMessage = document.getElementById("statusMessage");
          let btnHolder = document.querySelector(".button");
          hideElements("hidden", btnHolder);
          if (win) {
            winMessage.innerHTML = 'WINNER';
            winMessage.style.color = "green";
          } else {
            winMessage.innerHTML = 'LOSEER';
            winMessage.style.color = "rgb(239, 83, 80)";
          }
        }
      
        function hangerDraw(num) {
          let showGremlin = document.getElementById(`show${num}`);
          unhideElements("hidden", showGremlin);
        }
      
        function hideChances(num) {
          let userChance = document.getElementById(`chance${num}`);
          hideElements("hiddenLife", userChance);
        }
      
        function hideElements(myclass, ...els) {
          for (let el of els) {
            el.classList.add(myclass);
          }
        }
      
        function unhideElements(myclass, ...els) {
          for (let el of els) {
            el.classList.remove(myclass);
          } 

    }
    
function newGame() {
    let button = document.getElementById('button');
    let winner = document.getElementById('status');
    let incorrect = document.querySelector('#wrongLetters');
    let hiddenGremlin =Array.from(querySelectorAll('.gremlinHead'));
    let hiddenChances = Array.from(document.querySelectorAll('.chance'));
    for (let gremlinHead of hiddenGremlin) {
        hideElements('hidden', gremlinHead);
    }
    for (let chance of hiddenChances) {
        unhideElements('hiddenChances',chance);
    }
    incorrect.innerHTML = '_';
    unhideElements('hidden', buttonHolder);
    hideElements('hidden', incorrect.parentNode);
    winner.innerHtml='Gremlins 2 Hangman';
    winner.style.color='green';
    let lastPlaceholder = document.getElementById('placeholder');
    if(lastPlaceholder.parentNode) {
        lastPlaceholder.parentNode.removeChild(lastPlaceholder)
    }
let startGame = new GremlinsHang(); {
    startGame.newWord();
}
let startGame = new GremlinsHang();
startGame.newWord();
};
    

