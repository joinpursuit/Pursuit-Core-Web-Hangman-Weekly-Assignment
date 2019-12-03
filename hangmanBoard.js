class Board {
    constructor(length){
        this.board = new Array(length).fill(" ")
    }
    boardDisclosure(){
        return this.board.every(el => el !== " ")
    }
    addLetter(secretWordIndices, letter){
        for (let i of secretWordIndices){
            this.board[i] = letter
        }
    }
}

export default Board;

