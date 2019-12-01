class Board {
    constructor(length){
        this.board = new Array(length).fill("_")
    }
    isComplete(){
        return this.board.every(el => el !== "_")
    }
    addLetter(indicies, letter){
        for (let i of indicies){
            this.board[i] = letter
        }
    }
    length(){
    return this.board.length
    }
    get(idx) {
    return this.board[idx]
    }
}

export default Board;

