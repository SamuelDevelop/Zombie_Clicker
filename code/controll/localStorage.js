export function criarSave(nome, personagem){
    const PLAYER_DATA = {
        nickname: nome != "" ? nome : "jogador",
        personagem: personagem,
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

export function getDados(){    
    const raw = localStorage.getItem("ClickerData");
    if (raw === null) return null;

    try {
        return JSON.parse(raw);
    } catch (err) {
        console.error("Erro ao fazer parse do save:", err);
        return null;
    }
}

export function saveDados(dados){
    localStorage.setItem("ClickerData", JSON.stringify(dados));
}

export function deletarDados(){
    localStorage.removeItem("ClickerData");
    location.reload();
}