class View {
  constructor( game, el) {
    this.game = game;
    this.el = el;
    debugger
    this.setUp()
    this.playAgain = playAgain()
  }
  // setUp(){

  // }

  play() {
    if (this.game.isGameOver()) {
      let h1 = document.querySelector("h1");
      h1.innerText = this.game.currentPlayer.name +" Text here this is view js";
      // let button = document.querySelector("button");
      // let input = document.querySelector("input");
    }
    let gameDiv = document.createElement('div');
    gameDiv.id = "boardDiv";
    this.el
  }

  playAgain(){
    let button = document.querySelector('#playAgain');
    button.addEventListener('click' ,()=> {
      this.game.playAgain();
      this.play();
    })
  }

}
export default View