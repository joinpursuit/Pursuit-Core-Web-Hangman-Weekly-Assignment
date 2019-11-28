class View{
    constructor(el, game){
        this.game=game;
        this.el=el;
        this.game.beginGame();
        this.setUpTheGame();
        this.bindEvent();
        this.play()
    }
    play(){
        this.displayBoard();
        this.displayGuessedLetters();
        this.displayHangman();
        if(this.game.isGameOver()){
            let h1=document.createElement("h1");
            h1.innerText=this.game.resolveGame();
            this.el.appendChild(h1)
            let form = document.querySelector("form");
            form.parentNode.removeChild(form)
        }

    }
    
    bindEvent(){
        let form = document.querySelector("form");
        form.addEventListener("submit",e=>{
            e.preventDefault();
            let input = document.querySelector("input");
            let guess = input.value;
            input.value = "";
            if(this.game.isValidGuess(guess)){
                this.game.enterValidGuess(guess)
            }
            this.play()
        })
    }
    setUpTheGame(){
        let board = document.createElement("ul")
        
        board.id = "guessSoFar"
        this.el.appendChild(board)
        let form = document.createElement("form")
        // debugger
        form.id = "form"
        this.el.appendChild(form)
        let input = document.createElement("input")
         input.id= "input"
         this.el.appendChild(input)
         let hangmanPic = document.createElement("div")
         hangmanPic.id = "hangmanPic"
         this.el.appendChild(hangmanPic)
         }

    displayBoard(){
        let ul = document.querySelector("#board")
        // debugger
        ul.innerHTML = ""
          for (let i = 0; i < this.game.board.length(); i++) {
              let li = document.createElement("li")
              li.innerText = this.game.board.get(i) + " ";
              ul.appendChild(li);
          }
      }

      displayGuessedLetters(){
          let guesses = document.querySelector("#guessSoFar");
          guesses.innerHTML = "";
        //   debugger;
          guesses.innerText = this.game.guessedLetters.join(',');
      }
      
      displayHangman(){
          debugger;
          document.querySelector("#hangmanPics").innerText = hangmanPic[this.game.guessesRemaining]
      }

}

export default View;



