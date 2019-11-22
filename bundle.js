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

const dictionary = __webpack_require__(/*! ./words.js */ "./words.js")

class Board {
  constructor() {
    this._secretWord = this.selectSecretWord();
    this.board = new Array(this._secretWord.length).fill(null);
  }
  
  selectSecretWord() {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex].toLowerCase();
  }

  isComplete() {
    return this.board.every(el => el); // checking to see that all have positive value 
  }

  includes(char) {
      return this._secretWord.includes(char);
  }

  addChar(char) {
          for(let i = 0; i < this.board.length; i++) {
              if(this._secretWord[i] === char) {
                  this.board[i] = char; 
              }
          }
  }

  length() {
    return this.board.length;
  }

  get(idx) {
    return this.board[idx]
  }

  reveal() {
    return this._secretWord;
  }




}

module.exports = Board; 

/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {


// const readlineSync = require('readline-sync');

class HumanPlayer {
    getMove() {
        return readlineSync.question("Please Guess A Letter: ").trim().toLowerCase();
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
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.displayBoard();
        this.blind();
        this.printHangMan();
    }
    displayBoard(){
        this.el.innerText = "";
        let boardDiv = document.createElement("div")
        let currentBoard = this.game.displayBoard()
        let h1 = document.createElement("h1")
        h1.innerText = currentBoard;
        let p = document.createElement("p")
        p.innerText = "Please Enter a Letter"
        let input = document.createElement("input")
        input.id = "letterInput";
        let button = document.createElement("button");
        button.innerText = "Submit"

        boardDiv.appendChild(h1);
        boardDiv.appendChild(p);
        boardDiv.appendChild(input);
        boardDiv.appendChild(button);

        this.el.appendChild(boardDiv)

        
    }
    blind(){
        let button = document.querySelector("button")
        button.addEventListener("click", ()=>{

        })
    }
    printHangMan(){
        let img = document.createElement("img")
        img.src ="./images/hangman_6.jpg"
        this.el.prepend(img)
    }
}
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(/*! ./Board.js */ "./Board.js");
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");

class Game {
    constructor() {
        this.board = new Board();
        this.humanPlayer = new HumanPlayer();
        this.guessesRemaining = 6;
        this.alreadyGuessed = new Set(); 
    }

    play() {
        while(!this.isGameOver()) {
            this.displayBoard();
            let guess = this.humanPlayer.getMove();
            if(this.isValidGuess(guess)) {
                this.addGuess(guess);
                this.board.addChar(guess);
                if(!this.board.includes(guess)) this.guessesRemaining--;
            }
        }

        if(this.guessesRemaining) {
            console.log("Congratulations! You Win! ")
        } else {
            console.log("You Lose, the word was ", this.board.reveal() )
        }
    }

    isValidGuess(char) {
        return char.length === 1 && char.match(/[a-z]/i) && !this.alreadyGuessed.has(char) //only valid with alphabet chars that haven't already been guessed. 
    }

    addGuess(char) {
        this.alreadyGuessed.add(char);
    }

    isGameOver() {
        return this.guessesRemaining <= 0 || this.board.isComplete()
    }
    displayBoard(){
        let output = [];

        for(let i = 0; i < this.board.length(); i++) {
            let char = this.board.get(i);
            output.push( char ? char : "_")
        }
        return output.join(" ")
    }


}

module.exports = Game;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.js */ "./Board.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Board_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./game.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./View.js");





document.addEventListener("DOMContentLoaded",()=>{
    let button = document.createElement("button")
    button.innerText = "Start Game"
    document.body.appendChild(button)
    
    button.addEventListener("click",()=>{

        document.body.removeChild(button)
        let newGame = new _game_js__WEBPACK_IMPORTED_MODULE_2___default.a();

        let el = document.querySelector("#gameDiv")
        
        new _View_js__WEBPACK_IMPORTED_MODULE_3__["default"](newGame, el)

    })
})

/***/ }),

/***/ "./words.js":
/*!******************!*\
  !*** ./words.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

const dictionary = [
    "able",
    "about",
    "account",
    "acid",
    "across",
    "addition",
    "adjustment",
    "advertisement",
    "after",
    "again",
    "against",
    "agreement",
    "almost",
    "among",
    "amount",
    "amusement",
    "angle",
    "angry",
    "animal",
    "answer",
    "apparatus",
    "apple",
    "approval",
    "arch",
    "argument",
    "army",
    "attack",
    "attempt",
    "attention",
    "attraction",
    "authority",
    "automatic",
    "awake",
    "baby",
    "back",
    "balance",
    "ball",
    "band",
    "base",
    "basin",
    "basket",
    "bath",
    "beautiful",
    "because",
    "before",
    "behaviour",
    "belief",
    "bell",
    "bent",
    "berry",
    "between",
    "bird",
    "birth",
    "bite",
    "bitter",
    "black",
    "blade",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "boiling",
    "bone",
    "book",
    "boot",
    "bottle",
    "brain",
    "brake",
    "branch",
    "brass",
    "bread",
    "breath",
    "brick",
    "bridge",
    "bright",
    "broken",
    "brother",
    "brown",
    "brush",
    "bucket",
    "building",
    "bulb",
    "burn",
    "burst",
    "business",
    "butter",
    "button",
    "cake",
    "camera",
    "canvas",
    "card",
    "care",
    "carriage",
    "cart",
    "cause",
    "certain",
    "chain",
    "chalk",
    "chance",
    "change",
    "cheap",
    "cheese",
    "chemical",
    "chest",
    "chief",
    "chin",
    "church",
    "circle",
    "clean",
    "clear",
    "clock",
    "cloth",
    "cloud",
    "coal",
    "coat",
    "cold",
    "collar",
    "colour",
    "comb",
    "come",
    "comfort",
    "committee",
    "common",
    "company",
    "comparison",
    "competition",
    "complete",
    "complex",
    "condition",
    "connection",
    "conscious",
    "control",
    "cook",
    "copper",
    "copy",
    "cord",
    "cork",
    "cotton",
    "cough",
    "country",
    "cover",
    "crack",
    "credit",
    "crime",
    "cruel",
    "crush",
    "current",
    "curtain",
    "curve",
    "cushion",
    "damage",
    "danger",
    "dark",
    "daughter",
    "dead",
    "dear",
    "death",
    "debt",
    "decision",
    "deep",
    "degree",
    "delicate",
    "dependent",
    "design",
    "desire",
    "destruction",
    "detail",
    "development",
    "different",
    "digestion",
    "direction",
    "dirty",
    "discovery",
    "discussion",
    "disease",
    "disgust",
    "distance",
    "distribution",
    "division",
    "door",
    "doubt",
    "down",
    "drain",
    "drawer",
    "dress",
    "drink",
    "driving",
    "drop",
    "dust",
    "early",
    "earth",
    "east",
    "edge",
    "education",
    "effect",
    "elastic",
    "electric",
    "engine",
    "enough",
    "equal",
    "error",
    "even",
    "event",
    "ever",
    "every",
    "example",
    "exchange",
    "existence",
    "expansion",
    "experience",
    "expert",
    "face",
    "fact",
    "fall",
    "false",
    "family",
    "farm",
    "father",
    "fear",
    "feather",
    "feeble",
    "feeling",
    "female",
    "fertile",
    "fiction",
    "field",
    "fight",
    "finger",
    "fire",
    "first",
    "fish",
    "fixed",
    "flag",
    "flame",
    "flat",
    "flight",
    "floor",
    "flower",
    "fold",
    "food",
    "foolish",
    "foot",
    "force",
    "fork",
    "form",
    "forward",
    "fowl",
    "frame",
    "free",
    "frequent",
    "friend",
    "from",
    "front",
    "fruit",
    "full",
    "future",
    "garden",
    "general",
    "girl",
    "give",
    "glass",
    "glove",
    "goat",
    "gold",
    "good",
    "government",
    "grain",
    "grass",
    "great",
    "green",
    "grey",
    "grip",
    "group",
    "growth",
    "guide",
    "hair",
    "hammer",
    "hand",
    "hanging",
    "happy",
    "harbour",
    "hard",
    "harmony",
    "hate",
    "have",
    "head",
    "healthy",
    "hear",
    "hearing",
    "heart",
    "heat",
    "help",
    "high",
    "history",
    "hole",
    "hollow",
    "hook",
    "hope",
    "horn",
    "horse",
    "hospital",
    "hour",
    "house",
    "humour",
    "idea",
    "important",
    "impulse",
    "increase",
    "industry",
    "insect",
    "instrument",
    "insurance",
    "interest",
    "invention",
    "iron",
    "island",
    "jelly",
    "jewel",
    "join",
    "journey",
    "judge",
    "jump",
    "keep",
    "kettle",
    "kick",
    "kind",
    "kiss",
    "knee",
    "knife",
    "knot",
    "knowledge",
    "land",
    "language",
    "last",
    "late",
    "laugh",
    "lead",
    "leaf",
    "learning",
    "leather",
    "left",
    "letter",
    "level",
    "library",
    "lift",
    "light",
    "like",
    "limit",
    "line",
    "linen",
    "liquid",
    "list",
    "little",
    "living",
    "lock",
    "long",
    "look",
    "loose",
    "loss",
    "loud",
    "love",
    "machine",
    "make",
    "male",
    "manager",
    "mark",
    "market",
    "married",
    "mass",
    "match",
    "material",
    "meal",
    "measure",
    "meat",
    "medical",
    "meeting",
    "memory",
    "metal",
    "middle",
    "military",
    "milk",
    "mind",
    "mine",
    "minute",
    "mist",
    "mixed",
    "money",
    "monkey",
    "month",
    "moon",
    "morning",
    "mother",
    "motion",
    "mountain",
    "mouth",
    "move",
    "much",
    "muscle",
    "music",
    "nail",
    "name",
    "narrow",
    "nation",
    "natural",
    "near",
    "necessary",
    "neck",
    "need",
    "needle",
    "nerve",
    "news",
    "night",
    "noise",
    "normal",
    "north",
    "nose",
    "note",
    "number",
    "observation",
    "offer",
    "office",
    "only",
    "open",
    "operation",
    "opinion",
    "opposite",
    "orange",
    "order",
    "organization",
    "ornament",
    "other",
    "oven",
    "over",
    "owner",
    "page",
    "pain",
    "paint",
    "paper",
    "parallel",
    "parcel",
    "part",
    "past",
    "paste",
    "payment",
    "peace",
    "pencil",
    "person",
    "physical",
    "picture",
    "pipe",
    "place",
    "plane",
    "plant",
    "plate",
    "play",
    "please",
    "pleasure",
    "plough",
    "pocket",
    "point",
    "poison",
    "polish",
    "political",
    "poor",
    "porter",
    "position",
    "possible",
    "potato",
    "powder",
    "power",
    "present",
    "price",
    "print",
    "prison",
    "private",
    "probable",
    "process",
    "produce",
    "profit",
    "property",
    "prose",
    "protest",
    "public",
    "pull",
    "pump",
    "punishment",
    "purpose",
    "push",
    "quality",
    "question",
    "quick",
    "quiet",
    "quite",
    "rail",
    "rain",
    "range",
    "rate",
    "reaction",
    "reading",
    "ready",
    "reason",
    "receipt",
    "record",
    "regret",
    "regular",
    "relation",
    "religion",
    "representative",
    "request",
    "respect",
    "responsible",
    "rest",
    "reward",
    "rhythm",
    "rice",
    "right",
    "ring",
    "river",
    "road",
    "roll",
    "roof",
    "room",
    "root",
    "rough",
    "round",
    "rule",
    "safe",
    "sail",
    "salt",
    "same",
    "sand",
    "scale",
    "school",
    "science",
    "scissors",
    "screw",
    "seat",
    "second",
    "secret",
    "secretary",
    "seed",
    "seem",
    "selection",
    "self",
    "send",
    "sense",
    "separate",
    "serious",
    "servant",
    "shade",
    "shake",
    "shame",
    "sharp",
    "sheep",
    "shelf",
    "ship",
    "shirt",
    "shock",
    "shoe",
    "short",
    "shut",
    "side",
    "sign",
    "silk",
    "silver",
    "simple",
    "sister",
    "size",
    "skin",
    "skirt",
    "sleep",
    "slip",
    "slope",
    "slow",
    "small",
    "smash",
    "smell",
    "smile",
    "smoke",
    "smooth",
    "snake",
    "sneeze",
    "snow",
    "soap",
    "society",
    "sock",
    "soft",
    "solid",
    "some",
    "song",
    "sort",
    "sound",
    "soup",
    "south",
    "space",
    "spade",
    "special",
    "sponge",
    "spoon",
    "spring",
    "square",
    "stage",
    "stamp",
    "star",
    "start",
    "statement",
    "station",
    "steam",
    "steel",
    "stem",
    "step",
    "stick",
    "sticky",
    "stiff",
    "still",
    "stitch",
    "stocking",
    "stomach",
    "stone",
    "stop",
    "store",
    "story",
    "straight",
    "strange",
    "street",
    "stretch",
    "strong",
    "structure",
    "substance",
    "such",
    "sudden",
    "sugar",
    "suggestion",
    "summer",
    "support",
    "surprise",
    "sweet",
    "swim",
    "system",
    "table",
    "tail",
    "take",
    "talk",
    "tall",
    "taste",
    "teaching",
    "tendency",
    "test",
    "than",
    "that",
    "then",
    "theory",
    "there",
    "thick",
    "thin",
    "thing",
    "this",
    "thought",
    "thread",
    "throat",
    "through",
    "through",
    "thumb",
    "thunder",
    "ticket",
    "tight",
    "till",
    "time",
    "tired",
    "together",
    "tomorrow",
    "tongue",
    "tooth",
    "touch",
    "town",
    "trade",
    "train",
    "transport",
    "tray",
    "tree",
    "trick",
    "trouble",
    "trousers",
    "true",
    "turn",
    "twist",
    "umbrella",
    "under",
    "unit",
    "value",
    "verse",
    "very",
    "vessel",
    "view",
    "violent",
    "voice",
    "waiting",
    "walk",
    "wall",
    "warm",
    "wash",
    "waste",
    "watch",
    "water",
    "wave",
    "weather",
    "week",
    "weight",
    "well",
    "west",
    "wheel",
    "when",
    "where",
    "while",
    "whip",
    "whistle",
    "white",
    "wide",
    "will",
    "wind",
    "window",
    "wine",
    "wing",
    "winter",
    "wire",
    "wise",
    "with",
    "woman",
    "wood",
    "wool",
    "word",
    "work",
    "worm",
    "wound",
    "writing",
    "wrong",
    "year",
    "yellow",
    "yesterday",
    "young",
  ];
  
  module.exports = dictionary

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map