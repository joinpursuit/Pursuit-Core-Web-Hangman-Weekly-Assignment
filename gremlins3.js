//word base
let words = ['billy', 'mogwai', 'gremlins', 'stripe', 'peltzer', 'cate', 'water', 'midnight'];
const getRandomWord = (list) => {
    let randNum = Math.floor(Math.random() * list.length);
    return list[randNum];
}

//how words are displayed
const displayWord =(word)=> {

    let progressWordP =document.querySelector('#progress_word');
    //let dashes = word.split('').map((char => {return '_'}))
    let dashes = '_'.repeat(word.length)
    progressWordP.innerText = dashes;
    progressWordP.innerText = words;
}
let handleSubmeit = (event)=> {
    event.preventDefault();
}
let randomWord= getRandomWord(words);
let handleSubmit = (event) => {
    console.log('button was clicked')
}

document.addEventListener('DOMContentLoaded', ()=>{
    displayWord(randomWord);
    let userInput = document.querySelector('#user_input')
    let form= document.querySelector('#input[type=submit]');
    form.addEventListener('submit', handleSubmit)

});

console.log(randomWord);

//how words are under the underscores have a value
const createHiddenWord = (word) => {
const hiddenWord = word.split('').map(char => { return '_'})
return hiddenWord;
}
const isLetterInWord = (letter, word) =>{
    return word.includes(letter);
}
const replaceMatches = (letter,randomWord,hiddenWord) => {
    for(let i = 0; i < randomWord.length; i++){
        let crrChar = randomWord[i];
        if (crrChar === letter){
            hiddenWord[i] = letter;
        }
    }
    return hiddenWord;
}
//starting game
const startGame = () =>{ 
    let randomWord = getRandomWord(words);
    let hiddenWord = createHiddenWord(randomWord);
    let welcome = "Gremlins 2 Hangman";
    console.log(welcome);
    console.log(hiddenWord.join(' '));
    
    let tries = 6;
    while(tries > 0 && hiddenWord.join('') !== randomWord){
        
        const answer = readline.question('Type a Letter: ' )
        console.log(`type ${answer}`)
        console.log(hiddenWord.join(' '));
        
//compares input
        if (isLetterInWord(answer,randomWord)){
            console.clear();
            console.log(welcome)
            hiddenWord = replaceMatches(answer,randomWord,hiddenWord);
            console.log(hiddenWord.join(' '));
            console.log('That letter is in the word');
            console.log(`You have ${tries} left`);
    
        }else{
            tries --;
            console.clear();
            console.log(welcome);
            console.log(hiddenWord.join(' '));
            console.log("It's not in the word");
            console.log(`You have ${tries} left`);
        }
    }
    if (hiddenWord.join('') === randomWord){
        console.clear();
        console.log(welcome)
  
        console.log(hiddenWord.join(' '));
        console.log('You Won!!');
    }
    

    
}
