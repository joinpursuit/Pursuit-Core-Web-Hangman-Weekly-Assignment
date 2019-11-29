class Board {
    constructor(word){
        this.word = word
        this.winner = undefined;
        this.blank = new Array(this.word.length).fill("_")
    }
  
     blankLetters(letter,num = []){
        //  this.blank[num] = letter
        //  return (this.blank)
        console.log(num)
        num.forEach(index =>{
            this.blank[index] = letter
        })
        return this.blank
         
     }

   

}

module.exports = Board; 