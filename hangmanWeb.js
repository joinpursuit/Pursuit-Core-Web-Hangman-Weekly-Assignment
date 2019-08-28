document.addEventListener('DOMContentLoaded', () => {
  const allTheWords = 'able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, cheetah, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, event, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, while, whip, whistle, white, wide, will, wind, window, wine, wing, winter, wire, wise, with, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young, zebra, zoo'.split(', ');

  // Create random word for player to guess
  const getRandomWord = (array) => {
    return allTheWords[Math.floor(Math.random() * allTheWords.length)];
  }
  // Replaces img to change base on how many incorrect guesses the player has
  function replacePicture() {
    let picture = document.querySelector("img")
    let newPicture = document.createElement("img")
    newPicture.src = imageArray[guess];
    picture.parentNode.replaceChild(newPicture, picture)
  }

  const selectedWord = getRandomWord(allTheWords).split('');
  const selectedWordBlanks = [];
  let answerArray = selectedWordBlanks;
  let remainingLetters = selectedWord.length;
  let guessedLetters = [];
  let usedLetters = [];
  let guess = 6;
  let underScore = document.getElementById('underScore');
  let wrongGuess = document.getElementById('wrongGuess');
  let comment = document.getElementById('comments');




  let imageArray = ['http://www.foreverbermuda.com/wp-content/uploads/2019/05/no-balloons-sign-generic-cTcQvAEA-ForB.jpg', 'http://www.loneballoon.com/images/loneballoon.jpg', 'https://www.sccpre.cat/mypng/detail/206-2061546_balloons-pink-green-flying-png-image-2-balloons.png', 'http://cdn.shopify.com/s/files/1/1413/4098/products/2e584a30e15f2c2ca2ac7aea27dca87b_grande.jpg?v=1489474672', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWTX9iItH_EEawk1Gfn6IqhkgM2QGy4E7tUdmUDgPgky1NfOJbQ', 'https://images-na.ssl-images-amazon.com/images/I/31zvxz0xxKL._SY355_.jpg', 'https://www.balloondealer.com/app/images/BD11ASSORT.jpg']

  const makeBlanks = () => {
    for (let i = 0; i < selectedWord.length; i++) {
      selectedWordBlanks.push('_');
    }
    return selectedWordBlanks;
  }


  //this function will check for duplicates of user's input
  function checkDuplicate(userInput) {
    if (!usedLetters.includes(userInput)) {
      return true;
    } else {
      window.alert(`You've used this letter before. Please pick`);
    }
  }

  //Start of the game
  makeBlanks();
  underScore.innerHTML = selectedWordBlanks.join(' '); //shows underscore on the screen
  document.addEventListener('keypress', (event) => {

    let keyCode = event.keyCode;
    let input = String.fromCharCode(keyCode);
    if (guess === 0) {
      underScore.innerText = selectedWord.join('');
    } else if (input === ' ' || input === input.toUpperCase()) {
      window.alert(`Please enter a valid lowercase letter`)
    } else if (selectedWord.indexOf(input) > -1) {
      if (checkDuplicate(input)) {
        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === input && remainingLetters > 0) {
            answerArray[i] = input;
            underScore.innerText = selectedWordBlanks.join(' '); //works to replace the letters in the world
            // remainingLetters--;
            console.log(remainingLetters)
            if (!usedLetters.includes(input)) {
              usedLetters.push(input)
              if (answerArray.join('') === selectedWord.join('')) {
                outcome.innerText = 'You Win';
              }
            }
          }
        }
      }
    } else {
      if (checkDuplicate(input)){
      guessedLetters.push(input);
      usedLetters.push(input);
      //guess--;
      comment.innerText = `you have ${guess-1} balloons left`;
      console.log(guessedLetters)
      wrongGuess.innerText = guessedLetters.join(' ');
        switch (guess) {
          case 6:
            guess--;
            replacePicture();
            break;
          case 5:
            guess--;
            replacePicture();
            break;
          case 4:
            guess--;
            replacePicture();
            break;
          case 3:
            guess--;
            replacePicture();
            break;
          case 2:
            guess--;
            comment.innerText = `you only have ${guess} balloon left`;
            replacePicture();
            break;
           case 1:
            guess--;
            replacePicture();
            outcome.style.color = `#FF0000`
            outcome.innerText = (`You lose. The word was ${selectedWord.join('')}`);
            underScore.innerText = selectedWord.join('');
            replacePicture();
      }
    }
  }
   document.removeEventListener('keypress', event)}, true);
})