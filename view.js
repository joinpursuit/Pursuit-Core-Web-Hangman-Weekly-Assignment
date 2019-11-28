class View {
    constructor(el) {
        this.el = el
        this.names = [1,2,3]
        this.displayBoard()
        // this.game = game

    }
    displayBoard() {
        // let board = document.createElement("div")
        // let currentBoard = this.game.board

        // let el = document.querySelector('#board')
        this.el.innerText = "hello"

        console.log(this)
    }

    
}

export default View;