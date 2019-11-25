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
/***/ (function(module, exports) {

// Board
//   This would construct a board to the length. 
//   It should check if the board is complete. 
//   It should be able to add characters at different indices.


class Board {
  constructor(length) {
    this.board = new Array(length).fill("_");
  }

  isComplete(word) {
      if (word === this.board.join("")) {
        return true;
      } else {
        return false;
      }
    }
  
  addLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        this.board[i] = letter;
      }
    }
  }  

  display() {
    console.log(this.board.join(" "))
  }
}

module.exports = Board;


  




/***/ }),

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {dictionary} = __webpack_require__(/*! ./Dictionary.js */ "./Dictionary.js")
// let dictionary = ['apple','watermelon']
  class ComputerPlayer {
    constructor (name = computer) {
      // this.computer = computer;
      this.name = name;
      this.secretWord = dictionary[(Math.floor(Math.random()* dictionary.length))];
  }

  secretWordLength() { return this.secretWord.length}

  reveal() {
     return this.secretWord
  }


}

module.exports = ComputerPlayer;

let comp = new ComputerPlayer('robo')
console.log(comp.secretWord)


// let Con = new ComputerPlayer("Alex")
// console.log(Con.secretWord)
// console.log(Con.reveal())




/***/ }),

/***/ "./Dictionary.js":
/*!***********************!*\
  !*** ./Dictionary.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// let humanBody = ['blood', 'body', 'cell', 'digestion', 'disease', 'drug', 'excrete', 'exercise', 'face', 'foot', 'hair', 'head', 'health', 'hygiene', 'injury', 'muscle', 'nerve', 'organ', 'reproduction', 'respiration', 'sense', 'skeleton', 'tooth'];
// let humanMind = ['action', 'anger', 'behavior', 'belief', 'care', 'emotion', 'fear', 'happiness', 'hate', 'knowledge', 'learn', 'love', 'mind', 'morals', 'personality', 'sadness', 'thought' ];
// let everydayLife = ['airplane', 'boat', 'building', 'car', 'city', 'clothing', 'community', 'cooking', 'drink', 'family', 'food', 'furniture', 'game', 'home', 'jewelry', 'leisure', 'relationship', 'room', 'school', 'sport', 'tool', 'transportation'];
// let historyAndCulture = ['celebration', 'culture', 'education', 'history', 'myth', 'religion', 'science', 'tradition'];
// let communication = ['art', 'book', 'color', 'communication', 'dance', 'film', 'grammar', 'instrument', 'language', 'literature', 'music', 'photography', 'theater'];


// console.log(humanBody)

// let humanBodyDefinition = `Words for parts of our bodies, how our bodies work, and how we care for our bodies`;
// let humanMindDefinition = `Words for how we feel, how we think, and how we act`;
// let everydayLifeDefinition = `Words for where we live, how we travel, what we eat and wear, who we know, and how we have fun`;
// let historyAndCultureDefinition = `Words for what organizes society, what has happened in the past, and what shapes the future`;
// let communicationDefinition = `Words for how we communicate with language and how we communicate through art`;

let dictionary = 
["able", "about", "account", "acid", "across",
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
]

module.exports = {dictionary};

/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const HumanPlayer = require("./HumanPlayer.js")
// const ComputerPlayer = require("./ComputerPlayer")
const Board = __webpack_require__(/*! ./Board.js */ "./Board.js")
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    //this.computer = computer;
    this.currentPlayer = player1;
    this.board = new Board();
    // (this.computer.secretWordLength());
    this.guessesRemaining = 9;
    this.guessedLetters = [];
  }
  switchPlayers(){
    
    this.currentPlayer === this.player1? this.player2: this.player1
  }  
  isGameOver() {
    if(this.board.isComplete(this.computer.secretWord) || this.guessesRemaining === 0) {
      return true;
    } else {
      return false;
    }
  }

   
  guessValidity(letter) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (!this.guessedLetters.includes(letter) &&  alphabets.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  play() {
    while(!this.isGameOver()) {
    console.clear();
    console.log('Welcome ' + this.player1.name )

      this.board.display();
      console.log("you have " + this.guessesRemaining  + " guesses remaining")
      console.log("Guessed letter: " + this.guessedLetters)
      let letter = this.player1.getMove();

      if(this.guessedLetters.includes(letter)) {
        letter = readline.question("You already picked this letter. Please enter a different letter: ")
      } 
      if (this.guessValidity(letter)) {
        this.guessedLetters.push(letter);
        this.board.addLetter(this.computer.secretWord, letter);
        this.guessesRemaining --;
      } else {
         letter = console.log("Please enter a valid letter: ")
      }


      console.clear();
    } 

    if(this.board.isComplete(this.computer.secretWord)) {
      console.log(" YOU WON! ")
      console.log("The word is: " + this.computer.reveal());
    } else {
      console.log(" YOU lOOSE ! ")
      console.log("The word is: " + this.computer.reveal());
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Game);


// let playerName = console.log('Please enter name ');
// let game = new Game(new HumanPlayer(playerName))
// game.play(); 


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
class View {
  constructor( game, el) {
    this.game = game;
    this.el = el;
    debugger
    // this.setUp()
    // this.play = playAgain()
  }
  // setUp(){

  // }
  playAgain(){
    let button = document.querySelector('#playAgain');
    button.addEventListener('click' ,()=> {
      this.game.playAgain();
      this.play();
    })
  }
  // play() {
  //   let
  // }
  // let gameDiv = document.createElement('div');
  // gameDiv.id = "boardDiv";
  // this.el

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



// import Dictionary from"./Dictionary.js";

document.addEventListener('DOMContentLoaded', () => {
let playerOne;
let playerTwo;
  // let input = document.querySelector('#input').value

 let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](
   new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("Faris"),
   new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default.a("Robot")
 );
//  game.play()
  let el = document.querySelector("#hm")
  new _View_js__WEBPACK_IMPORTED_MODULE_3__["default"](game, el)
 
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map