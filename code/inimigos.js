const INIMIGOS = 
[
    {
        nome: "Zombie",
        sprite: "IMG/inimigos/zombie1.gif",
        vidaTotal: 100,
        vida: 100
    }
]

function getAllEnemys(){
    return INIMIGOS;
}

function atualizarVida(total, atual) {
    
    if (atual < 0) atual = 0;
    if (atual > total) atual = total;

    let porcentagem = (atual / total) * 100;

    const barra = document.querySelector(".barra-vida");

    barra.style.background = `
        linear-gradient(to right, var(--verde1) ${porcentagem}%, var(--verde2) ${porcentagem}%)
    `;
}
