//CSS Accepted Color hangman

//_________
//Breaking down the assignment:
//the user should be able to start the game off?
//the computer has to pull a random word from the array
//the word has to appear on the screen as underscores
//you need the user to enter a guess in a text field
//the user needs to be able to submit said guess in a button
//it has to acknowlege if it's 1 letter or not
  //if not, prompt to guess with just 1 letter (1 character of string type?)
  //if so, if letter is in word then equivalent letter appears instead of the underscore
  //if so, if letter is not in word:
    //# of guesses remaining goes down
    //letter that's wrong appears in a box of wrong letters guessed?
    //another hangperson image appears to show how far wrong you are
//when all your letters are letters aka no more underscores, the user has won
  //only while there are guesses remaining left
  //if there are still guesses, program should alert that the user has won!
  //if there are no guesses at any point, the game is over
    //either way prompt to restart game
//__________

//i want to set up some variables I think here

let cssColorsBank = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige",
   "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood","CadetBlue",
   "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue",
   "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta",
   "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
   "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
   "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen",
   "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
   "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
   "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
   "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
   "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen",
   "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
   "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
   "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace",
   "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
   "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
   "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
   "SeaGreen", "SeaShell", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey","Snow",
   "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
   "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
 ]

//picking index to get my random color for game
//i'm saying pick an index number from within the number of items in my array
let randomColor = cssColorsBank[Math.floor(Math.random()*cssColorsBank.length)];

//so far i have:
  //my array of colors
  //a var to say i need a random color from my bank

//ok so i am gonna have more array fun with my answer for the round and i need to be able to
  //have blank spaces for the each letter
let currentRoundColor = [];

for (let i = 0; i < randomColor.length; i++) {
  currentRoundColor[i] === "_";   //so where i have my current round's color
                                  //should be my underscores in a magical working code world
}


//model for my 'hangperson' bad colors grid image
// let hangPersonImage = {
  //colorsAllTheGuessesAvail =
  //colorsFiveGuessesLeft =
  //colorsFourGuessesLeft =
  //colorsThreeGuessesLeft =
  //colorsTwoGuessesLeft =
  //colorsOneGuess Left =
  //colorsGameOver =
  //oneFewerTurn: function () {
  //}
// }

//________ZZZZZZ OLD TO BE REMOVED LATER ZZZZ______
// //pull a word for the user
// let currentRoundArtist = artistWordBank[Math.floor(Math.random() * artistWordBank.length)];
// //my user's artist guess
// let userGuess = window.prompt("Guess a letter.");
// //how many incorrect tries
// let numberOfGameGuesses = 6;
//
// //Set Up of Game
//
// //array of blanks to match number of letters in current round's word
// //aka this says you'll have as many underscores as there are letters
// //in the current round's word
// let blanksForUser = [];
// for (let i = 0; i < currentRoundArtist.length; i++) {
//   blanksForUser[i] = "_";
// }
// //after the loop runs how many letters are left?
// let lettersRemaining = currentRoundArtist.length;
//
// while (lettersRemaining > 0 || numberOfGameGuesses > 0) {
//   // window.alert(blanksForUser.join(" ")); //makes alert blanks look cleaner for user
//   if (userGuess.length !== 1) { //guess isn't one character
//       window.alert("Try again with just one letter.");
//     } else if (userGuess.length === 1) { //guess is 1 character
//       userGuess.toLowerCase();
//       for (let j = 0; j < currentRoundArtist.length; j++) {
//         if (currentRoundArtist[j] === userGuess) {
//           blanksForUser[j] = userGuess; //updates underscore with letter
//                       //at same index as in current round word
//           lettersRemaining--;
//         } else if (currentRoundArtist[j] !== userGuess) {
//           numberOfGameGuesses--;
//         }
//       }
//     }
// }
