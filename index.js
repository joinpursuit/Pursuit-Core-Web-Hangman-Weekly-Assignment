document.addEventListener("DOMContentLoaded",()=>{
let allTheWords = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let ctx = document.querySelector("canvas").getContext('2d');
let hang = new Image();
hang.src = "https://ecdn.teacherspayteachers.com/thumbitem/Fitness-and-Skill-Themed-Hangman-for-Physical-Education-Elementary-3541348-1563532532/original-3541348-2.jpg";
let posx = 0;
let posy = 0;
ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);


let answer = allTheWords[Math.floor(Math.random() * allTheWords.length)]
let correctGuess = []
for(let i = 0; i < answer.length;i++){
  correctGuess[i] = "_ ";
}
let guesses = []
let tries = 0;
let lives = 11;
let remain = document.querySelector("#remain")
let status = document.querySelector("#status")
let guess = document.querySelector("#guess")
let word = document.querySelector("#word")
let form = document.querySelector("form")
word.innerText = correctGuess.join("")
guess.innerText = "Guessed letters : " + guesses.join(",")
remain.innerText = `You have ${lives} guesses remaining.`
status.innerText = "Welcome to Hangman"


form.addEventListener("submit",(evt)=>{
  let remain = document.querySelector("#remain")
  let status = document.querySelector("#status")
  let guess = document.querySelector("#guess")
  let word = document.querySelector("#word")
  let input = document.querySelector('input')
  tries++
    evt.preventDefault()

    playersGuess = input.value
    input.value = ""

      if( playersGuess.toLowerCase() !== playersGuess.toUpperCase()){
    if(guesses.includes(playersGuess)){
      status.innerText = "You already guessed that letter."

    }
    else if (answer.includes(playersGuess)){
      if (answer === playersGuess) {
        correctGuess = playersGuess.split("")
      }
      for(let i = 0; i < correctGuess.length;i++){
        if(playersGuess === answer[i]){
          correctGuess[i] = playersGuess + " "
         status.innerText = "correct guess"

        }
      }
      guesses.push(playersGuess)

    }
    else {
      guesses.push(playersGuess)
      lives--
     status.innerText = "incorrect guess"
     switch(lives){
       case 10:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 9:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 8:
       posx = 0;
       posy += 90;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 7:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 6:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 5:
       posx = 0;
       posy += 90;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 4:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 3:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 2:
       posx = 0;
       posy += 90;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 1:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
       case 0:
       posx += 80;
       ctx.drawImage(hang,posx,posy,80,90,0,0,200,200);
       break;
     }
    }
}

  word.innerText = correctGuess.join("")
  guess.innerText = "Guessed letters : " + guesses.join(", ")
  if(lives === 1){
    remain.innerText = `You have 1 guess remaining.`
  }
  else{
  remain.innerText = `You have ${lives} guesses remaining.`
}

let trim = correctGuess.join("")

  if(lives === 0){
    status.innerText = `You Lose! The answer was ${answer}`
   document.querySelector("#game").style.visibility = "hidden";
  }
  else if(trim.split(/\s+/).join('') === answer){
     status.innerText = `You Win! It took you ${tries} guesses`
     document.querySelector("#game").style.visibility = "hidden";

   }

}) })
