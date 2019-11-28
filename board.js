class Board {
    constructor(length) {
        this.board = new Array(length).fill("_");
    }

    length() {
        return this.board.length;
    }

    findIndex(idx) {
        return this.board[idx];
    }
    isComplete() {
        return this.board.every(el => el !== "_");
    }

    addChar() {
        let charAdded = ""
        for(let char of this.board) {
          if(charAdded[char]){
              charAdded += char
          } 
        }
        return charAdded;
    }
}

export default Board;