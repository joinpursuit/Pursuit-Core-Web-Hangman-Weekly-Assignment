/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Board.js":
/*!******************!*\
  !*** ./Board.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Board {
    constructor(length){
        this.board = new Array(length).fill("_")
    }
    
    addChar(word, letter) {
        for(let i = 0; i < word.length; i++){
            if(word[i] === letter){
                this.board[i] = letter;
            }
        }
    }
    
    isComplete(word){
        if(this.board.join("") === word){
            return true;
        } else {
            return false;
        }
    }

    displayBoard(){
        let currentBoard = this.board.join(" ");
        return currentBoard;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Board);

 








/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./Board.js");
/* harmony import */ var _Referee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Referee.js */ "./Referee.js");

// import Guesser from "./Guesser.js"

// const {hangManPics} = require("./hangmanPics");
// const readline = require("readline-sync");

class Game {
    constructor(player){
        this.player = player;
        this.computer = new _Referee_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.computer.secretWordLength());
        this.guessesRemaining = 6;  
        this.guessedAlready = [];
    }

    isValidGuess (guess){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let valid = false;
        if(alphabet.includes(guess) && !this.guessedAlready.includes(guess)){
            valid = true;
        }
        return valid;
    }

    isGameOver(){
        return this.guessesRemaining > 0 && !this.board.isComplete(this.computer.word)

    }
    
    play() {
        console.clear();
        console.log(`WELCOME to HANGMAN ${this.player.name}!`);
        // sees if game is over
        while(!this.isGameOver()){
            console.log(hangManPics[this.guessesRemaining]);
            this.board.displayBoard();
            console.log(`You have ${this.guessesRemaining} guesses left.`);
            console.log("Letters already used: ", this.guessedAlready.join(", "))
            let guess = this.player.getGuess();

            // sees if letter has been used
            while(this.guessedAlready.includes(guess)){
                guess = readline.question("You already used that letter. Please try another unique letter: ")
            }
            
            // sees if letter is valid, if it is - push letter into guessedAlready, add to board, decrement guessesRemaining
            if(this.isValidGuess(guess) && !this.computer.word.includes(guess)){
                this.guessedAlready.push(guess);
                this.guessesRemaining -= 1;
            } else if(this.isValidGuess(guess)){
                this.guessedAlready.push(guess)
                this.board.addChar(this.computer.word, guess);
            } else{
                guess = readline.question("Please enter a valid letter: ")
            }
            console.clear();
        }
        
        if(this.guessesRemaining){
            console.log(this.computer.reveal());
            console.log("You win hangman! Congratulations!");
        } else {
            console.log("You ran out of guesses! You lose! This was the word: ")
            console.log(this.computer.reveal());
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);





/***/ }),

/***/ "./Guesser.js":
/*!********************!*\
  !*** ./Guesser.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Guesser {
    constructor(name) {
        this.name = name;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Guesser);



/***/ }),

/***/ "./Referee.js":
/*!********************!*\
  !*** ./Referee.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const {dictionary} = __webpack_require__(/*! ./dictionary.js */ "./dictionary.js");  

class Referee {
    constructor(referee){
        this.referee = referee;
        this.word = dictionary[(Math.floor(Math.random() * dictionary.length))];
    }

    secretWordLength(){
        let secretWord = this.word;
        return secretWord.length;
    }

    reveal(){
        let revealStr = [];
        for(let i = 0; i < this.word.length; i++){
            revealStr.push(this.word[i]);
        }
        let currentBoard = revealStr.join(" ");
        return currentBoard;
    }  
}

/* harmony default export */ __webpack_exports__["default"] = (Referee);

 



/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./Game.js");
/* harmony import */ var _Guesser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guesser.js */ "./Guesser.js");



class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.play();
    }

    play(){
        if(this.game.isGameOver()){
            this.displayBoard();
            this.displayGuessed();
            this.displayImgs(this.game.guessesRemaining);
            this.bindEvents();
        } else if(this.game.board.isComplete(this.game.computer.word)){
            this.displayBoard();
            this.removeItems();
            this.end(); 
        } else {
            this.displayBoard();
            this.removeItems();
            this.end();
        }
    }

    end() {
        if(this.game.board.isComplete(this.game.computer.word)){
            let h2 = document.createElement("h2");
            h2.innerText = "You won hangman! Congratulations winner!";
            let boardDiv = document.querySelector("div");
            boardDiv.appendChild(h2);
            let playAgainBtn = document.createElement("button");
            playAgainBtn.innerText = "Play again?"
            playAgainBtn.id = "playagain";
            boardDiv.appendChild(playAgainBtn);
            this.newGame();
        } else {
            let h2 = document.createElement("h2");
            h2.innerText = `You ran out of guesses! You lose! The word was: ${this.game.computer.reveal()}`;
            let boardDiv = document.querySelector("div");
            boardDiv.appendChild(h2);
            let playAgainBtn = document.createElement("button");
            playAgainBtn.innerText = "Play again?"
            playAgainBtn.id = "playagain";
            boardDiv.appendChild(playAgainBtn);
            this.newGame();
        }
    }

    newGame(){
        let playAgain = document.querySelector("#playagain")
        playAgain.addEventListener("click", () => {
            playAgain.parentNode.removeChild(playAgain);
            let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](new _Guesser_js__WEBPACK_IMPORTED_MODULE_1__["default"]("contestant"));
            let el = document.querySelector("#hm");
            new View(game,el);
        })
    }

    removeItems(){
        let p1 = document.querySelector("#enterGuess");
        p1.parentNode.removeChild(p1);
        let p2 = document.querySelector("#guessedAlready");
        p2.parentNode.removeChild(p2);
        let input = document.querySelector("#letterInput");
        input.parentNode.removeChild(input);
        let btn = document.querySelector("#submitBtn");
        btn.parentNode.removeChild(btn);
        let h4 = document.querySelector("#guessesRemaining");
        document.body.removeChild(h4)
    }

    displayImgs(numGuesses){
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let newSrc = `./images/hangman${numGuesses}.jpg`;
        img.src = newSrc;

        imgDiv.appendChild(img);
        this.el.prepend(imgDiv);
    }

    displayBoard(){
        this.el.innerHTML = "";
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.board.displayBoard();
        let h1 = document.createElement("h1")
        h1.innerText = currentBoard;

        let h4 = document.createElement("h4");
        h4.id="guessesRemaining"
        document.body.appendChild(h4)

        let p = document.createElement("p");
        p.id="enterGuess";
        p.innerText = "Please enter a letter:"
        let guessed= document.createElement("p");
        guessed.id="guessedAlready";
        let input = document.createElement("input");
        input.id ="letterInput";
        let button = document.createElement("button");
        button.id="submitBtn"
        button.innerText = "Submit";

        boardDiv.appendChild(h1);
        boardDiv.appendChild(guessed);
        boardDiv.appendChild(p);
        boardDiv.appendChild(input);
        boardDiv.appendChild(button);
        this.el.appendChild(boardDiv);
    }

    bindEvents(){
        let button = document.querySelector("#submitBtn");
        button.addEventListener("click", () => this.result());
    }
    
    displayGuessed(){
        let guessedAlready = document.querySelector("#guessedAlready");
        if(this.game.guessedAlready.length === 0){
            guessedAlready.innerText = "No guesses have been made";
        } else {
            let guessedLetters = this.game.guessedAlready.join(", ");
            guessedAlready.innerText = `Letters guessed already: ${guessedLetters}`;
        }
    }

    result(){
        let input = document.querySelector("#letterInput")
        let h4 = document.querySelector("#guessesRemaining")
        let p = document.querySelector("#enterGuess")
        if(this.game.isValidGuess(input.value.toLowerCase()) && !this.game.computer.word.includes(input.value.toLowerCase())){
            this.game.guessedAlready.push(input.value.toLowerCase());
            this.game.guessesRemaining -= 1;
            h4.innerText = `Incorrect guess! Guesses remaining: ${this.game.guessesRemaining}`;
        } else if(this.game.isValidGuess(input.value.toLowerCase())){
            this.game.guessedAlready.push(input.value.toLowerCase());
            this.game.board.addChar(this.game.computer.word, input.value.toLowerCase());
            h4.innerText = `Correct guess! Nice! Guesses remaining: ${this.game.guessesRemaining}`;
        } else {
            h4.innerText = "Please enter a valid letter!! " + "Guesses Remaining: " + this.game.guessesRemaining;
        }
        this.play();
    }


}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./dictionary.js":
/*!***********************!*\
  !*** ./dictionary.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// All Words in dictionary

const  dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment",
"advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", 
"angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", 
"attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance",
"ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", 
"belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", 
"blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot",
"bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", 
"broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", 
"butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", 
"chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church",
"circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb",
"come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex",
"condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", 
"cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve",
"cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", 
"degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", 
"digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", 
"distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", 
"drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", 
"enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", 
"experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", 
"feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", 
"fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", 
"foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", 
"front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold",
"good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", 
"hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", 
"hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", 
"hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", 
"instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", 
"judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land",
"language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", 
"library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", 
"long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", 
"married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", 
"middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon",
"morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name",
"narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night",
"noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", 
"operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", 
"owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", 
"pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", 
"plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", 
"powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", 
"property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", 
"quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", 
"record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", 
"rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", 
"round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", 
"seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", 
"serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", 
"short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", 
"slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", 
"soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", 
"spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", 
"station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", 
"stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", 
"structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", 
"sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", 
"test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", 
"throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", 
"tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", 
"trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", 
"vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", 
"wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", 
"white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", 
"wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"];

module.exports = {dictionary}; 


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./Game.js");
/* harmony import */ var _Guesser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guesser.js */ "./Guesser.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.js */ "./View.js");





document.addEventListener("DOMContentLoaded", () => {
    let start = document.createElement("button");
    start.innerText = "Start New Game"
    document.body.appendChild(start);
    start.addEventListener("click", () => {
        document.body.removeChild(start);
        let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](new _Guesser_js__WEBPACK_IMPORTED_MODULE_1__["default"]("contestant"));
        let el = document.querySelector("#hm");
        new _View_js__WEBPACK_IMPORTED_MODULE_2__["default"](game,el);
    })
    
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map