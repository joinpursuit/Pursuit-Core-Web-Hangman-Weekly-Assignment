
// * Will need to getMove from player. 
//   * Display the board. 
//   * Possibly a select secret word that returns the length. 
//   * Possibly a givePostioins that returns an array of indicies. 
//   * Possibly a reveal word. 
const readline = require('readline-sync')

class HumanPlayer {
    constructor(name) {
        this.name = name
        this.letter = letter
        
    }
    getLetter() {
        this.letter = readline.question("ENTER A LETTER ")
        return this.letter
    }
    displayBoard(board) {
    let output = "";
    for (let i = 0; i < board.length(); i++) {
      output += board[i] + " ";
    }
    console.log(output);
    }

}
// let brandon = new HumanPlayer("Brandon")
// console.log(getLetter())


