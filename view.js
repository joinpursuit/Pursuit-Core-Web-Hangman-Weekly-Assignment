import { format } from "url";

class View {
   constructor(el, game){
      this.el = el;
      this.game = game;
      this.gameSetup();
      this.setEvent();
      this.play();  
   }

   play(){

   }

   

   setEvent(){
      let form = document.querySelector('form');
      form.addEventListener('sumbit', event=>{
         event.preventDefault();
         let inputChar = document.querySelector('input');
         let userInput = inputChar.value;
         inputChar.value = "";
      })
   }

   gameSetup(){
      let board = document.createElement('form');

   }
}

export default View;