import * as localStorage from "./localStorage.js";
import * as popUp from "../view/popUp.js";

export function criar(nameSelected, characterSelected){
    console.log(nameSelected, characterSelected);
    localStorage.criarSave(nameSelected, characterSelected);
    const string = 
    `
        <b>${nameSelected}</b> foi registrado com sucesso!
    `;
    popUp.openPopUp("Aviso", string, 0);
}

export function preDeletar(){
    popUp.openPopUp("Você Realmente deseja deletar seu Save?", `<button id="botaoDeletarSave" >Desejo Deletar</button>`, 1);
    
    let btnDeletar = document.getElementById("botaoDeletarSave");
    btnDeletar.addEventListener("click", ()=>{
        deletar();
    });

}

function deletar(){
    localStorage.deletarDados();
    location.reload();
}