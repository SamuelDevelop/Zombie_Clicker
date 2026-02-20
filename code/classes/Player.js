import * as localStorage from "../controll/localStorage.js";

export class Player{
    constructor(){
        this.saveData = localStorage.getDados();
        this.vidaLocal = this.saveData.vidaAtual;
    }

    somaClicks(){
        this.saveData.clicks += this.saveData.aumentoClicks;
        this.saveData.clicksTotais += this.saveData.aumentoClicks;
        localStorage.saveDados(this.saveData);
    }

    somaInimigosDerrotados(){
        this.saveData.zombiesMortos += 1;
        localStorage.saveDados(this.saveData);
    }

    sofrerDano(dano){
        this.vidaLocal -= dano;
    }
}