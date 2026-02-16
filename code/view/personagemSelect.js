import * as functions from "../fetcher.js"
import * as functionsFilter from "../filter.js"

let idAtual = 0;

async function avancar(){
    const TAMANHO = await functions.getCharacters().length;

    if(idAtual + 1 < TAMANHO){
        idAtual += 1;
    } else {
        idAtual = 0;
    }

    changePersonagemViewHTML(idAtual);
}

async function recuar(){
    const TAMANHO = await functions.getCharacters().length;

    if(idAtual - 1 > -1){
        idAtual -= 1;
    } else {
        idAtual = TAMANHO - 1;
    }

    changePersonagemViewHTML(idAtual);
}

function changePersonagemViewHTML(id){
    const TELA = document.querySelector(".personagem-change");
    TELA.innerHTML = `${personagemViewHTML(id)}`;
}

export async function personagemViewHTML(id){
    const PERSONAGEM = await functionsFilter.getCharacterById(id);
    console.log(PERSONAGEM);

    const STRING = `
            <img src="../${PERSONAGEM.image}">
            <div class="personagem-dados">
                <h3>${PERSONAGEM.name}</h3>
                <p>${PERSONAGEM.description}</p>
            </div>

    `;

    return STRING;
}

function getAtualPersoangem(){
    const PERSONAGENS = functions.getCharacters();
    return PERSONAGENS[idAtual];
}