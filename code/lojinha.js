document.addEventListener("DOMContentLoaded", function() {
    let botaoEl = document.querySelector('#alterna-menu');
    let bodyEl = document.querySelector('body');

    function alternaMenu() {
        bodyEl.classList.toggle('menu-visivel');
    }

    botaoEl.addEventListener('click', alternaMenu);
});
