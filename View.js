class View {
    constructor(game, el){
        this.game = game;
        this.el = el;
        this.displayBoard();
        this.blind();
        this.printHangMan();
    }
    displayBoard(){
        this.el.innerText = "";
        let boardDiv = document.createElement("div")
        let currentBoard = this.game.displayBoard()
        let h1 = document.createElement("h1")
        h1.innerText = currentBoard;
        let p = document.createElement("p")
        p.innerText = "Please Enter a Letter"
        let input = document.createElement("input")
        input.id = "letterInput";
        let button = document.createElement("button");
        button.innerText = "Submit"

        boardDiv.appendChild(h1);
        boardDiv.appendChild(p);
        boardDiv.appendChild(input);
        boardDiv.appendChild(button);

        this.el.appendChild(boardDiv)

        
    }
    blind(){
        let button = document.querySelector("button")
        button.addEventListener("click", ()=>{

        })
    }
    printHangMan(){
        let img = document.createElement("img")
        img.src ="./images/hangman_6.jpg"
        this.el.prepend(img)
    }
}
export default View