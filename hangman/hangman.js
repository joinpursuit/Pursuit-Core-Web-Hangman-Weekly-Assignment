document.addEventListener("DOMContentLoaded", () => {

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
   ];

  let randomColor = cssColorsBank[Math.floor(Math.random()*cssColorsBank.length)];

  let currentRoundColor = [];

  for (let i = 0; i < randomColor.length; i++) {
      currentRoundColor[i] === "_";
      document.getElementById("blanks").innerText = currentRoundColor;
    }

  let userGuess = document.createElement("input");
  userGuess.type="text";
  userGuess.placeholder="Enter a letter guess";
  document.body.appendChild(userGuess);

  let submitButton = document.createElement("button");
  submitButton.type="button";
  submitButton.placeholder="Submit";
  document.body.appendChild(submitButton);

  let numberOfWrongGuessesAllowed = 5;

  let lettersRemaining = randomColor.length;

  submitButton.addEventListener("click", makeAGuess);
  function makeAGuess() {
    if (userGuess.length !== 1) {
    window.alert("Just enter one letter!");
  } else if (userGuess.length === 1) {
    for (let j = 0; j < currentRoundColor.length; j++) {
      if (randomColor[j] === userGuess) {
        currentRoundColor[j] === userGuess;
        lettersRemaining--;
      } else if (randomColor[j] !== userGuess) {
        numberOfWrongGuessesAllowed--;
      }
    }
  }
}

})

//_________
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
