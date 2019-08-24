document.addEventListener('DOMContentLoaded', (Event) => {
    //global variables that will be used by the entire program
    let hiddenWord = [];
    let maxTries = 10;
    let rightLetter = [];
    let wrongLetter = [];

    //manipulating the DOM
    let docUnderScore = document.getElementsByClassName("underscores");
    let rightGuess = document.getElementsByClassName('right_letter');
    let wrongGuess = document.getElementsByClassName('wrong_letter');
    let loser = document.getElementsByClassName('lose')
    let remaining = document.getElementsByClassName('remaining')
    let button = document.getElementById('button')
    console.log('button:', button)
    let paragraph = document.getElementsByClassName('win_text')

    let words = ["able", "about", "account", "accident", "acid", "across", "addition", "adjustment", "advertisement", "after", "again",
        "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus",
        "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic",
        "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour",
        "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board",
        "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge",
        "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake",
        "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese",
        "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clergy", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar",
        "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition",
        "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit",
        "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death",
        "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different",
        "digestion", "direction", "dirty", "discovery",
        "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust",
        "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite",
        "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young", "yolk", "yves", "xylophone", "x-ray", "xerox", "xysts", "zebra", "zero", "zoo", "zooplankton", "zoom", "zombie", "zenith", "zircon", "zanzibar", "zeitgeist", "zeppelins",
    ]
    // let words = ['x-ray', 'zenith', 'camper', 'zumba', 'protectrix', 'zanzibar',
    //     'zooplankton', 'zacariah', 'oman', 'clergy', 'bavaria', 'holstein', 'schwein', 'rot', 'neu'
    // ]
    // this function generates a random word using words from a array of words
    const randomGen = (arr) => {
        let wordGenerator = arr[Math.floor(Math.random() * words.length)];
        let ranWordSplit = wordGenerator.split('');
        console.log(ranWordSplit, "the split word")
        return ranWordSplit
    }

    //this function creates an array of underscores based on the length of the random word
    const underScore = (word) => {
        for (let i = 0; i < word.length; i++) {
            hiddenWord[i] = "_";
        }
        return hiddenWord
    }

    function checkRightLetter(userInput) {
        if (!rightLetter.includes(userInput)) {
            rightLetter.push(userInput)
        }
    }

    /* 
    assigning a variable with the random word generated by the function call
    the variable hideWord will equal the call of the underscore function
     */
    let randWord = randomGen(words);
    let hideWord = underScore(randWord);

    //checks to see if the character entered is inside of the randomly generated word
    function validity(arg1, arg2) {
        //pre-assigning element with value to be changed later
        docUnderScore[0].innerHTML = arg2.join(' ')
        remaining[0].innerHTML = `You have ${maxTries} lives remaining`
        //while (maxTries > 5) {
        console.log(arg2);
        console.log(`you have ${maxTries} left`);
        document.addEventListener('keypress', (event) => {
            //this allows the user to press a key which gives a code for the key
            //the code is then converted back into a string and the 
            let keyCode = event.keyCode;
            let keyWord = String.fromCharCode(keyCode)
            for (let l = 0; l < arg1.length; l++) {
                if (arg1[l] === keyWord && arg2[l] === "_") {
                    arg2[l] = keyWord;
                    console.log("keyWord", keyWord)
                    // rightLetter.push(keyWord)
                    checkRightLetter(keyWord)
                    console.log(rightLetter);

                    docUnderScore[0].innerHTML = arg2.join(' ');
                    rightGuess[0].innerHTML = rightLetter.join(' ');
                    console.log(hiddenWord, "the hiddenWord");
                    if (arg1.join('') === arg2.join('')) {
                        paragraph[0].innerHTML = `You won`

                        console.log(paragraph);
                        runGame()
                    }
                }
            }
            if (!arg1.includes(keyWord)) {
                maxTries--;
                wrongLetter.push(keyWord)
                wrongGuess[0].innerHTML = wrongLetter.join(' ')
                remaining[0].innerHTML = `You have ${maxTries} lives remaining`
                image();
            }
            if (maxTries === 0) {
                loser[0].innerHTML = `You lost. Press button to restart.`;
                docUnderScore[0].innerHTML = arg1.join(' ')

            }
            console.log(maxTries);
        })


    }

    let img = document.createElement('img')

    function image() {
        // let img = document.createElement('img')
        // document.body.appendChild(img)
        console.dir("img", img)
        // img.src = './Drawing.jpeg'
        switch (maxTries) {
            case 9:
                console.log("hitting 5")
                img.src = './Drawing.jpeg'
                break;
            case 8:
                img.src = './Drawing (1).jpeg'
                break;
            case 7:
                img.src = './Drawing (2).jpeg'
                break;
            case 6:
                console.log("hitting 5")
                img.src = './Drawing (3).jpeg'
                break;
            case 5:
                img.src = './Drawing (4).jpeg'
                break;
            case 4:
                img.src = './Drawing (5).jpeg'
                break;
            case 3:
                console.log("hitting 5")
                img.src = './Drawing (6).jpeg'
                break;
            case 2:
                img.src = './Drawing (7).jpeg'
                break;
            case 1:
                img.src = './Drawing (8).jpeg'
                break;
            case 0:
                img.src = './Drawing (9).jpeg'
                break;
        }
        //document.body.appendChild(img)
        if (img !== null) {
            document.body.replaceChild(img, img)
        }
    }
    document.body.appendChild(img)
    //function that will start the game to run 
    const runGame = () => {
        validity(randWord, hideWord)
    }
    // when the document eventListener 'DOMContentLoaded' is triggered  
    //the runGame function will be triggered and perform all the function calls
    runGame();
    button.addEventListener('click', () => {
        document.location.reload(true);
        console.log('hello');

    })
})