const {rickManPics} = require("./rickManPics.js")
class view{
    constructor(game, el){
        this.game = game;
        this.el = el
        this.play();
        
    }
    play(){
    
        if(this.game.gameOver()){
            let h1 = document.querySelector("heading");
            let img = document.createElement("img")
            img.src = "https://media3.giphy.com/media/35nU79vBbeOm4/source.gif"
            h1.innerText = "You won!!!!! "
            let input = document.querySelector("input")
              let button = document.querySelector("button")
              this.el.removeChild(input)
              this.el.removeChild(button)
         } else {
             this.displayBoard();
             this.check();
         }
           
            
        }
    check(){
        let button = document.querySelector("#checkBtn")
        let input = document.querySelector("#letter")
        let h1 = document.querySelector("#blanks")
        let heading = document.querySelector("#heading")
        let p = document.createElement("p")
        let img = document.createElement("img")
        img.id = "img"
        let div = document.querySelector("#board")
        img.src = "https://media0.giphy.com/media/l0nR1C4LomifC/source.gif"

        button.addEventListener("click", () => {
            console.log(input.value)
            this.game.cpu.secondIndex =[]
            h1.innerText = this.game.isLetter(input.value)
            p.innerText = "Letters Guessed: " + this.game.cpu.letterGues
            input.value = ""
            this.GameDone();
            
           img.src = rickManPics[this.game.cpu.reamingingMove]
        })
        div.appendChild(img)
        this.el.appendChild(h1)
        this.el.appendChild(p)
        this.el.appendChild(div)
    }

    displayBoard(){
        let makeBlank = this.game.board.blankLetters()
        let h1 = document.createElement("h1")
        h1.id = "blanks"
        h1.innerText = makeBlank
        this.el.appendChild(h1);
        
    }
    GameDone(){
        let input = document.querySelector("#letter")   
        let img = document.querySelector("#img")   
        if(this.game.cpu.reamingingMove <= 0){
            heading.innerText = "YOU LOSE!!!"
            input.disabled = true;
          }else if(this.game.cpu.letterRight === this.game.wordUsed.length){
            heading.innerText = "Win!!!!!!!"
            input.disabled = true;
            img.src = "https://media0.giphy.com/media/l0nR1C4LomifC/source.gif"
          }
        
    }

}

export default view;