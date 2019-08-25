window.addEventListener('DOMContentLoaded', () => {
    let allTheWords = `able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, event, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, while, whip, whistle, white, wide, will, wind, window, wine, wing, winter, wire, wise, with, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young`;

let listOfWords = allTheWords.split(", ");
let wordOfTheGame = listOfWords[Math.floor( (Math.random() * listOfWords.length) + 1 )];
console.log("Word of the game is: " + wordOfTheGame);
let dashes = document.querySelector("#dashes");
let newNode = document.createElement("p");
let newChar = ""; //change to string dashes
for(let i = 0; i < wordOfTheGame.length; i++) {
    newChar += "_ ";
}
newNode.innerText = newChar;
dashes.parentNode.replaceChild(newNode, dashes);
let typeOfGuess = document.querySelector("#typeOfGuess");
let theButton = document.querySelector("#submitButton");
let input = document.querySelector("#userInput"); //grab the input
let arrayOfDashesToBeChanged = (newChar.split(" "));
newChar = newChar.trim();
let amountOfGuesses = document.querySelector("#amountOfGuesses");
let startingNumberForAmountOfGuesses = 7;
let amountOfGuessesLeft = 7;
let guessesMessage = `You have ${startingNumberForAmountOfGuesses} guesses. Start`;
let lettersAlreadyGuessed = document.querySelector("#lettersAlreadyGuessed");
amountOfGuesses.innerText = guessesMessage;
lettersAlreadyGuessed.innerText = "No guessed letters";
let lettersAlreadyGuessedArray = [];
let resultToBeUsedForWhenWon;
let hangmanPic = document.querySelector("#hangmanPicture")

theButton.addEventListener ('click', () => {
    
    //logic for hangman
    let inputValue = input.value;
    if(!inputValue) {
        typeOfGuess.innerHTML = "<h1>Please enter a value</h1>";
        window.alert("Please enter a value");
    } else {
        if(wordOfTheGame.includes(inputValue) && amountOfGuessesLeft != 0) {
            let arrayVersionOfWord = wordOfTheGame.split("");
            for(let i = 0; i < arrayVersionOfWord.length; i++) {
                if(arrayVersionOfWord[i] === inputValue) {
                    arrayOfDashesToBeChanged[i] = inputValue;
                }
            }
            let betweenChars = " ";
            let stringifyTheArray = arrayOfDashesToBeChanged;
            let trimmedStringArray = stringifyTheArray;
            let stringifyTrimmedStringArray = trimmedStringArray.join("").split('').join("");
            resultToBeUsedForWhenWon = stringifyTrimmedStringArray;
            let result = stringifyTrimmedStringArray.split('').join(betweenChars);
            newNode.innerText = result;
            document.querySelector("#userInput").value=''; //clears input after submit button is pressed
            typeOfGuess.innerHTML = "<h2><span style='color: blue'>Correct!</span></h2>";
            //resultToBeUsedForWhenWon = result;
    
        } else if(wordOfTheGame.includes(inputValue) === false && amountOfGuessesLeft != 0){
            let checkIfAlreadyGuessedThatCharacter = lettersAlreadyGuessedArray.join("");
            if(checkIfAlreadyGuessedThatCharacter.includes(inputValue)) {
                amountOfGuesses.innerText = `You already guessed that word. You have ${amountOfGuessesLeft} guesses left`;
                typeOfGuess.innerHTML = "<h2><span style='color: red'>Incorrect</span></h2>";

            } else {
                //amount of guesses decrease
                amountOfGuesses.innerText = `You have ${--amountOfGuessesLeft} guesses left`;
                typeOfGuess.innerHTML = "<h2><span style='color: red'>Incorrect</span></h2>";
                lettersAlreadyGuessedArray.push(inputValue);
                lettersAlreadyGuessed.innerText = lettersAlreadyGuessedArray;
            }
        } 

        if(resultToBeUsedForWhenWon === wordOfTheGame) {
            typeOfGuess.innerHTML = "<h1 style='color: blue'>You won!</h1>";
        } else if(amountOfGuessesLeft === 0) {
            typeOfGuess.innerHTML = `<h2 style='color: red'>You lost. The word of the game was: "${wordOfTheGame}". Game over</h2>`;
        }
    }

    //logic for pictures
    if (amountOfGuessesLeft === 0) {
        let result = "";
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||        0\n")
        result += ("||       /|\\ \n")
        result += ("||       / \\ \n")
        result += ("||\n")
        result += ("=====\n")
        console.log(result);
        hangmanPic.innerText = result;
    }
    
    else if(amountOfGuessesLeft === 1) {
        let result = "";
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||        0\n")
        result += ("||       /|\ \n")
        result += ("||       /\n")
        result += ("||\n")
        result += ("=====\n") 
        console.log(result);
        hangmanPic.innerText = result;
    }

    else if (amountOfGuessesLeft === 2) {
        let result = "";
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||       0\n")
        result += ("||      /|\\ \n")
        result += ("||\n")
        result += ("||\n")
        result += ("=====\n") 
        console.log(result);
        hangmanPic.innerText = result;
    }

    else if (amountOfGuessesLeft === 3) {
        let result = "";
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||       0\n")
        result += ("||      /|\n")
        result += ("||\n")
        result += ("||\n")
        result += ("=====\n") 
        console.log(result);
        hangmanPic.innerText = result;
    }

    else if (amountOfGuessesLeft === 4) {
        let result = "";  
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||       0\n")
        result += ("||       |\n")
        result += ("||\n")
        result += ("||\n")
        result += ("=====\n") 
        console.log(result);
        hangmanPic.innerText = result;
    }
    else if (amountOfGuessesLeft === 5) {
        let result = "";    
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||       0\n")
        result += ("||\n")
        result += ("||\n")
        result += ("||\n")
        result += ("=====\n")
        console.log(result);
        hangmanPic.innerText = result;
    }

    else if (amountOfGuessesLeft === 6) {
        let result = "";
        result += ("||:====}]]\n")
        result += ("||/      |\n")
        result += ("||\n")
        result += ("||\n")
        result += ("||\n")
        result += ("||\n")
        result += ("=====\n")
        console.log(result);
        hangmanPic.innerText = result;
    }

    else if (amountOfGuessesLeft === 7) {
        let result = "";
        result += ("||:====}]]\n")
        result += ("||/\n")
        result += ("||\n")
        result += ("||\n")
        result += ("||\n")
        result += ("||\n")
        result += ("=====\n")
        console.log(result);
        hangmanPic.innerText = result;
    }

})

restart.addEventListener('click', () => {
    window.location.reload();
})

}) //DomContentLoaded