document.addEventListener('DOMContentLoaded', () =>{
   let gameBank = ['overwatch','mario','diablo','rage']
   function pick (arr){
      arr[Math.floor((Math.random() * arr.length))]
  }
   let hidden = pick(gameBank)
   let rightGuesses = [];
   let wrongGuesses = [];
   let allGuesses = [];
   let guessesLeft = 6
})