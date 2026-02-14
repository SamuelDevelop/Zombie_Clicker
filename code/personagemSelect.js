let idAtual = 0;

function avancar(){
    const TAMANHO = getAllPersonagens().length;

    if(idAtual + 1 < TAMANHO){
        idAtual += 1;
    } else {
        idAtual = 0;
    }

    changePersonagemViewHTML(idAtual);
}

function recuar(){
    const TAMANHO = getAllPersonagens().length;

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

function personagemViewHTML(id){
    const PERSONAGENS = getAllPersonagens();
    const PERSONAGEM = PERSONAGENS[id];
    const STRING = `
            <img src="${getPersonagemSprite(PERSONAGEM)}">
            <div class="personagem-dados">
                <h3>${getPersonagemName(PERSONAGEM)}</h3>
                <p>${getPersonagemDescricao(PERSONAGEM)}</p>
            </div>

    `;

    return STRING;
}

function getAtualPersoangem(){
    const PERSONAGENS = getAllPersonagens();
    return PERSONAGENS[idAtual];
}