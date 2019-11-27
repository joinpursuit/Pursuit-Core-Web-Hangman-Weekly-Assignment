// HumanPlayer 
// * Will need to getMove from player. 
// * Display the board. 
// * Possibly a select secret word that returns the length. 
// * Possibly a give Positions that returns an array of indices. 
// * Possibly a reveal word.  

class HumanPlayer {
    constructor(name) {
        this.name = name; 
    }
    getMove() {
        let userGuess = readline.question("Please Enter A Letter: ");
        return userGuess.toLowerCase();
    }
}
module.exports = HumanPlayer;