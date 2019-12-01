class Board {
    constructor(length){
        this.board = new Array(length).fill(" _ ")
    }
    length(){
        return this.board.length;
    }
    get(idx){
        return this.board[idx]
    }
    isComplete(){
        return this.board.every(el=> el !== " _ ")
    }
    addChar(indices, char){
        for(let i of indices){
            this.board[i] = char
        }
    }
}
module.exports = Board;