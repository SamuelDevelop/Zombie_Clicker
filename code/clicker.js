let atualInimigo = null;

function updateAtualInimigo(inimigo){
    atualInimigo = inimigo;
}

function getAtualInimigo(){
    return atualInimigo;
}

function clique(){
    const INIMIGO = getAtualInimigo();
    const DANO = getDados().danoAtual;
    if(INIMIGO.vida - DANO <= 0){
        let novoInimigo = chooseNewEnemy();
        toogleEnemyHTML(novoInimigo);
    }
    else{
        INIMIGO.vida -= DANO;
        atualizarVida(INIMIGO.vidaTotal, INIMIGO.vida)
        updateAtualInimigo(INIMIGO);
    }

    aumentarCliques();
    loadStatus();
}