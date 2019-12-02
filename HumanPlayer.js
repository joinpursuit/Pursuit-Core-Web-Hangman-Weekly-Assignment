
class HumanPlayer {
    constructor(name) {
        this.name = name; 
    }
     getMove() {
        let userGuess = readline.question("Please Enter A Letter: ");
        return userGuess.toLowerCase();
    }
}
//export default HumanPlayer;
module.exports = HumanPlayer;
