document.addEventListener('DOMContentLoaded', () =>{
   let gameBank = ['overwatch','mario','diablo','rage']
   function pick (arr){
      arr[Math.floor((Math.random() * arr.length))]
  }
   // wanted all variable here but idk
   var hidden = pick(gameBank)
   var cInput = [];
   var wInput = [];
   var cumulative = [];
   var tries = 6
   var remaining = hidden.length
   
   var progress = document.createElement('p')
   progress.innerText = cInput.join(" ") //Never really felt comfortable using this

   var regress = document.createElement('p')
   regress.innerText = (`only ${tries} guesses left`)
   

//Losing condition
function lCondition () { 
   window.alert (`You lost, the word was ${hidden}`)
}
for (i = 0; i = hidden.length; i++) {
   cInput[i] = "_"
}
 
})