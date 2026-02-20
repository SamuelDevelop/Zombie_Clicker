import * as fetcher from "../controll/fetcher.js";
import * as localStorage from "../controll/localStorage.js";
import * as utils from "../controll/utils.js";
import * as draw from "../view/drawGame.js";

export class Enemies{
    constructor(Player){
        this.inimigoAtual = null;
        this.temInimigoEmTela = false;
        this.player = Player;
    }

    async iniciarInimigos(){
        this.inimigoAtual = await Enemies.getProxEnemy();
        draw.loadInimigo(this.inimigoAtual);
        this.temInimigoEmTela = true;
        this.setEventListener();

        this.vida = this.inimigoAtual.vida;
        draw.mudarModoBoss(this.inimigoAtual.boss);
    }

    //faz literalmente a msm coisa LOL XD
    async trocarInimigo(){
        this.inimigoAtual = await Enemies.getProxEnemy();
        draw.loadInimigo(this.inimigoAtual);
        this.temInimigoEmTela = true;
        this.setEventListener();

        this.vida = this.inimigoAtual.vida;
        draw.mudarModoBoss(this.inimigoAtual.boss);
    }

    apagarInimigos(){
        this.inimigoAtual = null;
        this.temInimigoEmTela = false;
        draw.clearInimigo();
    }

    setEventListener(){
        const inimigoEl = document.querySelector(".enemyEl");
        inimigoEl.addEventListener("click", (event)=>{
            if(this.temInimigoEmTela){
                this.clique(event);
            }
        });
    }

    async clique(event){
        this.vida -= 1;
        draw.mostrarNumeroClick(1, "-", event);
        draw.atualizarVidaInimigo(this.vida);
        this.player.somaClicks();

        if(this.vida <= 0){
            draw.addChatMensage(this.inimigoAtual.name, this.inimigoAtual.frase)
            await this.trocarInimigo();
            this.player.somaInimigosDerrotados();
        }
    }

    static async getProxEnemy(){
        const PLAYER_DATA = localStorage.getDados();
    
        if(PLAYER_DATA.zombiesMortos % 10 == 0 && PLAYER_DATA.zombiesMortos != 0){
            const BOSSES = await fetcher.getBosses();
            const BOSSES_VEC = BOSSES.bosses;
            let boss = utils.randomVec(BOSSES_VEC);
    
            return boss;
        } else {
            const INIMIGOS = await fetcher.getEnemies();
            const INIMIGOS_VEC = INIMIGOS.enemys;
            let inimigo = utils.randomVec(INIMIGOS_VEC);   
            
            return inimigo;
        }
    }
}