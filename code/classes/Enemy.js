export class Enemy{
    constructor(enemy){
        this.nome = enemy.name;
        this.inicialVida = enemy.vida;
        this.vida = enemy.vida;
        this.setEventListener();
    }

    setEventListener(){
        const inimigoEl = document.querySelector(".enemyEl");
        inimigoEl.addEventListener("click", ()=>{
            this.clique();
        })
    }

    clique(){
        this.vida -= 1;
        console.log(this.vida);
    }

    morrer(){

    }

    trocarInimigo(){

    }

    atualizarBarraVida(){
        
    }
}