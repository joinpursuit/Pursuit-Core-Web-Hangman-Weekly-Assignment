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

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const readline = require('readline-sync');

class HumanPlayer {
  constructor(name) {
    this.name = name;
  }
  getLetter(){

    return readline.question("Please enter your guess: ")
}

  // getMove() {
  //   return readline.question("Please Enter a char: ").toLowerCase();
  // }

  // displayBoard(board) {
  //   let output = "";
  //   for (let i = 0; i < board.length(); i++) {
  //     output += board.get(i) + " ";
  //   }
  //   console.log(output);
  // }

  // chooseSecretWord() {
  //   return readline.questionInt(this.name + " Enter the length of your word: ")
  // }

  // checkGuess(char) {
  //   console.log(char + " was guessed")
  //   console.log("Please enter the position of the character");
  //   console.log("if the character appears more than once separate by a comma");
  //   console.log("If your word is hello and the guess is l, you response should look like 3,4");
  //   let guess = readline.question("")
  //   let result = guess.split(",").map(el => Number(el) - 1)
  //   return result[0] === -1 ? [] : result
    
    
  // }

  // reveal() {
  //   return readline.question("What was your word? ").toLowerCase();
  // }

}

module.exports = HumanPlayer;

/***/ }),

/***/ "./board.js":
/*!******************!*\
  !*** ./board.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

class Board {
    constructor(word){
        this.word = word
        this.winner = undefined;
        this.blank = new Array(this.word.length).fill("_")
    }
  
     blankLetters(letter,num = []){
        //  this.blank[num] = letter
        //  return (this.blank)
        console.log(num)
        num.forEach(index =>{
            this.blank[index] = letter
        })
        return this.blank
         
     }

   

}

module.exports = Board; 

/***/ }),

/***/ "./cpu.js":
/*!****************!*\
  !*** ./cpu.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {


class ComputerPlayer {
    constructor(){
        this.index = undefined
        this.secondIndex = []
        this.reamingingMove = 6;
        this.letterGues = []
        this.letterRight =0;
    }
    checkLetter(letter,word){
        let cLetter = letter // when placed in other class letter will be an arugument 
        let myL = ''
        if(!isNaN(Number(cLetter))) { // Checking if word is a number
            this.index = undefined
            this.secondIndex = undefined
            console.log((`This ${cLetter} is not a Valid Letter`))
        } else {
        this.letterGues.push(cLetter)
        console.log("Letters guessed = " + this.letterGues)
            for (let i = 0; i < word.length; i++) {
                if(cLetter === word[i]){
                    this.secondIndex.push(i)
                    this.index =i
                    myL = word[i]
                 console.log("secIndex " + this.secondIndex)
                    this.letterRight++
                //    return  this.index  // if i take out the return here i will get both indexs of dup letters
                // return this.secondIndex
                } 
            }
            if(cLetter === myL){
                return this.secondIndex
            }
            this.secondIndex = []
            this.reamingingMove--
            this.index = undefined
         console.log("My letter"+ myL)
            // this.secondIndex = []
            return this.secondIndex
            console.log("Chance Remaining = "+this.reamingingMove)
            
        }
    }
    cpuWord(){
        let randomWords = ["apple","able", "about", "account", "acid", "across", "addition", "adjustment","applecider","app"];
      
        return randomWords[(Math.floor(Math.random()*10))]
    }
    winOrLose(word){
        if(this.letterRight === word.length){
            console.log("Congrats you Win")
            return true
        } else if(this.reamingingMove === 0 ){
            console.log("Sorry but you failed!!!")
            return true
        }
    }
 
}
module.exports = ComputerPlayer;
{
// class ComputerPlayer {
//     constructor(name = "Robo Bobo") {
//         this.dictionary = allTheWords;
//         this.name = name; 
//         this.guessesMade = new Set();
//     }

//     displayBoard(board) {
//         this.board = board; 
//     }

//     getMove() {
//         let alph = "abcdefghijklmnopqrstuvwxyz";
//         this.dictionary = this.dictionary.filter(word => word.length === this.board.length())
//         let missed = new Set([...this.guessesMade])
//         for(let i = 0; i < this.board.length(); i++) {
//             let char = this.board.get(i)
//             if(char !== "_") {
//                 missed.delete(char);
//                 this.dictionary = this.dictionary.filter(word => word[i] === char);
//             }
//         }

//         missed.forEach(char => {
//             this.dictionary = this.dictionary.filter(word => !word.includes(char))
//         })

//         let lettersCount = {}
//         this.dictionary.forEach(word => {
//             for(let char of word) {
//                 lettersCount[char] ? lettersCount[char]++ : lettersCount[char] = 1;
//             }
//         })

//         let max = 0; 
//         let guess = null; 

//         for(let char in lettersCount) {
//             if(lettersCount[char] > max && !this.guessesMade.has(char)) {
//                 max = lettersCount[char];
//                 guess = char; 
//             }
//         }

//         while(!guess) {
//             let rand = Math.floor(Math.random() * alph.length);
//             let char = alph[rand];
//             if(!this.guessesMade.has(char)) {
//                 guess = char;
//             }
//         }
//         this.guessesMade.add(guess)
//         return guess; 

//     }

//     chooseSecretWord() {
//         let idx = Math.floor(Math.random() * this.dictionary.length)
//         this.secretWord = this.dictionary[idx];
//         return this.secretWord.length; 
//     }

//     checkGuess(char) {
//         let indicies = [];
//         for(let i = 0 ; i < this.secretWord.length; i++) {
//             if(this.secretWord[i] === char) {
//                 indicies.push(i);
//             }
//         }
//         return indicies
//     }

//     reveal() {
//         return this.secretWord;
//     }
// }

// module.exports = ComputerPlayer;
}

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Board = __webpack_require__(/*! ./board.js */ "./board.js")
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js")
const ComputerPlayer =  __webpack_require__(/*! ./cpu.js */ "./cpu.js")
// const {hangManPics} = require("./hangmanPics.js")

class Game{
    constructor(wordUsed){
        this.wordUsed = wordUsed;
        this.letterused =new HumanPlayer()
        this.board = new Board(wordUsed)
        this.cpu = new ComputerPlayer()
        
    }
    gameOver(){
        return this.cpu.winOrLose(this.wordUsed);
    }
    play(){
       
        let makeBlank = this.board.blankLetters()
        console.log(": "+makeBlank)
        while(!this.gameOver()){
            let letter =this.letterused.getLetter();
            let lIndex = this.cpu.checkLetter(letter,this.wordUsed);
            makeBlank = this.board.blankLetters(letter,lIndex);
            console.log("word: "+makeBlank);  
    }
}
isLetter(input){
    let letter =input
    let lIndex = this.cpu.checkLetter(letter,this.wordUsed)
    let makeBlank = this.board.blankLetters(letter,lIndex)
    console.log("Word: " +this.wordUsed)
    return makeBlank;
}

}


/* harmony default export */ __webpack_exports__["default"] = (Game);

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
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./board.js");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./game.js");
/* harmony import */ var _words_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words.js */ "./words.js");
/* harmony import */ var _words_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_words_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cpu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cpu.js */ "./cpu.js");
/* harmony import */ var _cpu_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cpu_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view.js */ "./view.js");







document.addEventListener("DOMContentLoaded",()=>{
    let cpuPlay = new _cpu_js__WEBPACK_IMPORTED_MODULE_4___default.a()
    let game = new _game_js__WEBPACK_IMPORTED_MODULE_2__["default"](cpuPlay.cpuWord())
    let el = document.querySelector("#gameDiv")
    new _view_js__WEBPACK_IMPORTED_MODULE_5__["default"](game,el)
})

/***/ }),

/***/ "./rickManPics.js":
/*!************************!*\
  !*** ./rickManPics.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

let img = document.createElement("img")
const rickManPics = [
   img.src="./rickManPics/Rick%206.png", 
   img.src = "./rickManPics/rick%205.png",
   img.src = "./rickManPics/rick%204.png",
   img.src = "./rickManPics/rick%203.png",
   img.src = "./rickManPics/rick%202.png",
   img.src = "./rickManPics/rick%201.png",
   img.src = "https://media0.giphy.com/media/l0nR1C4LomifC/source.gif"
  ];
  
  
  module.exports = { rickManPics }

/***/ }),

/***/ "./view.js":
/*!*****************!*\
  !*** ./view.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const {rickManPics} = __webpack_require__(/*! ./rickManPics.js */ "./rickManPics.js")
class view{
    constructor(game, el){
        this.game = game;
        this.el = el
        this.play();
        
    }
    play(){
    
        if(this.game.gameOver()){
            let h1 = document.querySelector("heading");
            let img = document.createElement("img")
            img.src = "https://media3.giphy.com/media/35nU79vBbeOm4/source.gif"
            h1.innerText = "You won!!!!! "
            let input = document.querySelector("input")
              let button = document.querySelector("button")
              this.el.removeChild(input)
              this.el.removeChild(button)
         } else {
             this.displayBoard();
             this.check();
         }
           
            
        }
    check(){
        let button = document.querySelector("#checkBtn")
        let input = document.querySelector("#letter")
        let h1 = document.querySelector("#blanks")
        let heading = document.querySelector("#heading")
        let p = document.createElement("p")
        let img = document.createElement("img")
        img.id = "img"
        let div = document.querySelector("#board")
        img.src = "https://media0.giphy.com/media/l0nR1C4LomifC/source.gif"

        button.addEventListener("click", () => {
            console.log(input.value)
            this.game.cpu.secondIndex =[]
            h1.innerText = this.game.isLetter(input.value)
            p.innerText = "Letters Guessed: " + this.game.cpu.letterGues
            input.value = ""
            this.GameDone();
            
           img.src = rickManPics[this.game.cpu.reamingingMove]
        })
        div.appendChild(img)
        this.el.appendChild(h1)
        this.el.appendChild(p)
        this.el.appendChild(div)
    }

    displayBoard(){
        let makeBlank = this.game.board.blankLetters()
        let h1 = document.createElement("h1")
        h1.id = "blanks"
        h1.innerText = makeBlank
        this.el.appendChild(h1);
        
    }
    GameDone(){
        let input = document.querySelector("#letter")   
        let img = document.querySelector("#img")   
        if(this.game.cpu.reamingingMove <= 0){
            heading.innerText = "YOU LOSE!!!"
            input.disabled = true;
          }else if(this.game.cpu.letterRight === this.game.wordUsed.length){
            heading.innerText = "Win!!!!!!!"
            input.disabled = true;
            img.src = "https://media0.giphy.com/media/l0nR1C4LomifC/source.gif"
          }
        
    }

}

/* harmony default export */ __webpack_exports__["default"] = (view);

/***/ }),

/***/ "./words.js":
/*!******************!*\
  !*** ./words.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

let allTheWords = [
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
    "hello",
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
  
  module.exports = { allTheWords };

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map