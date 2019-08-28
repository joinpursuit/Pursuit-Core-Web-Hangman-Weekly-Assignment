
document.addEventListener("DOMContentLoaded", () => {
    let winCounter = 1;
    triesCounter = 0;
    let winning = false;
    let wordToGuess = randomWord(winCounter);

    let guesses = document.querySelector("#guess");
    let lettersList = document.querySelector("#alphabet");
    let strikes = document.querySelector("#strike");
    let progress = document.querySelector("#progress");
    let solution = document.querySelector("#solution");
    let restart = document.querySelector("#restart");
    let soundsDiv = document.querySelector("#sound");
    let backgroundSound = document.querySelector("#bg-sound");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    alphabet();
    displayDashes(wordToGuess);
    displayProgress();
    soundEffect("init");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    lettersList.addEventListener("click", (event) => {
        let clickedElement = event.target;
        let parent = clickedElement.parentNode;

        if (parent === lettersList) {
            // Letters pics have an ALT = "letter X" and empty pics have an ALT = "empty"
            let letter = clickedElement.alt[7];
            if (letter) {
                let emptySpace = document.createElement("img");
                emptySpace.setAttribute("src", `Letters/Empty.png`);
                emptySpace.setAttribute("alt", `empty`);
                emptySpace.setAttribute("class", "blank");

                wordIncludesLetter(wordToGuess, letter);
                displayProgress();
                parent.replaceChild(emptySpace, clickedElement);
            }
        }
    })


//========================================================================================
    function printSolution() {
        let oldP = document.querySelector("#p-solution");

        let newP = document.createElement("p");
        newP.innerText = `The Word was ${wordToGuess}`;
        newP.setAttribute("id", "p-solution")
        solution.style.color = "white";

        if (oldP) {
            solution.replaceChild(newP, oldP);
        } else {
            solution.appendChild(newP);
        }
    }
//==========================================================================================
    function displayProgress() {
        let previousImage = document.querySelector(".progress");
        let progressImage = document.createElement("img");
        if (winning) {
            progressImage.setAttribute("src", `GameStages/End.jpg`);
            progressImage.setAttribute("alt", `escaping the dungeon`);
            progressImage.setAttribute("class", "progress");     
        } else {
            progressImage.setAttribute("src", `GameStages/Stage${winCounter}/Step_${triesCounter}.jpg`);
            progressImage.setAttribute("alt", `Stage ${winCounter}, Step ${triesCounter}`);
            progressImage.setAttribute("class", "progress");
        }
        if (previousImage) {
            progress.replaceChild(progressImage, previousImage);
        } else {
            progress.appendChild(progressImage);
        }
    }

//==========================================================================================
    function arrayOfWords(num) {
        let listOfWords2 = `ability, able, about, above, accept, according, account, across, act, action, activity, actually, add, address, administration, admit, adult, affect, after, again, against, age, agency, agent, ago, agree, agreement, ahead, air, all, allow, almost, alone, along, already, also, although, always, American, among, amount, analysis, and, animal, another, answer, any, anyone, anything, appear, apply, approach, area, argue, arm, around, arrive, art, article, artist, as, ask, assume, at, attack, attention, attorney, audience, author, authority, available, avoid, away, baby, back, bad, bag, ball, bank, bar, base, be, beat, beautiful, because, become, bed, before, begin, behavior, behind, believe, benefit, best, better, between, beyond, big, bill, billion, bit, black, blood, blue, board, body, book, born, both, box, boy, break, bring, brother, budget, build, building, business, but, buy, by, call, camera, campaign, can, cancer, candidate, capital, car, card, care, career, carry, case, catch, cause, cell, center, central, century, certain, certainly, chair, challenge, chance, change, character, charge, check, child, choice, choose, church, citizen, city, civil, claim, class, clear, clearly, close, coach, cold, collection, college, color, come, commercial, common, community, company, compare, computer, concern, condition, conference, Congress, consider, consumer, contain, continue, control, cost, could, country, couple, course, court, cover, create, crime, cultural, culture, cup, current, customer, cut, dark, data, daughter, day, dead, deal, death, debate, decade, decide, decision, deep, defense, degree, Democrat, democratic, describe, design, despite, detail, determine, develop, development, die, difference, different, difficult, dinner, direction, director, discover, discuss, discussion, disease, do, doctor, dog, door, down, draw, dream, drive, drop, drug, during, each, early, east, easy, eat, economic, economy, edge, education, effect, effort, eight, either, election, else, employee, end, energy, enjoy, enough, enter, entire, environment, environmental, especially, establish, even, evening, event, ever, every, everybody, everyone, everything, evidence, exactly, example, executive, exist, expect, experience, expert, explain, eye, face, fact, factor, fail, fall, family, far, fast, father, fear, federal, feel, feeling, few, field, fight, figure, fill, film, final, finally, financial, find, fine, finger, finish, fire, firm, first, fish, five, floor, fly, focus, follow, food, foot, for, force, foreign, forget, form, former, forward, four, free, friend, from, front, full, fund, future, game, garden, gas, general, generation, get, girl, give, glass, go, goal, good, government, great, green, ground, group, grow, growth, guess, gun, guy, hair, half, hand, hang, happen, happy, hard, have, he, head, health, hear, heart, heat, heavy, help, her, here, herself, high, him, himself, his, history, hit, hold, home, hope, hospital, hot, hotel, hour, house, how, however, huge, human, hundred, husband, I, idea, identify, if, image, imagine, impact, important, improve, in, include, including, increase, indeed, indicate, individual, industry, information, inside, instead, institution, interest, interesting, international, interview, into, investment, involve, issue, it, item, its, itself, job, join, just, keep, key, kid, kill, kind, kitchen, know, knowledge, land, language, large, last, late, later, laugh, law, lawyer, lay, lead, leader, learn, least, leave, left, leg, legal, less, let, letter, level, lie, life, light, like, likely, line, list, listen, little, live, local, long, look, lose, loss, lot, love, low, machine, magazine, main, maintain, major, majority, make, man, manage, management, manager, many, market, marriage, material, matter, may, maybe, me, mean, measure, media, medical, meet, meeting, member, memory, mention, message, method, middle, might, military, million, mind, minute, miss, mission, model, modern, moment, money, month, more, morning, most, mother, mouth, move, movement, movie, Mr, Mrs, much, music, must, my, myself, name, nation, national, natural, nature, near, nearly, necessary, need, network, never, new, news, newspaper, next, nice, night, no, none, nor, north, not, note, nothing, notice, now, n't, number, occur, of, off, offer, office, officer, official, often, oh, oil, ok, old, on, once, one, only, onto, open, operation, opportunity, option, or, order, organization, other, others, our, out, outside, over, own, owner, page, pain, painting, paper, parent, part, participant, particular, particularly, partner, party, pass, past, patient, pattern, pay, peace, people, per, perform, performance, perhaps, period, person, personal, phone, physical, pick, picture, piece, place, plan, plant, play, player, PM, point, police, policy, political, politics, poor, popular, population, position, positive, possible, power, practice, prepare, present, president, pressure, pretty, prevent, price, private, probably, problem, process, produce, product, production, professional, professor, program, project, property, protect, prove, provide, public, pull, purpose, push, put, quality, question, quickly, quite, race, radio, raise, range, rate, rather, reach, read, ready, real, reality, realize, really, reason, receive, recent, recently, recognize, record, red, reduce, reflect, region, relate, relationship, religious, remain, remember, remove, report, represent, Republican, require, research, resource, respond, response, responsibility, rest, result, return, reveal, rich, right, rise, risk, road, rock, role, room, rule, run, safe, same, save, say, scene, school, science, scientist, score, sea, season, seat, second, section, security, see, seek, seem, sell, send, senior, sense, series, serious, serve, service, set, seven, several, sex, sexual, shake, share, she, shoot, short, shot, should, shoulder, show, side, sign, significant, similar, simple, simply, since, sing, single, sister, sit, site, situation, six, size, skill, skin, small, smile, so, social, society, soldier, some, somebody, someone, something, sometimes, son, song, soon, sort, sound, source, south, southern, space, speak, special, specific, speech, spend, sport, spring, staff, stage, stand, standard, star, start, state, statement, station, stay, step, still, stock, stop, store, story, strategy, street, strong, structure, student, study, stuff, style, subject, success, successful, such, suddenly, suffer, suggest, summer, support, sure, surface, system, table, take, talk, task, tax, teach, teacher, team, technology, television, tell, ten, tend, term, test, than, thank, that, the, their, them, themselves, then, theory, there, these, they, thing, think, third, this, those, though, thought, thousand, threat, three, through, throughout, throw, thus, time, to, today, together, tonight, too, top, total, tough, toward, town, trade, traditional, training, travel, treat, treatment, tree, trial, trip, trouble, true, truth, try, turn, TV, two, type, under, understand, unit, until, up, upon, us, use, usually, value, various, very, victim, view, violence, visit, voice, vote, wait, walk, wall, want, war, watch, water, way, we, weapon, wear, week, weight, well, west, western, what, whatever, when, where, whether, which, while, white, who, whole, whom, whose, why, wide, wife, will, win, wind, window, wish, with, within, without, woman, wonder, word, work, worker, world, worry, would, write, writer, wrong, yard, yeah, year, yes, yet, you, young, your, yourself`;
        let allWords2 = listOfWords2.split(", ");
        let listOfWords = "able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, event, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, while, whip, whistle, white, wide, will, wind, window, wine, wing, winter, wire, wise, with, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young";
        let allWords = listOfWords.split(", ");

        let allTheWords = allWords.concat(allWords2);
    
        let easy = allTheWords.filter(element => {
            if (element.length > 3 && element.length <= 5) {
                return element;
            }
        });
    
        let medium = allTheWords.filter(element => {
            if (element.length > 5 && element.length <= 7) {
                return element;
            }
        });
    
        let hard = allTheWords.filter(element => { 
            if (element.length > 7) {
                return element;
            }
        });
    
        switch(num) {
            case 1:
                return easy;
            case 2: 
                return medium;
            case 3:
                return hard;
        }
    }

//==========================================================================================
    function randomWord(stage) {
        let array = arrayOfWords(stage);
        let word = array[Math.floor(Math.random() * array.length)].toUpperCase();
        console.log(word);
        return word;
    }

//==========================================================================================
    function alphabet() {
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let alp = letters.split('');
        
        for (let element of alp) {
            let newLetter = document.createElement("img");
            newLetter.setAttribute("src", `Letters/${element}.png`);
            newLetter.setAttribute("alt", `letter ${element}`);
            newLetter.setAttribute("class", "alph");
            lettersList.appendChild(newLetter);
        }
    }

//==========================================================================================
    function displayDashes(str) {
        for (i = 0; i < str.length; i++) {
            let newDash = document.createElement("img");
            newDash.setAttribute("src", `Letters/Dash.png`);
            newDash.setAttribute("alt", `Empty_${str[i]}`);
 //           newDash.setAttribute("class", "alph");
            newDash.setAttribute("class", "dash");
            guesses.appendChild(newDash);
        }
    }
    
//==========================================================================================
    function wordIncludesLetter(word, character) { 
        let letterRepeats = 0;
        let dashedWord = document.querySelectorAll(".dash");

        if (word.includes(character)){
            letterRepeats += 1;
            soundEffect("lock");
            for (let i = 0; i < dashedWord.length; i++) {
                let dashTag = dashedWord[i].alt;
                if (dashTag[6] === character) {
                    let dash = dashedWord[i];
                    let newLetter = document.createElement("img");
                    newLetter.setAttribute("src", `Letters/${character}.png`);
                    newLetter.setAttribute("alt", `letter ${character}`);
                    newLetter.setAttribute("class", "guess"); // Class guess for right guesses
                    guess.replaceChild(newLetter, dash);
                }
            }
            lookForAWin();
        }   

        let missedSound;

        if (!letterRepeats) {
            let newStrike = document.createElement("img");
            newStrike.setAttribute("src", `Letters/${character}.png`);
            newStrike.setAttribute("alt", `Letter ${character}`);
            newStrike.setAttribute("class", "strike");
            strikes.appendChild(newStrike);

            triesCounter += 1;

            if (winCounter === 1) {
                missedSound = "whisper";
            }
            if (winCounter === 2) {
                missedSound = "wall";
            }
            if (winCounter === 3) {
                missedSound = "floor";
            }
            soundEffect(missedSound);
        }

        if (triesCounter > 5) {
            printSolution();
            restartGame();

            if (winCounter === 1) {
                missedSound = "laugh";
            }
            if (winCounter === 2) {
                missedSound = "smash";
            }
            if (winCounter === 3) {
                missedSound = "fall";
            }
            soundEffect(missedSound);
        }
    }
//==========================================================================================
    function restartGame() {
        lettersList.parentNode.removeChild(lettersList);

        let restartButton = document.createElement("input");
        restartButton.setAttribute("type", "button");
        restartButton.setAttribute("value", "Restart");
        restartButton.setAttribute("onClick", "window.location.reload();");
        restart.appendChild(restartButton);
    }

//==========================================================================================
    function lookForAWin() {
        let allGuesses = document.querySelectorAll(".guess");
        let allStrikes = document.querySelectorAll(".strike");
        let allAlphabet = document.querySelectorAll(".alph");
        let allBlanks = document.querySelectorAll(".blank")
        
        if (allGuesses.length === wordToGuess.length && winCounter < 3) { // NEXT STAGE
            winCounter += 1;
            triesCounter = 0;
            soundEffect("win");
            
            for (let i = 0; i < allStrikes.length; i++) { // REINITIALIZE STRIKES
                strikes.removeChild(allStrikes[i]);
            }
            for (let i = 0; i < allBlanks.length; i++) { // REINITIALIZE BLANKS
                lettersList.removeChild(allBlanks[i]);
            }
            for (let i = 0; i < allAlphabet.length; i++) { // REINITIALIZE ALPHABET
                lettersList.removeChild(allAlphabet[i]);
            }
            for (let i = 0; i < allGuesses.length; i++) { // INITIALIZE STRIKES
                guesses.removeChild(allGuesses[i]);
            }
            
            alphabet();
            wordToGuess = randomWord(winCounter);
            displayDashes(wordToGuess);
            displayProgress();

        } else if (allGuesses.length === wordToGuess.length && winCounter >= 3){
            winning = true;
            displayProgress();
            restartGame();
            soundEffect("free");
        }

    }

    function soundEffect(strNum) {
        backgroundSound.loop = true;

        let previousSound = soundsDiv.lastChild;

        let soundEffect = document.createElement("audio");
        soundEffect.autoplay = true;
        soundEffect.setAttribute("type", "audio/mp3"); 

        if (strNum === "init") {
            soundEffect.src = "Sounds/Wind.mp3";
        } else if (strNum === "whisper") {
            soundEffect.src = "Sounds/Creepy.mp3";
        } else if (strNum === "wall") {
            soundEffect.src = "Sounds/Stone Slide.mp3";
        } else if (strNum === "floor") {
            soundEffect.src = "Sounds/Floor Collapse.mp3";
        } else if (strNum === "laugh") {
            soundEffect.src = "Sounds/Evil Laugh.mp3";
        } else if (strNum === "smash") {
            soundEffect.src = "Sounds/Scream.mp3";
        } else if (strNum === "fall") {
            soundEffect.src = "Sounds/Falling.mp3";
        } else if (strNum === "lock") {
            soundEffect.src = "Sounds/Locking.mp3";
        } else if (strNum === "win") {
            soundEffect.src = "Sounds/Door Open.mp3";
        } else if (strNum === "free") {
            soundEffect.src = "Sounds/Forest.mp3";
            backgroundSound.muted = true;
        } 

        if (previousSound) {
            soundsDiv.replaceChild(soundEffect, previousSound);
        } else {
            soundsDiv.appendChild(soundEffect);
        }
    }

})