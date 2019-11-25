class Board {
    constructor(length){
        this.board = new Array(length).fill("_")
    }
    
    addChar(word, letter) {
        for(let i = 0; i < word.length; i++){
            if(word[i] === letter){
                this.board[i] = letter;
            }
        }
    }
    
    isComplete(word){
        if(this.board.join("") === word){
            return true;
        } else {
            return false;
        }
    }

    displayBoard(){
        let currentBoard = this.board.join(" ");
        return currentBoard;
    }

}

export default Board;

 






