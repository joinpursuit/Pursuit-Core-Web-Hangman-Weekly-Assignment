

document.addEventListener("DOMContentLoaded", () => {
   



const setup = ()=>{

    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    lives = 5;
    words = ["cat", "dog", "cow"];


    currentWord = words[Math.floor(Math.random() * words.length)];

   document.querySelector("#letters").innerText = currentWord;

}
   
setup()   
    document.getElementById('hangman').onsubmit = setup()

const play=()=>{
     let lives = 1
     let letterMorgue =[]
    let zero = currentWord[0]
    let one = currentWord[1]
    let two = currentWord[2]
// let blankArr = zero + one + two

let arrayzero = document.querySelector("#arrayzero")
arrayzero.innerText = zero;

let arrayone = document.querySelector("#arrayone")
arrayone.innerText = one;

let arraytwo = document.querySelector("#arraytwo")
arraytwo.innerText = two;

let score = document.querySelector("#score")
score.innerText = lives;
// if (lives>2){
//     alert("game over")
// }



document.querySelector("#roundletter").addEventListener("click", guessFunction);
function guessFunction() {
    if(document.querySelector("#letterin").value === zero){
        document.getElementById("arrayzero").id = "correctzero"
        }else if(document.querySelector("#letterin").value === one){
                document.getElementById("arrayone").id = "correctone"
                    } else if (document.querySelector("#letterin").value === two){
                         document.getElementById("arraytwo").id = "correcttwo"
                              }else if (document.querySelector("#letterin").value !== (zero||one||two)){
                                   document.querySelector("#score").innerText = letterMorgue.push(document.querySelector("#letterin").value )    
                                    }
                             if (document.querySelector("#score").innerText>5){
                                alert("Game over! Click on Start to Play Again")
                            } else if (correctzero && correctone && correcttwo){
                                document.querySelector("#beforeWin").id = "afterWin" && ( document.querySelector("#letters").innerText = "Congratolations You Win!!!!!!!")
                            }
                      
              }





}
          
 play()












})
