class HumanPlayer {
    constructor(name){
        this.name = name;
    }
    guessLetter() {
        return readline.question("Choose a letter: ");
    }
}

export default HumanPlayer; 