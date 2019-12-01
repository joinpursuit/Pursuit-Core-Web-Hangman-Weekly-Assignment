class  HumanPlayer{
    constructor(name){
        this.name = name;
    }
    getMove(){
        return ("please Enter a letter: ").toLowerCase()
    }
    displayBoard(){
        let output = " "
        for(let i = 0; i < board.length(); i++){
            output += board.get(i) + " "
        }
        console.log(output)

    }
    secretWord(){
        return (this.name + "Enter the length of your Word: ")

    }
    guessChecker(char){
        console.log(char + " was guessed")
        let guess = (" ")
        let result = guess.split(" , ").map(el=>Number(el)-1)
        return result[0] === -1 ? []: result
    }
    reveal(){
         return ("What was your word? ").toLowerCase()
    }

}
module.exports = HumanPlayer;