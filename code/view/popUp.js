const POPUP = document.getElementById("popUp");
const BLUR_BOX = document.querySelector(".blur-box");

const estadosImg = ["images/iu/flor.gif", "images/iu/choro.gif", "images/iu/porco.webp"];
const estadosStyle = ["var(--popBlue)", "var(--popRed)", "var(--popGolden)"];

export function openPopUp(titulo, msg, estado){
    let string = `
        <img src="../${estadosImg[estado]}" width="100px">
        <h2>${titulo}</h2>
        <p>${msg}</p>
        <button id="botaoFechar">
            <i class="fa-regular fa-circle-xmark"></i>
        </button>
    `;

    POPUP.style.backgroundImage = estadosStyle[estado];
    POPUP.innerHTML = string;

    let btnFechar = document.getElementById("botaoFechar");
    btnFechar.addEventListener("click", ()=>{closePopUp()});

    POPUP.style.opacity = 0;
    POPUP.style.display = "flex";
    BLUR_BOX.style.display = "block";

    setTimeout(()=>{
        POPUP.style.opacity = 1;
        BLUR_BOX.style.opacity = 1;
    }, 250);
}

export function closePopUp(){
    POPUP.style.opacity = 1;
    setTimeout(()=>{
        POPUP.style.opacity = 0;
        BLUR_BOX.style.opacity = 0;
    }, 100);

    setTimeout(()=>{
        POPUP.style.display = "none";
        POPUP.innerHTML = "";
        BLUR_BOX.style.display = "none";
    }, 210);
}

