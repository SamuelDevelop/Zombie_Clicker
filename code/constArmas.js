const ARMAS = {
    arma1: {
        sprite: "images/Espada_de_piedra.webp",
        preco: 0,
        dano: 1,
        recompensa: 1
    },

    arma2: {
        sprite: "images/Espada_de_oro.webp",
        preco: 100,
        dano: 5,
        recompensa: 2
    },

    arma3: {
        sprite: "images/Diamond_Sword.webp",
        preco: 300,
        dano: 10,
        recompensa: 5
    },

    arma4: {
        sprite: "images/espadaroxinha.gif",
        preco: 500,
        dano: 50,
        recompensa: 6
    },

    arma5: {
        sprite: "images/Netherite_Sword.webp",
        preco: 800,
        dano: 100,
        recompensa: 8
    },

    arma6: {
        sprite: "images/espada suprema.gif",
        preco: 1000,
        dano: 250,
        recompensa: 10
    },

    arma7: {
        sprite: "images/deusessword.gif",
        preco: 2500,
        dano: 500,
        recompensa: 12
    },

    arma8: {
        sprite: "images/machadin.gif",
        preco: 5000,
        dano: 1000,
        recompensa: 15
    },

    arma9: {
        sprite: "images/luminite-sword.gif",
        preco: 8555,
        dano: 2500,
        recompensa: 20
    }
};

function getAllOfArmas(){
    return ARMAS;
}

function getArmaSprite(arma) {
    return ARMAS[arma]?.sprite || null;
}

function getArmaPreco(arma) {
    return ARMAS[arma]?.preco ?? null;
}

function getArmaDano(arma) {
    return ARMAS[arma]?.dano ?? null;
}

function getArmaRecompensa(arma) {
    return ARMAS[arma]?.recompensa ?? null;
}

function getAllOfArma(arma) {
    return ARMAS[arma] || null;
}
