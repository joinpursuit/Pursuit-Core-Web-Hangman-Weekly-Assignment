//Set Up of My Variables
//bank of possible words to pull from
let availableArtists = ["basquiat", "warhol", "hopper", "celmins", "smith",

                        "ruscha", "noguchi", "o'keeffe", "oldenburg", "driggs"];
//round's current word to guess
//we are saying to pull a word from the bank, or an index of our word bank array
//random allows us to randomly pick a word
//floor ensures the number we get isn't a weird decimal                    
let currentRoundArtist = availableArtists[Math.floor(Math.random() * availableArtists.length)];
