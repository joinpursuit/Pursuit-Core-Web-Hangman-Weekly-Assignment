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

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const {dictionary} = require('./dictionary.js');  

// class Referee {
//     constructor(referee){
//         this.referee = referee;
//         this.word = dictionary[(Math.floor(Math.random() * dictionary.length))];
//     }

//     secretWordLength(){
//         let secretWord = this.word;
//         return secretWord.length;
//     }

//     reveal(){
//         let revealStr = [];
//         for(let i = 0; i < this.word.length; i++){
//             revealStr.push(this.word[i]);
//         }
//         let currentBoard = revealStr.join(" ");
//         return currentBoard;
//     }  
// }

// export default Referee;


/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./Board.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Board_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1__);




class Game {
    constructor(player) {
        this.player = player;
        this.computer = new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a();
        this.guessesRemaining = 6; 
        this.guessedLetters = new set();
    }
    play() {
        let boardLength = this.ref.chooseSecretWord()
        this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0___default.a(boardLength);
        while(!this.isGameOver()) {
            console.log(hangManPics[this.guessesRemaining])
          
        
            this.guesser.displayBoard(this.board);
            this.ref.displayBoard(this.board);
            let guess = "0"; 
            while(!this.isValidGuess(guess)) {
                guess = this.guesser.getMove();
                if(!this.isValidGuess(guess)) {
                    console.log("INVALID GUESS!")
                }
            }
            this.guessedLetters.push(guess)
            let positions = this.ref.checkGuess(guess);
            if(positions.length === 0) {
                this.guessesRemaining--;
            }
            this.board.addChar(positions, guess);
        }
        if(this.guessesRemaining > 0) {
            console.log(this.guesser.name + " wins!")
        } else {
            let winningWord = this.ref.reveal();
            console.log("word was " + winningWord)
            console.log(this.ref.name + " wins!")
        }

    }
    isValidGuess(char) {
        let alph = "abcdefghijklmnopqrstuvwxyz";
        return char.length === 1 && alph.includes(char) && 
        !this.guessedLetters.includes(char);
    }
    isGameOver() {
       return  this.board.isComplete() || this.guessesRemaining === 0;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./humanPlayer.js":
/*!************************!*\
  !*** ./humanPlayer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class HumanPlayer {
    constructor(name){
        this.name = name;
    }
    guessLetter() {
        return readline.question("Choose a letter: ");
    }
}

/* harmony default export */ __webpack_exports__["default"] = (HumanPlayer); 

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _humanPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humanPlayer.js */ "./humanPlayer.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./game.js");



  

// import Game from "./game.js"
// import View from "./View.js"

document.addEventListener("DOMContentLoaded",()=>{
    let button = document.createElement("button")
    button.innerText = "Let's Play!"
    document.body.appendChild(button)
    
    button.addEventListener("click",()=>{
        document.body.removeChild(button)
        let newGame = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"](new _humanPlayer_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
        let el = document.querySelector("#game")
        
        new View(newGame, el)

    })
})

// export default Game;



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map