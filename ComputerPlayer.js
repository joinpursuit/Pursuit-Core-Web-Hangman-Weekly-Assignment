const {dictionary} = require("./Dictionary.js")

  class ComputerPlayer {
    constructor (ComputerPlayer) {
      this.ComputerPlayer = ComputerPlayer;
      this.secretWord = dictionary[(Math.floor(Math.random()* dictionary.length))];
  }

  secretWordLength() { return this.secretWord.length}

  reveal() {
     return this.secretWord 
  }


}

module.exports = ComputerPlayer;

// let comp = new ComputerPlayer('robot')
// console.log(comp.secretWord)


// let Con = new ComputerPlayer("Alex")
// console.log(Con.secretWord)
// console.log(Con.reveal())


