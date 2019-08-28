document.addEventListener("DOMContentLoaded", () => {
// Create array of countries array length = 
let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
"Anguilla", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", 
"Bahamas", "Bahrain", "Bangladesh","Barbados", "Belarus", "Belgium", "Belize", "Benin", 
"Bermuda", "Bhutan", "Bolivia",  "Botswana", "Brazil", "Brunei", "Bulgaria", 
"Burundi", "Cambodia", "Cameroon",  "Chad", "Chile", "China", "Colombia",
"Congo", "Costa Rica", "Cote D Ivoire", "Croatia",  "Cuba", "Cyprus", "Denmark", "Djibouti",
"Dominica", "Ecuador", "Egypt", "Estonia", "Ethiopia","Fiji", "Finland", "France",  "Gabon",
"Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada",
"Guam", "Guatemala", "Guernsey", "Guinea",  "Guyana", "Haiti", "Honduras", "Hungary", 
"Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
"Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", 
"Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", 
"Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
"Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", 
"Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Nicaragua", "Niger", "Nigeria", 
"Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea",
"Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion",
"Romania", "Russia", "Rwanda", "Samoa",  "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", 
"Slovenia", "Spain", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
"Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia",
"Turkey", "Turkmenistan",  "Uganda", "Ukraine", 
"Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
// choose words radomly
// create dashes to accomodate the number of letters in countries
// Have users guess letter
// Check if guess is correct or wrong
// If letter is correct put letter in appropriate dash/dashes
// If not correct take away a life but if correct put letter 
// on the dash/ dashes

//  document.addEventListener(DOMContentLoaded,() => {
// console.log("lalalalalalalaal")




const getRandomCountry = (arr) => {
    let randomIndex = Math.floor(Math.random() * countries.length)

    let splitWord = arr[randomIndex]
    console.log(splitWord, "check")
    return splitWord.split("") 
}
//   console.log(getRandomCountry(countries))

let random = getRandomCountry(countries)

const getHiddenCountry = (random) => {
     let emptyArr = []
    for (let i = 0; i < random.length; i++) {
        console.log(random, "test")
        emptyArr.push("_")
    }
    return emptyArr
 
}


let emptyArr = getHiddenCountry(random)
  console.log(emptyArr)
let p = document.querySelector('#dashes')
let wrong = document.querySelector('#wrongGuess')
let lives = document.querySelector('#lives')
let numOfGuess = 5;
p.innerText = emptyArr
wrong.innerText
  
 console.log(p)

let button = document.querySelector("button")

button.addEventListener("click", (event) => {
    event.preventDefault()
    let userInput = document.querySelector("input")
    let letterInput = userInput
    console.log(letterInput)
    let emptyArr = getHiddenCountry(random)
    console.log(emptyArr)
    if (letterInput === false) {
       wrong += numOfGuess - 1

    }

})     
   

})


