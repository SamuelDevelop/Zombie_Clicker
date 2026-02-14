function loadStatus(){
    const PAINEL_STATUS = document.querySelector(".status");
    const DADOS = getDados();

    PAINEL_STATUS.innerHTML = 
    `
        <div class="status-jogador">
            <img id="espadaAtual" src="images/Espada_de_piedra.webp" width="50px" height="50px">
            <p id="dano_atual">${DADOS.danoAtual}</p>
        </div>
        <div class="status-jogador">
            <img src="images/click.webp" width="50px" height="50px">
            <p id="cliques">${DADOS.clicks}</p>
        </div>
        <div class="status-jogador">
            <img src="IMG/inimigos/zombie-mine.gif" width="50px" height="50px">
            <p id="zumbis_mortos">${DADOS.zombiesMortos}</p>
        </div>
    `;
}

loadStatus();