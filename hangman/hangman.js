// document.addEventListener("DOMContentLoaded", () => {
//
// })

//variables

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
     "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen" ];

  let numberOfWrongGuessesAllowed = 5;

  let randomColor = cssColorsBank[Math.floor(Math.random()*cssColorsBank.length)];

  let lettersRemaining = randomColor.length;

//functions

  function pullRandomWord() {

    for (let i = 0; i < randomColor.length; i++) {
      let currentRoundColor = [];
      // currentRoundColor[i] === "_";
      currentRoundColor.push("_");
      document.getElementById("blanksForRandomWord").innerText = currentRoundColor;
    }

      let blanksSection = document.querySelector("form");

      let userGuess = document.createElement("input");
      userGuess.setAttribute("type", "text");
      userGuess.setAttribute("placeholder", "Enter a letter");
      blanksSection.appendChild(userGuess);

      let submitButton = document.createElement("button");
      submitButton.setAttribute("type", "button");
      submitButton.setAttribute("placeholder", "Submit");
      // submitButton.attachEvent("onclick", handleAGuess);
      submitButton.setAttribute("onclick", handleAGuess);
      blanksSection.appendChild(submitButton);
  }

  function handleAGuess() {

    if (userGuess.length === 1) {
      for (let j = 0; j < currentRoundColor.length; j++) {
        if (randomColor[j] === userGuess) {
          currentRoundColor[j] === userGuess;
          lettersRemaining--;
        } else if (randomColor[j] !== userGuess) {
          numberOfWrongGuessesAllowed--;
        }
        else if (userGuess.length !== 1) {
            window.alert("Just enter one letter!");
    }
  }
}

}
