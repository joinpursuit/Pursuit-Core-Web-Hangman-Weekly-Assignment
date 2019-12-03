const { celebrities } = require("./words.js")

class Board {
    constructor() {
        this.word = celebrities;
    }
    
    selectCeleb () {
        let randCeleb = celebrities[Math.floor(Math.random() * celebrities.length)]
        return randCeleb
    }

    secretCeleb(selectCeleb) {
        let blank = [];
        for (let i = 0; i < selectCeleb.length; i++){
            blank[i] = "_"
        }
        return blank
    }
    displayBoard() {
        return this.secretCeleb
    }

    isDone(){
        
    }
}

module.exports = Board;