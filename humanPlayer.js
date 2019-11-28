

class HumanPlayer {
    constructor(name) {
      this.name = name;
    }
  
    // getMove() {
    //   .toLowerCase();
    // }
  
    displayBoard(board) {
      let output = "";
      for (let i = 0; i < board.length(); i++) {
        output += board[i] + " ";
      }
      return output;
    }

    checkGuess(letter) {
      let result = guess.split(",").map(el => {
          Number((el) - 1);
          if (result[0] === -1){
              result.push(letter);
            } 
        })
        return result
    }
  
    reveal() {
      return secretWord.toLowerCase();
    }
  }
  











export default HumanPlayer;