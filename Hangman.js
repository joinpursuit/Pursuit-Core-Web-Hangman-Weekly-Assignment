//creating an addeventlistener to start the game with a randomized word
document.addEventListener("DOMContentLoaded", () => {
    console.log("triggered")
        let startGameForm = document.querySelector("#start_game");
        let startGameFormValue = document.querySelector("#start_game").innerText;
        let startButton = document.querySelector("#playerClick")
        console.dir(startGameForm)   
        
        startGameForm.addEventListener("submit", (event) => {
            event.preventDefault();  
                // Create an array of words
                let meanGirlWords = ["fetch", "social suicide", "word vomit", "grool", "pink", "toaster strudel" ];
                // Pick a random word
                // console.log(meanGirlWords + "words")
                let meanGirlWord = meanGirlWords[Math.floor(Math.random() * meanGirlWords.length)];
                // console.log("meanGirlWord")
                // Set up the answer array
                let replacingWordWithUnderscore = []; 
                const playTheGame = () => {
                    console.log("triggereddddd") 
                for (let i = 0; i < meanGirlWord.length; i++) {
                    replacingWordWithUnderscore[i] = "_";
                    // console.log("play the game" + playTheGame())
            }  
                console.log("replacingWordWithUnderscore", replacingWordWithUnderscore)                    
        } 
        // let playTheGameVar = playTheGame()
        // console.log(playTheGameVar + "playTheGameVar")
        let paragraphOne = document.createElement("p")
        paragraphOne.innerText = playTheGame()
        console.dir(paragraphOne)
        // paragraphOne.appendChild(displayMeanGirlWord);
        document.body.appendChild(paragraphOne)              
    })
})

// creating an addeventlistener to create a way for the player to react to the game by entering a letter
document.addEventListener("DOMContentLoaded", () => {
    let enterALetterForm = document.querySelector("#enter_letter");
    let enterLetterButton = document.querySelector("#userEnterLetterClick")

    enterALetterForm.addEventListener("submit", (event) => {
        //creating a variable for the length of words.
        let remainingLetters = meanGirlWord.length;
        const addNewLetter = () => {
            // the game loop
            while (remainingLetters > 0) {
            // Show the player their progress
            let paragraphTwo = document.createElement("p")
            replacingWordWithUnderscore.join(" ")
            document.body.appendChild("paragraghTwo")
            }
        }
    })    
})     
                
//                 // The game loop
//                 while (remainingLetters > 0) {
//                 // Show the player their progress
//                 alert(replacingWordWithUnderscore.join(" "));
//                 // Get a guess from the player
//                 let guess = prompt("Guess a letter, or click Cancel to stop playing.");
//                 if (guess === null) {
//                 // Exit the game loop
//                     break;
//                     } else if (guess.length !== 1) {
//                     alert("Please enter a single letter.");
//                         } else {
//                 // Update the game state with the guess
//                 for (var j = 0; j < meanGirlWord.length; j++) {
//                     if (meanGirlWord[j] === guess) {
//                         replacingWordWithUnderscore[j] = guess;
//                         remainingLetters--;
//                 }
//             }
//         }
    //             // The end of the game loop
    // }
    //             // Show the answer and congratulate the player
    //             alert(replacingWordWithUnderscore.join(" "));
    //             alert("Good job! The answer was " + word);








    // var x = document.createElement("P");                        // Create a <p> node
    // var t = document.createTextNode("This is a paragraph.");    // Create a text node
    // x.appendChild(t);                                           // Append the text to <p>
    // document.body.appendChild(x);