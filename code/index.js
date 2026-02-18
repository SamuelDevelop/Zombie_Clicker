import { createGenericHeader } from "./view/header.js";
import { getCharacterById } from "./controll/filter.js"
import * as personagemSelect from "./view/personagemSelect.js";
import * as localStorage from "./controll/localStorage.js";
import * as save from "./controll/save.js";

const camadaVIEW = document.querySelector(".view");
const camadaOPCOES = document.querySelector(".options");

function startPage(){
    createGenericHeader();
    loadPage();
}

startPage();

async function loadPage(){
    const DADOS = localStorage.getDados();

    if(DADOS == null){
        camadaVIEW.innerHTML = `
            <div class="form">
                <h2>Escolha para Começar:</h2>
                <section>
                    <article class="name-input">
                        <h3>Seu NickName:</h3>
                        <input type="text" id="nickname" value="jogador" requerid>
                    </article>
                    <article class="character-input">
                        <h3>Seu Personagem:</h3>
                        <div class="personagem-change">
                            ${await personagemSelect.show(0)}
                        </div>
                        <div class="botoes-alinhados">
                            <button id="botaoRecuar">
                                <i class="fa-solid fa-caret-left"></i>
                            </button>
                            <button id="botaoAvancar">
                                <i class="fa-solid fa-caret-right"></i>
                            </button>
                        </div>
                    </article>
                </section>
            </div>
        `;

        camadaOPCOES.innerHTML = `
            <button id="botaoRegistrar">
                <i class="fa-regular fa-circle-check"></i>
            </button>
        `;

        let btnAvancar = document.getElementById("botaoAvancar");
        let btnRecuar = document.getElementById("botaoRecuar");
        let btnRegistrar = document.getElementById("botaoRegistrar");

        btnAvancar.addEventListener("click", ()=>{ personagemSelect.avancar()});
        btnRecuar.addEventListener("click", ()=>{ personagemSelect.recuar()});
        btnRegistrar.addEventListener("click", ()=>{dataRegister()});
    }

    else {

        const name = DADOS.nickname;
        const playerPers = await getCharacterById(DADOS.personagem);
        const image = playerPers.image;
        camadaVIEW.innerHTML = 
        `<div class="save-view">
            <h2> <i class="fa-regular fa-floppy-disk"></i> Seu Save:</h2>
            <h2>${name}</h2>
            <img src="../${image}">
            <section>
                <p><i class="fa-solid fa-arrow-pointer"></i>:${DADOS.clicksTotais}</p>
                <p><i class="fa-solid fa-skull"></i>:${DADOS.zombiesMortos}</p>
                <p><i class="fa-regular fa-hand-back-fist"></i>:${DADOS.danoAtual}</p>
            </section>
        </div>`

        camadaOPCOES.innerHTML = `
            <div class="botoes-alinhados">
                <button id="botaoJogar">
                    <i class="fa-regular fa-circle-play"></i>
                </button>
                <button id="botaoDeletar">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        let btnJogar = document.getElementById("botaoJogar");
        let btnDeletar = document.getElementById("botaoDeletar");

        btnJogar.addEventListener("click", ()=>{jogar()});
        btnDeletar.addEventListener("click", ()=>{dataDelete()});
    }
}

async function dataRegister(){
    const character = await personagemSelect.getSelected();
    const nickname = document.getElementById("nickname").value;
    save.criar(nickname, character);
    await loadPage();
}

function jogar(){
    window.location = "game.html";
}

function dataDelete(){
    save.preDeletar();
}