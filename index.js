import { Game } from "./Game.js";
import { View } from "./View.js";

document.addEventListener("DOMContentLoaded", () => {
    let displayBox = document.querySelector("#playerFeedback");
    new View(new Game(), displayBox);
})