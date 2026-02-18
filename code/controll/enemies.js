import * as fetcher from "./fetcher.js";
import * as localStorage from "./localStorage.js";
import * as utils from "./utils.js";


export async function getProxEnemy(){
    const PLAYER_DATA = localStorage.getDados();

    if(PLAYER_DATA.zombiesMortos % 20 == 0 && PLAYER_DATA.zombiesMortos != 0){
        const BOSSES = await fetcher.getBosses();
        const BOSSES_VEC = BOSSES.bosses;
        let boss = utils.randomVec(BOSSES_VEC);

        return boss;
    } else {
        const INIMIGOS = await fetcher.getEnemies();
        const INIMIGOS_VEC = INIMIGOS.enemys;
        let inimigo = utils.randomVec(INIMIGOS_VEC);   
        
        return inimigo;
    }
}