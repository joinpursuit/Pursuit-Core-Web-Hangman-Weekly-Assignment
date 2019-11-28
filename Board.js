class Board {
    constructor(length, game, el) {
        this.board = new Array(length).fill("_");
        this.play()
        this.game = game.isValidGuess();
        this.el =el;
    }

    length() {
        return this.board.length;
    }

    get(idx) {
        return this.board[idx];
    }
    isComplete() {
        return this.board.every(el => el !== "_");
    }

    addChar(indicies, char) {
        for(let i of indicies) {
            this.board[i] = char; 
        }
    }
}

module.exports =Board; 