const SECAO_ARMAS = document.getElementById("store");

function loadStore(){
    let stringHtml = `<div class="menu-lateral">`;
    const ALL_GUNS = getAllOfArmas();

    for (let gun in ALL_GUNS) {
        
        stringHtml += `
            <article class="espadinha">
                <img src="${getArmaSprite(gun)}">
                    <div class="preco_espadinha">
                        <img src="images/click.webp">
                        <p>$${getArmaPreco(gun)}</p>
                    </div>
            </article>
        `;
    };

    stringHtml += "</div>";

    SECAO_ARMAS.innerHTML = stringHtml;
}

loadStore();