
function criarSave(NOME, PERSONAGEM){
    const PLAYER_DATA = {
        nickname: NOME,
        personagem: PERSONAGEM,
        clicks: 0,
        clicksTotais: 0,
        aumentoClicks: 1,
        danoAtual: 1,
        armaAtual: "base",
        zombiesMortos: 0,
        level: 1,
        fator: 1,
        danoDuplo: false,
        somadorContador: 1,
        tempoPadrao: 1,

        registroInimigos: [],
        armasDesbloqueadas: [],
    }
    
    localStorage.setItem("ClickerData", JSON.stringify(PLAYER_DATA));
}

function getDados(){    
    const raw = localStorage.getItem("ClickerData");
    if (raw === null) return null;

    try {
        return JSON.parse(raw);
    } catch (err) {
        console.error("Erro ao fazer parse do save:", err);
        return null;
    }
}

function aumentarCliques(){
    const DADOS = getDados();
    DADOS.clicks += DADOS.aumentoClicks;
    DADOS.clicksTotais += DADOS.aumentoClicks;
    saveDados(DADOS);
}

function saveDados(dados){
    localStorage.setItem("ClickerData", JSON.stringify(dados));
}

function deletarDados(){
    localStorage.removeItem("ClickerData");
    location.reload();
}