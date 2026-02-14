const PERSONAGENS = ["bowser", "capitao", "goku", "homer", "labubu", "luffy", "megamen", "sonic", "yoda"];

const NOMES_PERSONAGENS = {
    bowser: "Bowser",
    capitao: "Capitão América",
    goku: "Goku (Base)",
    homer: "Homer Simpson",
    labubu: "Labubu",
    luffy: "Monkey D. Luffy",
    megamen: "MegaMan",
    sonic: "Sonic The Hedgehog",
    yoda: "Baby Yoda",
}

const DESCRICAO_PERSONAGENS = {
    bowser: "Após conquistar Peach, Bowser agora decidiu redimir-se eliminando todos os Zumbis da face da Terra.",
    capitao: "Após um acidente com o Dr.Estranho, Capitão América acaba parando num universo repleto de Zumbis.",
    goku: "...",
    homer: "Homer Simpson",
    labubu: "Labubu",
    luffy: "Monkey D. Luffy",
    megamen: "MegaMan",
    sonic: "Sonic The Hedgehog",
    yoda: "Baby Yoda",
}

function getAllPersonagens(){
    return PERSONAGENS;
}

function getPersonagemName(id){
    return NOMES_PERSONAGENS[id];
}

function getPersonagemDescricao(id){
    return DESCRICAO_PERSONAGENS[id];
}

function getPersonagemSprite(id){
    return `IMG/personagens/${id}.gif`;
}