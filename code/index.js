const camadaVIEW = document.getElementById("View");
const camadaOPCOES = document.getElementById("Opcoes");

function loadPage(){
    const DADOS = getDados();

    if(DADOS == null){
        camadaVIEW.innerHTML = `
            <div class="formulario">
                <h2>Escolha para Começar:</h2>
                <h3>Apelido:</h3>
                <input type="text" id="nickname" value="jogador" requerid>
                <h3>Seu Personagem:</h3>
                <div class="personagem-change">
                    ${personagemViewHTML(0)}
                </div>
                <div class="botoes-alinhados">
                    <button onclick="recuar()"><i class="fa-solid fa-caret-left"></i></button>
                    <button onclick="avancar()"> <i class="fa-solid fa-caret-right"></i> </button>
                </div>
            </div>
        `;

        camadaOPCOES.innerHTML = `
            <button onclick="registrar()"><i class="fa-solid fa-circle-play"></i></button>
        `;
    }

    else {
        const SAVE = getDados();
        camadaVIEW.innerHTML = `<div class="save-view">
            <h3>${SAVE.nickname}</h3>
            <img src="${getPersonagemSprite(SAVE.personagem)}">
        </div>`

        camadaOPCOES.innerHTML = `
            <div class="botoes-alinhados">
                <button onclick="play()">Jogar</button>
                <button onclick="deletar()">Deletar</button>
            </div>
        `;
    }
}

loadPage();

function registrar(){
    const NOME = document.getElementById("nickname").value.trim();

    if(!NOME || NOME == ""){
        openPopUp("Erro ao Registrar", "Por favor insira um nome Válido!...", 1);
    }
    else{
        criarSave(NOME, getAtualPersoangem());
        openPopUp("Sucesso!", `${NOME} foi registrado com sucesso!`, 0);
        setTimeout(()=>{location.reload();}, 1000);
    }
}

function deletar(){
    openPopUp("Você Realmente deseja deletar seu Save?", `<button onclick="deletarDados()">Apagar</button>`, 2);
}


function sortearElemento(vetor){
    const indice = Math.floor(Math.random() * vetor.length);
    return vetor[indice];
}

const FALAS = ["Protejar o mundo é nossa missão!",
               "Tem vários zumbis que não parecem zumbis...",
               "Por que tantos vivos parecem zumbis?",
               "Armas mais poderosas dão mais dinheiro",
               "Clique em Zumbis! Isso é um Cliquer!",
               "Olhe para mim, aquele cara... ele não",
               "Agora que é um cadente sente saudade da vida antiga?",
               "clicar, clicar, clicar......",
               "...dizem que se você chegar a 1 milhão de cliques algo bizarro acontece...",
]

function play(){
    openPopUp("Bora Jogar!", `${sortearElemento(FALAS)}`, 0);
    setTimeout(()=>{window.location = "clicker.html";}, 2000);
}