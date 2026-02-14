
function toogleEnemyHTML(inimigo){
    const AREA = document.querySelector(".clicker-area");
    
    AREA.innerHTML = 
    `
        <h2 class="nome-inimigo">${inimigo.nome}</h2>
        <img class="imagem-inimigo" src="${inimigo.sprite}" onclick="clique()">
        <div class="barra-vida"></div>
    `;

    updateAtualInimigo(inimigo);
    atualizarVida(inimigo.vida, inimigo.vida);
}

function chooseNewEnemy(){
    const PLAYER_DATA = getDados();
    let inimigo = null;

    if(PLAYER_DATA.zombiesMortos % 10 == 0 && PLAYER_DATA.zombiesMortos != 0){
        const ALL_BOSSES = getAllBosses();
        inimigo = randomVec(ALL_BOSSES);
    }

    else {
        const ALL_ENEMYS = getAllEnemys();
        inimigo = randomVec(ALL_ENEMYS);
    }
    
    inimigo.vida = inimigo.vida * PLAYER_DATA.fator;

    return inimigo;
}