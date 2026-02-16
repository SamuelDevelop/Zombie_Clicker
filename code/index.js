import * as functions from "./view/personagemSelect.js";

const camadaVIEW = document.getElementById("View");
const camadaOPCOES = document.getElementById("Opcoes");

async function loadPage(){
    const DADOS = getDados();

    if(DADOS == null){
        camadaVIEW.innerHTML = `
            <div class="formulario">
                <h2>Escolha para Começar:</h2>
                <h3>Apelido:</h3>
                <input type="text" id="nickname" value="jogador" requerid>
                <h3>Seu Personagem:</h3>
                <div class="personagem-change">
                    ${await functions.personagemViewHTML("bowser")}
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

await loadPage();

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




function play(){
    setTimeout(()=>{window.location = "clicker.html";}, 2000);
}