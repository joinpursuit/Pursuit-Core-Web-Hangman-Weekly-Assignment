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

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const { dictionary } = __webpack_require__(/*! ./Dictionary.js */ "./Dictionary.js")

  class ComputerPlayer {
    constructor (name = "Computer") {
      this.dictionary = dictionary;
      this.name = name;
      this.userGuess = new guess()
      //this.ComputerPlayer = ComputerPlayer;
      // this.secretWord = dictionary[(Math.floor(Math.random()* dictionary.length))];
  }
  display(board){
    this.board = board;
  }
  

  secretWordLength() { return this.secretWord.length}

  reveal() {
    let revealStr = [];
    for(let i = 0; i < this.word.length; i++){
        revealStr.push(this.word[i]);
    }
    let currentBoard = revealStr.join(" ");
    return currentBoard;
  } 
  checkGuess(letter) {
    let word = [];
    for(let i = 0 ; i < this.secretWord.length; i++) {
        if(this.secretWord[i] === char) {
            word.push(i);
        }
    }
    return word
}

reveal() {
    return this.secretWord;
} 
}
/* harmony default export */ __webpack_exports__["default"] = (ComputerPlayer);
//module.exports = ComputerPlayer;



/***/ }),

/***/ "./Dictionary.js":
/*!***********************!*\
  !*** ./Dictionary.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

let dictionary = [
    "able", "about", "account", "acid", "across",
    "addition", "adjustment", "advertisement", "after", "again", "against",
    "agreement", "almost", "among", "amount", "amusement", "angle", "angry",
    "animal", "answer", "apparatus", "apple", "approval", "arch", "argument",
    "army", "attack", "attempt", "attention", "attraction", "authority",
    "automatic", "awake", "baby", "back", "balance", "ball", "band", "base",
    "basin", "basket", "bath", "beautiful", "because", "before", "behaviour",
    "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite",
    "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", 
    "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake",
    "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken",
    "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst",
    "business", "butter", "button", "cake", "camera", "canvas", "card", "care", 
    "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", 
    "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", 
    "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb",
    "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", 
    "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", 
    "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current",
    "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt",
    "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", 
    "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", 
    "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", 
    "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", 
    "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", 
    "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", 
    "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", 
    "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish",
    "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", 
    "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", 
    "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", 
    "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", 
    "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", 
    "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", 
    "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", 
    "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", 
    "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", 
    "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", 
    "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", 
    "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", 
    "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", 
    "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", 
    "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", 
    "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", 
    "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", 
    "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", 
    "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", 
    "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", 
    "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", 
    "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", 
    "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", 
    "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", 
    "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", 
    "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", 
    "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", 
    "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", 
    "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", 
    "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", 
    "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", 
    "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", 
    "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", 
    "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", 
    "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", 
    "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", 
    "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", 
    "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", 
    "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", 
    "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", 
    "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", 
    "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", 
    "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", 
    "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"
];

module.exports = {dictionary};


/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Assigning to rvalue (11:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|     this.ComputerPlayer = ComputerPlayer;\n|     this.board = new Board\n>     new Board = this.ComputerPlayer.secretWordLength();\n|     this.guessesRemaining = 6;\n|     this.guessedLetters = [];");

/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// HumanPlayer 
// * Will need to getMove from player. 
// * Display the board. 
// * Possibly a select secret word that returns the length. 
// * Possibly a give Positions that returns an array of indices. 
// * Possibly a reveal word.  

class HumanPlayer {
    constructor(name) {
        this.name = name; 
    }
     getMove() {
        let userGuess = readline.question("Please Enter A Letter: ");
        return userGuess.toLowerCase();
    }
}
//export default HumanPlayer;
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
/* harmony import */ var _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hangmanPics.js */ "./hangmanPics.js");
/* harmony import */ var _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__);

class View {
  constructor( game, element) {
    this.game = game;
    this.element = element;
    this.display();
    this.setUp();
    this.bindEvents();
    this.play();
    this.playAgain = playAgain()
  }
  // setUp(){

  // }
  play() {
    this.display();
    this.showLetters();
    if (this.game.isGameOver()) {
      let h2 = document.querySelector("#playGame");
      h2.innerText = this.game.currentPlayer.name +" Text here this is view js";
      this.el.appendChild(h2);
      let form = document.querySelector("#form");
      form.parentNode.removeChild(form);
      this.displayImages(this.game.guessesRemaining);
      this.bindEvent();
    }
    // let gameDiv = document.createElement('div');
    // gameDiv.id = "boardDiv";
    // this.element
  }
  bindEvent() {
    let form = document.querySelector("#form");
    // add event listener when we click on submit button at the same time 
    // we prevent the page to refresh
    form.addEventListener("submit", event =>{
      event.preventDefault();
      // grab input and get its value.
      let input = document.querySelector("input")
      let letter = input.value;
      //clear the input and assign in to an empty value overtimes we entre a letter and hit enter 
      input.value = "";
      // check the letter guessed if it is valid
      if(this.game.guessValidity(letter)){
        this.game.enterValidGuess(letter);
      }
      //creat a play method
      this.play();
    })
  }
  display(board = this.game.board){
    let ul = document.querySelector("#ul");
    ul.innerText = "";
    for (let i = 0; i < board.length(); i++) {
      let li = document.createElement("li");
    li.innerText = board.get(i);
    ul.appendChild(li);
    //let currentBoard = this.game.board.displayBoard();
  }
}
displayShowLetters(){
  let guesses = document.querySelector("#guessedSoFar");
  guesses.innerHTML = "";
  guesses.innerText = this.game.guessedLetters.join(", ")
}

displayHangMan() {
  document.querySelector("#hangManPic").innerText = _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__["hangManPics"][this.game.guessesRemaining]
}

  playAgain(){
    let button = document.querySelector("#playAgain");
    button.addEventListener("click", ()=> {
      this.game.playAgain();
      this.play();
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ "./hangmanPics.js":
/*!************************!*\
  !*** ./hangmanPics.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const hangmanPics = [
  `
  +---+
  |   |
  O   |
 /|\\ |
 / \\ |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\ |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\ |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,

  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
========= `,
  `
  +---+
  |   |
      |
      |
      |
      |
========= `,
];
module.exports = { hangmanPics }

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
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Game_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./View.js");





document.addEventListener('DOMContentLoaded', () => {
  
  let element = document.querySelector("#hm");
  let computer =new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
  let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0___default.a(new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("contestant"));
  new _View_js__WEBPACK_IMPORTED_MODULE_3__["default"](game,element);
  //new View(el, game)
    });


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map