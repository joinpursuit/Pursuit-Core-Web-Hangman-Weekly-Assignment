// choose words radomly
// create dashes to accomodate the number of letters in countries
// Have users guess letter
// Check if guess is correct or wrong
// If letter is correct put letter in appropriate dash/dashes
// If not correct take away a life but if correct put letter 
// on the dash/ dashes
// Create array of countries array length = 

let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Anguilla", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bermuda", "Bhutan", "Bolivia", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burundi", "Cambodia", "Cameroon", "Chad", "Chile", "China", "Colombia",
    "Congo", "Croatia", "Cuba", "Cyprus", "Denmark", "Djibouti", "Dominica", "Ecuador",
    "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala",
    "Guernsey", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey",
    "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia",
    "Nepal", "Netherlands", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Samoa", "Senegal", "Serbia",
    "Seychelles", "Singapore", "Slovakia", "Slovenia", "Spain", "Sudan", "Suriname", "Swaziland",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
    "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "Uruguay", "Uzbekistan",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]

document.addEventListener("DOMContentLoaded", () => {


    let random = getRandomCountry(countries)

    let emptyArr = getHiddenCountry(random)

    console.log("random", random)
    let countryDiv = document.querySelector(".input-letter")

    let dashes = document.createElement("p")
    dashes.innerText = emptyArr

    let lives = document.createElement("p");
    lives.classList.add("lives");

    let l = 5;
    lives.innerText = l

    countryDiv.appendChild(dashes)
    countryDiv.appendChild(lives)

    let form = document.querySelector("form")
    console.log("form", form)
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let input = document.querySelector("input")
        let letter = input.value

        for (let i = 0; i < random.length; i++) {
            if (letter === random[i] || letter.toUpperCase() == random[i]) {
                emptyArr[i] = letter
              console.log("match", emptyArr)
        
            } else if (letter !== random[i]) {
                
            }
        }
        dashes.innerText = emptyArr
       
        return lives.innerText--
    })

})


const getRandomCountry = (arr) => {
    let randomIndex = Math.floor(Math.random() * countries.length)
    let splitWord = arr[randomIndex]
    return splitWord.split("")
}
let random = getRandomCountry(countries)


const getHiddenCountry = (random) => {
    let emptyArr = []
    for (let i = 0; i < random.length; i++) {
        // console.log(random, "test")
        if (random[i] !== ` `) {
            emptyArr.push("_")
        }
    }
    return emptyArr
}