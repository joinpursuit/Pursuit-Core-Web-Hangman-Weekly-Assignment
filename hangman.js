let name = prompt("Now who might you be??")
alert("So you're " + name + "? Sounds like the name of a hero..")
alert("alright, lets test your abilities....") 


const wordList = [
    'batman',
    'superman',
    'wolverine',
    'spiderman',
    'cyclops',
    'ironman',
    'storm',
    'beast',
    'thor',
    'iceman',
    'hulk',
    'colossus',
    'nightcrawler',
    'rogue',
    'magneto',
    'hawkeye',
    'namor',
    'daredevil',
    'gambit',
    'psylocke',
    'antman',
    'aquaman',
    'havok',
    'flash',
    'vison',
    'quicksilver',
    'cable',
    'sabretooth',
    'joker',
    'hawkman',
    'supergirl',
    'robin',
    'nightwing',
    'mystique',
    'punisher'
];

const getRandomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

const checkGuess = () => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            
        }
    }
}
const playHangman = () => {
    let selectedWord = getRandomWord(wordList).split('');
    let selectedWordBlanks = []
    let guessedLetters = []
    let guessesRemaining = 6
    let blanks = document.getElementById("blanks")

    const makeBlanks = () => {
        for (let i = 0; i < selectedWord.length; i++) {
            selectedWordBlanks.push('_');
        }
        return selectedWordBlanks
    }
    blanks.innerText = makeBlanks().join()
    blanks.appendChild(blanks)
}
playHangman()