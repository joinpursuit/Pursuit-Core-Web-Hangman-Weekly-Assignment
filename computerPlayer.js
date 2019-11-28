// 3. ComputerPlayer 
//   * Should have a dictionary.
//   * Should have secretWord and return it's length. 
//   * Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 
const { dictionary : words } = require("./words.js")


class ComputerPlayer {
  constructor(computerPlayer, name) {
    this.computerPlayer = computerPlayer;
    this.dictionary = words;
      this.name = name; 
      this.guessesTried = [];
  }

  displayBoard(board) {
      this.board = board; 
  }

  getMove() {
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      this.dictionary = this.dictionary.filter(word => {
        if(words.length === this.board.length()){
      let wrong = []
        }
      wrong.push(this.guessesTried);
      for(let i = 0; i < this.board.length(); i++) {
          let char = this.board[i];
          if(char === "_") {
              wrong.push(char);
              this.dictionary = this.dictionary.filter(word => word[i] === char);
          }
      }
    })
    
    //   wrong.forEach(char => {
    //       this.dictionary = this.dictionary.filter(word => {
    //           if(!words.includes(char)){
    //               return words.delete(char)
    //         }
    //     })
    // })
      this.dictionary.forEach(word => {
        let letterCount = {}
          for(let char of word) {
              if(letterCount[char]) {
                  letterCount[char]++ 
                } else {
                  letterCount[char] = 1;
                }
          }
          return letterCount;
      })

      
      for(let char in letterCount){
          let max = 0; 
          if(max[char] > max && !this.guessesTried.includes(char)) {
              max[char] += 1;
          } else {
              char = 1
          }
          return max
      }

      while(!guess) {
          let randomIdx = Math.floor(Math.random() * alphabet.length);
          let char = alphabet[randomIdx];
          if(!(this.guessesTried.includes(char))) {
              return this.displayBoard;
          }
          return guess; 
      }

    }
  chooseSecretWord() {
      let idx = Math.floor(Math.randomIdx() * this.dictionary.length)
      if (this.secretWord = this.dictionary[idx]){
          return this.secretWord.length; 
    }
}
checkGuess(char) {
    let result = [];
    for(let i = 0 ; i < this.secretWord.length; i++) {
        if(this.secretWord[i] === char) {
            result.push(char);
        }
    }
    return result
}

reveal() {
    this.secretWord;
}

}

    
    export default ComputerPlayer;