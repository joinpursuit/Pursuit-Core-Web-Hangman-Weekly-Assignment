const {dictionary} = require("./Dictionary.js")

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


