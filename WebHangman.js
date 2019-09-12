//Game Setup: Loads the random word and matching hiddenword, defines variables, and grabs DOM elements
document.addEventListener('DOMContentLoaded', () => {

  let words = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"];
  let gameStatus = document.querySelector('#game-status')
  
  let myHiddenWord = document.querySelector('#hiddenword')
  let myForm = document.querySelector('#myForm')

  let numberOfGuesses = document.querySelector('#guess-counter')
  numberOfGuesses.innerText = '6 guesses left'
  let tries = 6
  
  // get a random word from the words array
   let randomWord = getRandomWord(words);

   //create hiddenword, ie replace char with underscores
   let hiddenWord = createHiddenWord(randomWord);
   myHiddenWord.innerText = hiddenWord

   console.log(hiddenWord)
   console.log(randomWord)
   
   //create usedLetters array
   usedLetters = []
  
  // Gameplay: after each click functions run to check letter and change DOM accordingly

  myForm.addEventListener('submit',(event)=> {

    event.preventDefault();
    let letterInput = document.querySelector('#letterinput').value.toLowerCase()
    let letterGuessed = document.querySelector('#guess-letters')

    let rightArmOfExodia = document.querySelector('#rightarm')
    let leftArmOfExodia = document.querySelector('#leftarm')
    let leftLegOfExodia = document.querySelector('#leftleg')
    let rightLegOfExodia = document.querySelector('#rightleg')
    let headOfExodia = document.querySelector('#head')

    let arrayOfExodia = []

    // check if letterguess is in hiddenword

       //makes sure input is valid like salad
     if (letterInput === '' || letterInput.length !== 1 || letterInput > -Infinity){
      gameStatus.innerText= 'Not a valid guess';
      document.getElementById('myForm').reset()

      //replace innerText
    } else if (isLetterInWord(letterInput, randomWord, hiddenWord)){
      hiddenWord = replaceMatches(letterInput, randomWord, hiddenWord)
      myHiddenWord.innerText= hiddenWord
      gameStatus.innerText = 'Correct Guess'
      document.getElementById('myForm').reset()
      usedLetters.push(letterInput)


        // if no: lose a life
    } else if(!isLetterInWord(letterInput, randomWord, hiddenWord)){
      gameStatus.innerText = 'Incorrect guess'
      tries = tries -1 
      usedLetters.push(letterInput)
      numberOfGuesses.innerText = tries + ' guesses/guess left'
      document.getElementById('myForm').reset()
    }
    
    letterGuessed.innerText = usedLetters
    console.log(usedLetters)

    // We're in the end game now
    if (tries === 0){
      gameStatus.innerText = `EXODIAAAAAAAAAAAA. The word you were looking for was: ${randomWord}`
      window.alert('Game over, you lose')
      document.getElementById('myForm').reset()
      // location = location

    } else if (hiddenWord.join('') === randomWord){
      gameStatus.innerText = `Congrats you found the hidden word .....  ${randomWord} `
      usedLetters.push(letterInput)
      document.getElementById('myForm').reset()
      window.alert("You won!!!!")
      myHiddenWord.innerText = hiddenWord.join('')
    }
  })   
   //PUT REFRESH FUNCTION BUTTON OUTSIDE SUBMIT EVENT
})

// Defining functions 
 
  const newGame = () => location = location

  const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };
  
    const createHiddenWord = (word) => {
      let hiddenWord = word.split('').map(char => {return '___ '});
      return hiddenWord;
    }
    
    const isLetterInWord = (letter,randomWord) => {
      return randomWord.includes(letter)
    }
    
    const replaceMatches = (letterInput, randomWord, hiddenWord) => {
      for (let i = 0; i < randomWord.length; i++){
        let crrChar = randomWord[i]
        if (crrChar === letterInput){
          hiddenWord[i] = letterInput;
        }
      }
      return hiddenWord;
  }
        //Summary//

        // check if letterguess is in hiddenword

        //if wrong subtract one from guess and replace numberofGuesses: if right do nothing 
        
        //replace gamestatus text
        
        //change hidden word character

        // add to the guess letters text

        //when guesses run out change gamestatus text to defeat

        //when hiddenword === randomWord change gamestatus to victory and numberofguesses === 0

        //when numberofguesses === 0 unhide new game button
      
      
        

