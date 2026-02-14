const POPUP = document.getElementById("popUP");
const estadosImg = ["images/flor.gif", "images/choro.gif", "images/porco.webp"];
const estadosStyle = ["var(--popBlue)", "var(--popRed)", "var(--popGolden)"];

function openPopUp(titulo, msg, estado){
    let string = `
        <img src="${estadosImg[estado]}" width="100px">
        <h2>${titulo}</h2>
        <p>${msg}</p>
        <button onclick="closePopUp()">Fechar</button>
    `;

    POPUP.style.backgroundImage = estadosStyle[estado];
    POPUP.innerHTML = string;
    POPUP.style.opacity = 0;
    POPUP.style.display = "flex";
    setTimeout(()=>{POPUP.style.opacity = 1;}, 200);
}

function closePopUp(){
    POPUP.style.opacity = 1;
    setTimeout(()=>{POPUP.style.opacity = 0;}, 200);
    setTimeout(()=>{
        POPUP.style.display = "none";
        POPUP.innerHTML = "";
    }, 510);
}

