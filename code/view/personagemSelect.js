import * as fetcher from "../controll/fetcher.js"

let idAtual = 0;

export async function avancar(){
    const PERSONAGENS = await fetcher.getCharacters();
    const TAMANHO = PERSONAGENS.characters.length;
    
    idAtual = (idAtual + 1) % TAMANHO;
    
    changePersonagemViewHTML(idAtual);
}

export async function recuar(){
    const PERSONAGENS = await fetcher.getCharacters();
    const TAMANHO = PERSONAGENS.characters.length;

    if(idAtual - 1 > -1){
        idAtual -= 1;
    } else {
        idAtual = TAMANHO - 1;
    }

    changePersonagemViewHTML(idAtual);
}

async function changePersonagemViewHTML(id){
    const TELA = document.querySelector(".personagem-change");
    let STRING = await show(id);
    TELA.innerHTML = `${STRING}`;
}

export async function show(id = 0){
    const PERSONAGENS = await fetcher.getCharacters();

    const PERSONAGEM = PERSONAGENS.characters[id];
    
    const STRING =
    `
            <img src="../${PERSONAGEM.image}">
            <div class="personagem-dados">
                <h3>${PERSONAGEM.name}</h3>
                <p><i>"${PERSONAGEM.description}"</i></p>
            </div>
    `;

    return STRING;
}

export async function getSelected(){
    const PERSONAGENS = await fetcher.getCharacters();
    const PERSONAGEM = await PERSONAGENS.characters[idAtual];
    return PERSONAGEM.id;
}