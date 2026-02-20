import * as localStorage from "../controll/localStorage.js";
import * as filter from "../controll/filter.js";
import * as utils from "../controll/utils.js";

const TELA = document.querySelector(".conteudo-principal");

export async function apresentar(){
    const PLAYER_DATA = localStorage.getDados();
    
    const playerPers = await filter.getCharacterById(PLAYER_DATA.personagem);
    const playerImage = playerPers.image;
    
    let string = 
    `
        <section>
            <article class="part-game player">
                <img src="../${playerImage}">
                <p><i class="fa-solid fa-user"></i> <b>Você</b></p>
            </article>

            <article class="part-game atualEnemy"></article>
        </section>

        <section>
            <article class="part-life"></article>
        </section>

        <div class="number-counter-conteiner"></div>
        <div class="chat-conteiner"></div>
    `
    ;
    
    TELA.innerHTML = string;
}

export function loadInimigo(inimigo){
    const atualEnemyEl = document.querySelector(".atualEnemy");

    atualEnemyEl.innerHTML =
    `
        <h3>${inimigo.name}</h3>
        <img class="enemyEl" src="../${inimigo.sprite}">
        <p class="enemyLife"><i class="fa-solid fa-heart"></i> <b> ${inimigo.vida}</b></p>
    `;
}

export function clearInimigo(){
    const atualEnemyEl = document.querySelector(".atualEnemy");

    atualEnemyEl.innerHTML = 
    `
        <p><i class="fa-solid fa-skull-crossbones"></i> 
            Sem Algum Inimigo!
        <p>
    `;
}

export function atualizarVidaInimigo(vida){
    const enemyLifeEl = document.querySelector(".enemyLife");

    enemyLifeEl.innerHTML = `<i class="fa-solid fa-heart"></i> <b> ${vida}</b>`;
}

export function mudarModoBoss(boss){
    const body = document.body;
    const temaBoss = "images/iu/ground-red.svg";
    const temaPadrao = "images/iu/ground.svg"
    
    body.style.backgroundImage = `url("../${boss ? `${temaBoss}` : `${temaPadrao}`}")`;
}

export function mostrarNumeroClick(num, sinal = "+", evento){
    const conteiner = document.querySelector(".number-counter-conteiner");

    let numeroEl = document.createElement("p");
    numeroEl.innerHTML = `${sinal}${num}`;
    numeroEl.classList.add("number-counter");

    numeroEl.style.left = evento.pageX + utils.randomInt(10, 50) + "px";
    numeroEl.style.top = evento.pageY + utils.randomInt(10, 50) + "px";
    conteiner.appendChild(numeroEl);
    
    numeroEl.style.display = "block";
    numeroEl.style.opacity = 1;

    setTimeout(()=>{
        numeroEl.style.opacity = 0;
    }, 500);

    setTimeout(()=>{
        numeroEl.style.display = "none";
        numeroEl.remove();
    }, 600);
}

export function addChatMensage(autor, msg){
    const conteiner = document.querySelector(".chat-conteiner");

    let chatEl = document.createElement("p");
    chatEl.innerHTML = `<b>${autor}:</b> ${msg}`;
    chatEl.classList.add("chat");

    conteiner.appendChild(chatEl);
    
    chatEl.style.display = "block";
    chatEl.style.opacity = 1;

    setTimeout(()=>{
        chatEl.style.opacity = 0;
    }, 5000);

    setTimeout(()=>{
        chatEl.style.display = "none";
        chatEl.remove();
    }, 5100);
}