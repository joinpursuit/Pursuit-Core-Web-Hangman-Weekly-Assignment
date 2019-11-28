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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js")


class Board {
    constructor (){
        this.guessWord = "guessWord"
        this.displyWord = []
        this.guessedLetters = []
        this.wordFound = false
    }
    
    disply(){
        return this.displyWord = Array(this.guessWord.length).fill("_");
    }
    
    replace(letter){

        for(let i = 0; i <= this.guessWord.length-1;i++){
            if(this.guessWord[i] === letter){
                this.displyWord[i] = letter
            }
        }
    }
    isValidGuess(letter){
        if(this.guessWord.includes(letter) && !this.guessedLetters.includes(letter)){
            this.guessedLetters.push(letter);
            return true
        } else {
            this.guessedLetters.push(letter);
            return false
        }
    }
    
    fillSpace(letter){
        if(this.isValidGuess(letter) === true){
            this.replace(letter)
        } else {
            return "try again"
        }

    }

    
}

module.exports = Board

// export default Board;

/***/ }),

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! ./Dictionary.js */ "./Dictionary.js")

class ComputerPlayer{
    constructor(){
        this.listOfWords = new Dictionary()
        this.compGuessed = []
        this.letter = ""
    }

    wordSelect(){
        let ind = Math.floor(Math.random()*this.listOfWords.words.length)
        return this.listOfWords.words[ind]

    }
    letterGuess(){
        let abc = "abcdefghijklmnopqrstuvwxyz"
        let ind = Math.floor(Math.random()*25)
        this.letter = abc[ind]
        this.compGuessed.push(this.letter)
        return this.letter
    }
    guess(){
        this.letterGuess()
        if(this.compGuessed.length === 0){
            return this.letter
        } else {
            while(!this.compGuessed.includes(this.letter)){
                this.letterGuess()
            }
            
            return this.letter
        }
    }
    
    
}

comp = new ComputerPlayer()
comp.letterGuess()
console.log(comp.guess())
module.exports = ComputerPlayer;

/***/ }),

/***/ "./Dictionary.js":
/*!***********************!*\
  !*** ./Dictionary.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Dictionary{
    constructor(words){
        this.words = ["able", "about", "account", "acid", "across", "addition", 
        "adjustment", "advertisement", "after", "again", "against", "agreement", 
        "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", 
        "apparatus", "apple", "approval", "arch", "argument", "army", "attack", 
        "attempt", "attention", "attraction", "authority", "automatic", "awake", 
        "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", 
        "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", 
        "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", 
        "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", 
        "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", 
        "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", 
        "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", 
        "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", 
        "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", 
        "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", 
        "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", 
        "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", 
        "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", 
        "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", 
        "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", 
        "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", 
        "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", 
        "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", 
        "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", 
        "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", 
        "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", 
        "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", 
        "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", 
        "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", 
        "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history",
        "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", 
        "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", 
        "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", 
        "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", 
        "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", 
        "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", 
        "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", 
        "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", 
        "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", 
        "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", 
        "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", 
        "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", 
        "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain",
        "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person",
        "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough",
        "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato",
        "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce",
        "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push",
        "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading",
        "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative",
        "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road",
        "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale",
        "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem",
        "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp",
        "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver",
        "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell",
        "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some",
        "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", 
        "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", 
        "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", 
        "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", 
        "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]
    }
}

module.exports = Dictionary;

/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Board = __webpack_require__(/*! ./Board.js */ "./Board.js")
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js")
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js")

class Game {
    constructor() {
        this.player1 = new HumanPlayer();
        this.player2 = new ComputerPlayer();
        this.winner = undefined
        this.board = new Board()
        this.guessRemaining = 6
        this.gameOver = false
        this.guess = "guess"
        this.guessWord = ""
        this.displyWord = []
    }

    switchPlayers() {
        this.currentPlayer =
         this.currentPlayer === this.HumanPlayer ? this.ComputerPlayer : this.HumanPlayer
    }

    gameIsOver() {
        if(this.guessRemaining === 0 || this.wordCheck() === true){
             this.gameOver = true
        } else{this.gameOver = false}
    }

    // guess(){
    //      this.guess.toLowerCase() = this.player1.getGuess()
    // }

    startBoard() {

            this.guessWord = this.player2.wordSelect()
            return this.disply()
    }

    disply(){
        return this.displyWord = Array(this.guessWord.length).fill("_");
    }

    gameDisplay(){
        console.log(`lets play a game`)
        console.log(this.board.displyWord)
        console.log(`you have ${this.guessRemaining} guesses left`)
        console.log(`you have tried ${this.board.guessedLetters}`)
        console.log(this.board.guessWord)
        
    }
    reveal(){
        if(this.board.wordFound === true){
            return `You did it. the word was ${this.board.guessWord}`
        } else{
            return `Better luck next time. The word was ${this.board.guessWord}`
        }
    }

    wordCheck(){
        if(this.board.displyWord.join("") === this.guessWord){
            this.board.wordFound = true
        }
    }

    gameplay(){
        this.startBoard()
        while(!this.gameOver){
            console.clear()
            this.gameDisplay()
            this.gameIsOver()
            this.guess = this.player1.getGuess()
            if(this.board.isValidGuess(this.guess)){
                this.board.replace(this.guess)
                // if(this.wordCheck() === 0){break;}
            }else{
            this.guessRemaining -=1
            }
            
        }
        this.reveal()
    }
    isValidGuess(letter){
        if(this.guessWord.includes(letter) && !this.guessedLetters.includes(letter)){
            this.guessedLetters.push(letter);
            return true
        } else {
            this.guessedLetters.push(letter);
            return false
        }
    }
    replace(letter){

        for(let i = 0; i <= this.guessWord.length-1;i++){
            if(this.guessWord[i] === letter){
                this.displyWord[i] = letter
            }
        }
    }
    fillSpace(letter){
        if(this.isValidGuess(letter) === true){
            this.replace(letter)
        } else {
            return "try again"
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const readline = require("readline-sync");

class HumanPlayer {
    constructor() {
    }
    getGuess() {
        return readline.question("Guess a letter.")
    }
}

module.exports = HumanPlayer;


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
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__);




class View{
    constructor(game,displayEl,gameEl){
        this.game = game
        this.displayEl = displayEl
        this.gameEl = gameEl
        this.play()
    }
    play(){
        if(this.game.gameIsOver()){
            let button = document.querySelector("button");
            let userGuess = document.querySelector("#userGuess");
            button.parentNode.removeChild(button);
            userGuess.parentNode.removeChild(userGuess);
            let h1 = document.createElement("h1")
            h1.innerText = this.game.reveal()
        } else {
            this.display()
            this.makeGuess()
        }

    }

    display(){
        let disH1 = document.createElement("h1")
        disH1.innerText = "Let's play a game"
        this.displayEl.appendChild(disH1)
        let p = document.createElement("p")
        p.id = "guessword"
        let secret = this.game.startBoard()
        p.innerText = `Guess this word \n ${secret.toString()} \n ${this.game.guessWord}`
        this.displayEl.appendChild(p)
        debugger


        this.gameEl.innerHTML =""
        let userGuess = document.createElement("input")
        userGuess.type = "Text"
        userGuess.id = "userGuess"
        userGuess.maxLength = "1"
        userGuess.size = "5"
        let button = document.createElement("button")
        button.innerText = "Guess"
        this.gameEl.appendChild(userGuess)
        this.gameEl.appendChild(button)
    }
    makeGuess(){
        let button = document.querySelector("button")
        button.addEventListener("click", ()=>{
            let input = document.querySelector("#userGuess")
            this.game.guess = input.value
            debugger
            if(this.game.isValidGuess(this.game.guess)){
                this.game.replace(this.game.guess)
                // if(this.wordCheck() === 0){break;}
            }else{
            this.guessRemaining -=1
            }
            
        })
    }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

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
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./View.js");





document.addEventListener("DOMContentLoaded", ()=>{
    let displayEl = document.querySelector("#gameDisplay")
    let gameEl = document.querySelector("#gameArea")
    let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
    new _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] (game,displayEl,gameEl)
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map