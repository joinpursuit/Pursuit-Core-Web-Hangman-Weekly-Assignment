// * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies.
// const ComputerPlayer = require("./ComputerPlayer.js")


class Board {
    constructor(length) {
        this.board = new Array(length).fill("_");
    }
    length() {
        return this.board.length
    }
    isBoardComplete() {
        return this.board.every(el => el !== "_")
    }
    
}

