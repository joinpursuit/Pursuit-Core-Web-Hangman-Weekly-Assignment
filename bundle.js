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

const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
const Moves = __webpack_require__(/*! ./Moves.js */ "./Moves.js");

class Board {
    constructor() {
        this.board = []; 
        this.answer;
        this.guesses = [];
        this.movesRemaining = 6; 
        this.movesTaken = 0;
        this.MOVES = Moves;  
    } 

    buildBoard(word) {
        this.board = new Array(word.length).fill("_");
        this.answer = [...word];

    } 

    isMoveLong(guess) {
        if(guess.length > 1 || guess.length === 0) {
            return false; 
        } else {
            return true;
        }
    } 

    isValidMove(guess) {
        if(guess === undefined || !isNaN(guess) || !this.isMoveLong(guess)) {
            return false; 
        } else {
            if(!Moves[guess.toUpperCase()]) {
                return false;
            }
            return true;
        }
    } 

    isGuessedLetter(guess) {
        if(this.guesses.includes(guess.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }

    isCorrectGuess(guess) {
        return this.answer.includes(guess);
    }

    incorrectGuess() {
        this.movesRemaining -= 1;
        this.movesTaken += 1;
    }

    placeLetter(guess) {
        this.answer.forEach((el, i) => {
            if(el === guess.toLowerCase()) {
                this.board[i] = guess.toLowerCase();               
            }
        })
        this.movesTaken++;
    }

    addGuess(guess) {
        this.guesses.push(guess);
    }

    isGameOver() {
        if(this.movesRemaining === 0) {
            return true; 
        } else {
            return this.board.every((el) => el !== "_"); 
        }
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

const Dictionary = __webpack_require__(/*! ./Dictionary.js */ "./Dictionary.js")

class ComputerPlayer {
    constructor() {
        this.dictionary = Dictionary;
    }

    getWord() {
        return this.dictionary[Math.floor(Math.random() * this.dictionary.length - 1)]
    }
}

module.exports = ComputerPlayer;

/***/ }),

/***/ "./Dictionary.js":
/*!***********************!*\
  !*** ./Dictionary.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

let allTheWords = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", 
"among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", 
"attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", 
"because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", 
"board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", 
"broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", 
"care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", 
"clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", 
"competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", 
"cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", 
"debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", 
"dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", 
"driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", 
"ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", 
"feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", 
"floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", 
"full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", 
"group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", 
"heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", 
"impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", 
"jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", 
"leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", 
"loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", 
"medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", 
"mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", 
"needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", 
"opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", 
"past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", 
"plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", 
"prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", 
"quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", 
"regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", 
"roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", 
"second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", 
"sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", 
"slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", 
"song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", 
"station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", 
"strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", 
"system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", 
"this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", 
"tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", 
"value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", 
"weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", 
"wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"];

module.exports = allTheWords;

/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
const Board = __webpack_require__(/*! ./Board.js */ "./Board.js");
// const readline = require("readline");

class Game {
    constructor() {
        this.board = new Board();
        this.referee = new ComputerPlayer();
        this.player = new HumanPlayer();
    }

    isGameOver() {
        return this.board.isGameOver();
    }

    getNewWord() {    
        this.board.buildBoard(this.referee.getWord());
    }

    isValidMove(guess) {
        return this.board.isValidMove(guess);
    }

    isGuessedMove(guess) {
        return this.board.isGuessedLetter(guess);
    }

    isCorrectGuess(guess) {
        return this.board.isCorrectGuess(guess);
    }

    incorrectGuess() {
        this.board.incorrectGuess();
    }

    placeLetter(guess) {
        this.board.placeLetter(guess);
    }

    addGuess(guess) {
        this.board.addGuess(guess);
    }

    getBoard() {
        return this.board.board;
    }

    getAnswer() {
        return this.board.answer;
    }

    getGuesses() {
        return this.board.guesses;
    }

    getMoves() {
        return [this.board.movesRemaining, this.board.movesTaken];
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

class HumanPlayer {
    constructor(name) {
        this.name = name;
    }
}

module.exports = HumanPlayer;

/***/ }),

/***/ "./Moves.js":
/*!******************!*\
  !*** ./Moves.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

let moves = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g", 
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g", 
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z"
}

module.exports = moves;

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
    constructor(game, element) {
        this.game = game;
        this.element = element;
        this.game.getNewWord();
        this.displayBoard();
    }

    displayBoard() {
        this.removeChildren();
        let guessFeedback = document.querySelector("#guessFeedback");
        if(!guessFeedback) {
            let guessFeedback = document.createElement("p");
            guessFeedback.id = "guessFeedback";
            this.element.appendChild(guessFeedback);
        }

        let board = document.createElement("h2");
        board.innerText = this.game.getBoard().join(" ");

        let guesses = document.createElement("p");
        guesses.innerText = `Guesses: ${this.game.getGuesses().join(", ")}`;
        guesses.id = "guesses";

        let movesRemaining = document.createElement("p");
        movesRemaining.innerText = `Moves Remaining: ${this.game.getMoves()[0]}`;
        movesRemaining.id = "movesRemaining";

        this.appendChildren(board, guesses, movesRemaining);

        this.isGameOver();
    }

    removeChildren() {
        let board = document.querySelector("h2");
        if(board) {
            board.parentNode.removeChild(board);
        }

        let guesses = document.querySelector("#guesses");
        if(guesses) {
            guesses.parentNode.removeChild(guesses);
        }

        let movesRemaining = document.querySelector("#movesRemaining");
        if(movesRemaining) {
            movesRemaining.parentNode.removeChild(movesRemaining);
        }
    }

    appendChildren(...elements) {
        elements.forEach(child => this.element.appendChild(child));
    }
    
    guess() {
        let button = document.querySelector("#guess");
        let guessFeedback = document.querySelector("#guessFeedback");

        button.addEventListener("click", () => {
            let userInput = document.querySelector("input");
            if(!this.game.isValidMove(userInput.value)) {
                guessFeedback.innerText = "Invalid Letter";
                userInput.value = "";
            } else if(this.game.isGuessedMove(userInput.value)) {
                guessFeedback.innerText = "Guessed Letter";
            } else {
                this.validGuess(userInput);
            }
        })
    }

    validGuess(userInput) {
        let guessFeedback = document.querySelector("#guessFeedback");
        if(this.game.isCorrectGuess(userInput.value)) {
            guessFeedback.innerText = "Correct Guess";
            this.game.placeLetter(userInput.value);
        } else {
            guessFeedback.innerText = "Incorrect Guess";
            this.game.incorrectGuess();
        }
        this.game.addGuess(userInput.value);
        userInput.value = "";
        this.displayBoard();
    }

    isGameOver() {
        if(this.game.isGameOver()) {
            this.removeGuessing();
            if(this.game.board.movesRemaining === 0) {
                guessFeedback.innerText = "Lose!";
            } else if(this.game.getBoard().every(el => el !== "_")){
                guessFeedback.innerText = "Win!";
            }
        } else {
            this.guess();
        }
    }

    removeGuessing() {
        let guessing = document.querySelector("#guessBox");
        guessing.parentNode.removeChild(guessing);
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
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.js */ "./View.js");



document.addEventListener("DOMContentLoaded", () => {
    let displayBox = document.querySelector("#playerFeedback");
    new _View_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](), displayBox);
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map