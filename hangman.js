let form = document.getElementById('start-game-form');
let livesLeft = 6;
let word = giantListOfWords[Math.floor(Math.random() * 500)].split('');
let spacesForWord = word.map(elem => {
  return '__';
});
let space = " "
let wordsUsed = [];
document.addEventListener('DOMContentLoaded', () => {
	form = document.querySelector('#start-game-button');
	console.log(form);
	form.addEventListener('click', (e) => {
		e.preventDefault();
		startGame();
	})

	document.querySelector('.restart-game-winner').addEventListener('click', restartGame);
	document.querySelector('.restart-game-loser').addEventListener('click', restartGame);
})

// This functions goal is to start the game. 
function startGame(){
	let openingScreen = document.querySelector('.opening-screen').className = 'opening-screen hidden';
	let gameScreen = document.querySelector('.hider').className = 'hider';
	displayBoard();
	let takeAGuess = document.querySelector('#take-a-guess');
	takeAGuess.addEventListener('submit', (e) => {
		e.preventDefault();
		let value = document.querySelector('#guesser');
		let userGuess = value.value.trim().toLowerCase();
		if(userGuess.split('').length > 1){
			document.querySelector('#bad-input').innerText = 'You input too many letters!! please only guess 1 letter'
    		value.value = '';
   		}
   		else if(wordsUsed.indexOf(userGuess) !== -1){
   			document.querySelector('#bad-input').innerText = 'You already used that letter! Pick another one!';
    		value.value = '';
   		}
   		else{
   			wordsUsed.push(userGuess);
   			value.value = '';
   			document.querySelector('#bad-input').innerText = '';
   			let inWord = word.indexOf(userGuess);
   			let allOccurrences = [];
   			console.log(document.querySelector('.game-state').src);
   			if(inWord === -1){
   				wrongInput();
   				switch(livesLeft){
   					case 5: document.querySelector('.game-state').src = './hangman2.png';
   					break
   					case 4: document.querySelector('.game-state').src = './hangman3.png';
   					break
   					case 3: document.querySelector('.game-state').src = './hangman4.png';
   					break
   					case 2: document.querySelector('.game-state').src = './hangman5.png';
   					break
   					case 1: document.querySelector('.game-state').src = './hangman6.png';
   					break
   					case 0: document.querySelector('.game-state').src = './hangman7.png';
   					break
   				}
   				displayBoard();
   			}
   			else{
   				for(let i = 0; i < word.length; i++){
   					if(userGuess === word[i]){
   						allOccurrences.push(i);
   					}
   				}
   				for(let i = 0; i < allOccurrences.length; i++){
   					spacesForWord[allOccurrences[i]] = word[allOccurrences[i]];
   				}
   				displayBoard();
   			}

   		}

	})
}

function restartGame(){
	word = giantListOfWords[Math.floor(Math.random() * 500)].split('');
	spacesForWord = word.map(elem => {
 		 return '__';
	});
	wordsUsed = [];
	livesLeft = 6;
	document.querySelector('#bad-input').innerText = '';
	document.querySelector('.game-state').src = './hangman1.png';
	document.querySelector('.winner').className = 'winner hidden';
	document.querySelector('.loser').className = 'loser hidden';
	startGame();
}

function displayBoard(){
	if(spacesForWord.indexOf('__') === -1){
		let victoryScreen = document.querySelector('.winner');
		victoryScreen.className = 'winner';
		let gameScreen = document.querySelector('.hider').className = 'hider hidden';

	}
	else if(livesLeft === 0){
		let loserScreen = document.querySelector('.loser');
		loserScreen.className = 'loser';
		let gameScreen = document.querySelector('.hider').className = 'hider hidden';
	}
	else{
		document.querySelector('.lives-para').innerText = `${livesLeft}`;
		let guessWord = document.querySelector('.guess-word');
		let element = guessWord.firstElementChild;  
	    while (element) { 
	    	guessWord.removeChild(element); 
	        element = guessWord.firstElementChild; 
	    }
		for(let i = 0; i < spacesForWord.length; i++){
			let child = document.createElement('p');
			let wrapper = document.createElement('div');
			wrapper.appendChild(child);
			child.innerText =  `${spacesForWord[i]}`;
			guessWord.appendChild(wrapper);
			document.querySelector('.incorrect-letters-para').innerText = `Letters guessed: [${wordsUsed}]`;
		};
	}
}

function wrongInput(){
	livesLeft --;
}

