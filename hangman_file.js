document.addEventListener("DOMContentLoaded", () => {
  let guessRemaining = document.querySelector("#guess_remaining")
  let correctOrIncorrect= document.querySelector("#letter")
  correctOrIncorrect.innterText = "Pick A Letter"
  let hiddenWord = document.querySelector("#hiddenWord")
  // hiddenWord.innerText = newArray.join("")
  let form = document.querySelector("form")
  let submit= document.querySelector("#submit")
  let input = document.querySelector("#textbox")
   input.innerText = `letter`

  let words= ['bubble', 'button', 'car']
  let word = words[Math.floor(Math.random() * words.length)];
  let newArray = [];
  let remainingTries= 6;
  // let counter = 0;
  for (let i = 0; i < word.length; i++)  {
   newArray[i] = "_";

 }
   hiddenWord.innerText = newArray.join(" ")
//  let guessRemaining = document.querySelector("#guess_remaining")
//  let correctOrIncorrect= document.querySelector("#letter")
// correctOrIncorrect.innterText = "Pick A Letter"
//  let hiddenWord = document.querySelector("#hiddenWord")
// // hiddenWord.innerText = newArray.join("")
//  let form = document.querySelector("form")
//  let submit= document.querySelector("#submit")
//  let input = document.querySelector("#textbox")
//   input.innerText = `letter`
form.addEventListener("submit",()=>{
  event.preventDefault()
console.log(input.value)
  // let guessRemaining = document.querySelector("#guess_remaining")
  // let hiddenWord = document.querySelector("#hiddenWord")
  // hiddenWord.innerText = newArray.join(" ")
  correctOrIncorrect.innerText = "Pick A Letter"
  let form= document.querySelector("form")


for(let i=0 ; i< word.length; i++){
    if (input[i]=== word[i]){
        newArray[i] = input.value
        hiddenWord.innerText = newArray.join("")
        correctOrIncorrect.innerText= `Pick another letter ${remainingTries}`
      }else{
        remainingTries --;
        correctOrIncorrect.innterText =  ` You have ${remainingTries} left`
        if(remainingTries === 0);{
          newArray[i] = input.value
          correctOrIncorrect.innerText="You Lose"
          hiddenWord.innerText = `The word was : ${word}.`

}
}

}
})

})
