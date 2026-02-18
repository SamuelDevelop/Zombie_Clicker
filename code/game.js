import { createGameHeader } from "./view/header.js";
import * as loadGame from "./view/loadGame.js";

function startPage(){
    createGameHeader();
    loadPage();
}

startPage();

function loadPage(){
    loadGame.apresentar();
}