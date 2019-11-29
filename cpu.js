
class ComputerPlayer {
    constructor(){
        this.index = undefined
        this.secondIndex = []
        this.reamingingMove = 6;
        this.letterGues = []
        this.letterRight =0;
    }
    checkLetter(letter,word){
        let cLetter = letter // when placed in other class letter will be an arugument 
        let myL = ''
        if(!isNaN(Number(cLetter))) { // Checking if word is a number
            this.index = undefined
            this.secondIndex = undefined
            console.log((`This ${cLetter} is not a Valid Letter`))
        } else {
        this.letterGues.push(cLetter)
        console.log("Letters guessed = " + this.letterGues)
            for (let i = 0; i < word.length; i++) {
                if(cLetter === word[i]){
                    this.secondIndex.push(i)
                    this.index =i
                    myL = word[i]
                 console.log("secIndex " + this.secondIndex)
                    this.letterRight++
                //    return  this.index  // if i take out the return here i will get both indexs of dup letters
                // return this.secondIndex
                } 
            }
            if(cLetter === myL){
                return this.secondIndex
            }
            this.secondIndex = []
            this.reamingingMove--
            this.index = undefined
         console.log("My letter"+ myL)
            // this.secondIndex = []
            return this.secondIndex
            console.log("Chance Remaining = "+this.reamingingMove)
            
        }
    }
    cpuWord(){
        let randomWords = ["apple","able", "about", "account", "acid", "across", "addition", "adjustment","applecider","app"];
      
        return randomWords[(Math.floor(Math.random()*10))]
    }
    winOrLose(word){
        if(this.letterRight === word.length){
            console.log("Congrats you Win")
            return true
        } else if(this.reamingingMove === 0 ){
            console.log("Sorry but you failed!!!")
            return true
        }
    }
 
}
module.exports = ComputerPlayer;
{
// class ComputerPlayer {
//     constructor(name = "Robo Bobo") {
//         this.dictionary = allTheWords;
//         this.name = name; 
//         this.guessesMade = new Set();
//     }

//     displayBoard(board) {
//         this.board = board; 
//     }

//     getMove() {
//         let alph = "abcdefghijklmnopqrstuvwxyz";
//         this.dictionary = this.dictionary.filter(word => word.length === this.board.length())
//         let missed = new Set([...this.guessesMade])
//         for(let i = 0; i < this.board.length(); i++) {
//             let char = this.board.get(i)
//             if(char !== "_") {
//                 missed.delete(char);
//                 this.dictionary = this.dictionary.filter(word => word[i] === char);
//             }
//         }

//         missed.forEach(char => {
//             this.dictionary = this.dictionary.filter(word => !word.includes(char))
//         })

//         let lettersCount = {}
//         this.dictionary.forEach(word => {
//             for(let char of word) {
//                 lettersCount[char] ? lettersCount[char]++ : lettersCount[char] = 1;
//             }
//         })

//         let max = 0; 
//         let guess = null; 

//         for(let char in lettersCount) {
//             if(lettersCount[char] > max && !this.guessesMade.has(char)) {
//                 max = lettersCount[char];
//                 guess = char; 
//             }
//         }

//         while(!guess) {
//             let rand = Math.floor(Math.random() * alph.length);
//             let char = alph[rand];
//             if(!this.guessesMade.has(char)) {
//                 guess = char;
//             }
//         }
//         this.guessesMade.add(guess)
//         return guess; 

//     }

//     chooseSecretWord() {
//         let idx = Math.floor(Math.random() * this.dictionary.length)
//         this.secretWord = this.dictionary[idx];
//         return this.secretWord.length; 
//     }

//     checkGuess(char) {
//         let indicies = [];
//         for(let i = 0 ; i < this.secretWord.length; i++) {
//             if(this.secretWord[i] === char) {
//                 indicies.push(i);
//             }
//         }
//         return indicies
//     }

//     reveal() {
//         return this.secretWord;
//     }
// }

// module.exports = ComputerPlayer;
}