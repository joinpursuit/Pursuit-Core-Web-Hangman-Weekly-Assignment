const isItAlphanumeric = (ltr) => {
    let code = ltr.charCodeAt(0);
    return (ltr.length === 1) && ((code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57));
}

const getRandomWord = () => {
    console.log(words);
    
    return words[Math.floor((Math.random() * words.length))]
}

const chooseWordType = (choice) => {
    if (choice) {
        document.querySelector('#pick_word').style.display = 'block';
        document.querySelector('#own_word').style.display = 'none';
        document.querySelector('#random_word').style.display = 'none';
        document.querySelector('#message_board p').innerText = `You've selected your own word.`;
    } else {
        document.querySelector('#welcome_screen').style.display = 'none';
        document.querySelector('#game').style.display = 'grid';
        document.querySelector('#message_board p').innerText = `You've selected a random word.`;
        startGame(false);
    }
}

const showWord = (yesOrNo) => {
    let input = document.querySelector('#word_input');
    yesOrNo ?
        input.type = "text" :
        input.type = "password";
}

const wrdObj = (wrd) => {
    let wrdObj = {}
    for (let i = 0; i < wrd.length; i++) {
        if (wrd[i] !== ` `) wrdObj[wrd[i].toLowerCase()] = false
    }
    return wrdObj
}

let game = {};
const startGame = (bool) => {
    let choiceOfWrd = bool ? 
        document.querySelector('#word_input').value :
        getRandomWord();

    document.querySelector('#welcome_screen').style.display = 'none';
    document.querySelector('#game').style.display = 'grid';
    
    let hangWrd = wrdObj(choiceOfWrd)
    hangWrd[choiceOfWrd.toLowerCase()] = false

    let hangWrdArr = choiceOfWrd.split('')
    let displayArray = []
    for (let i = 0; i < hangWrdArr.length; i++) {
        hangWrdArr[i] === ` ` ?
            displayArray.push(` `) :
            displayArray.push(`_`);
    }

    let gameObj = {
        hangWrd: hangWrd,
        displayArray: displayArray, 
        hangWrdArr: hangWrdArr, 
        choiceOfWrd: choiceOfWrd, 
        tries: {},
        incorrect: [],
        livesLeft: 7,
    }
    document.querySelector('#display_word p').innerText = `${gameObj.displayArray.join('')}`;

    game = gameObj;
    return gameObj;
}

const updateDisplay = () => {
    document.querySelector('#lives_left').innerText = `Lives left: ${game.livesLeft}`;
    document.querySelector('#incorrect').innerText = `Incorrect: \n${game.incorrect}`;
    document.querySelector('#display_word').innerText = `${game.displayArray.join('')}`;
    document.querySelector('#hangman_figure img').src = `hang${game.livesLeft}.svg`
}

const checkLetter = (ltr) => {
    console.log(ltr.charCodeAt(0));
    
    document.querySelector('#guess_letter').value = '';
    
    if (game.tries[ltr.toLowerCase()]) {
        document.querySelector('#message_board p').innerText = `You've already guessed: ${ltr.toLowerCase()}\nTry again.\n`;
        game.tries[ltr.toLowerCase()] = true;
        return;
    } 
    game.tries[ltr.toLowerCase()] = true;

    if (game.hangWrd[ltr.toLowerCase()] !== undefined) {
        game.hangWrd[ltr.toLowerCase()] = true;
        document.querySelector('#message_board p').innerText = `You've correctly guessed: ${ltr.toLowerCase()}\nCongrats!\n`;
    } else {
        game.livesLeft--;
        game.incorrect.push(ltr);
        document.querySelector('#message_board p').innerText = `You've incorrectly guessed: ${ltr.toLowerCase()}\nToo bad... Try again.\n`;
    }

    for (let i = 0; i < game.hangWrdArr.length; i++) {
        if (game.hangWrd[game.hangWrdArr[i].toLowerCase()]) {
            game.displayArray[i] = game.hangWrdArr[i];
        }
    }
    updateDisplay()

    if (game.displayArray.every(e => e !== `_`) || game.hangWrd[game.choiceOfWrd.toLowerCase()]) {
        game.displayArray = game.hangWrdArr;
        updateDisplay();
        document.querySelector('#message_board p').innerText = `The word was ${game.choiceOfWrd}`;
        document.querySelector('#game').style.display = 'none';
        document.querySelector('#end_screen').style.display = 'block';
        document.querySelector('#winning_screen').style.display = 'block';
        return;
    }
    if (game.livesLeft <= 0) {
        document.querySelector('#message_board p').innerText = `The word was ${game.choiceOfWrd}`;
        document.querySelector('#game').style.display = 'none';
        document.querySelector('#end_screen').style.display = 'block';
        document.querySelector('#losing_screen').style.display = 'block';
    }
    
}
