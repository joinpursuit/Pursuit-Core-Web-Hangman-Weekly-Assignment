class ComputerPlayer{
    constructor(name) {
        this.name = name
    }
    createGuess(){
        let guess = readline.question("What is your guess?")
        guess.toLowerCase()
        return guess
    }
}
export default ComputerPlayer