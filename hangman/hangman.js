//CSS Accepted Color hangman
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
