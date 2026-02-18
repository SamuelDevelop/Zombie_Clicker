import * as localStorage from "../controll/localStorage.js";
import * as filter from "../controll/filter.js";
import * as enemiesControll from "../controll/enemies.js";
import { Enemy } from "../classes/Enemy.js";


const TELA = document.querySelector(".conteudo-principal");

export async function apresentar(){
    const PLAYER_DATA = localStorage.getDados();
    const INIMIGO_ATUAL = await enemiesControll.getProxEnemy();
    console.log(INIMIGO_ATUAL);

    const playerPers = await filter.getCharacterById(PLAYER_DATA.personagem);
    const playerImage = playerPers.image;

    const enemyImage = INIMIGO_ATUAL.sprite;
    
    let string = 
    `
        <section>
            <article class="part-game player">
                <img src="../${playerImage}">
                <p><i class="fa-solid fa-user"></i> <b>Você</b></p>
            </article>

            <article class="part-game atualEnemy">
                <img class="enemyEl" src="../${enemyImage}">
                <p><i class="fa-solid fa-skull-crossbones"></i> ${INIMIGO_ATUAL.name}<p>
                <p><i class="fa-solid fa-heart"></i> <b> ${INIMIGO_ATUAL.vida}</b></p>
            </article>
        </section>
        <section>
            <article class="part-life">
                <img src="../images/iu/coracao.gif">
            </article>
        </section>
    `
    ;
    
    TELA.innerHTML = string;
    let InimigoGlobal = new Enemy(INIMIGO_ATUAL);
}