class HumanPlayer {
    constructor(name){
        this.name = name
    }
    getMove() {
        return readline.question("Please enter a character: ").toLowerCase()
    }
    displayBoard(board){
        let output = ""
        for(let i=0; i < board.length(); i++){
            output += board.get(i) + " "
        }
    console.log(output)
    }
}

export default HumanPlayer

