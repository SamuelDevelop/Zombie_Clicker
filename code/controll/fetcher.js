export async function JSONFetcher(tipo) {
    try {
        const response = await fetch(`../json/${tipo}.json`);
        const data = await response.json();
        
        return data;
    }

    catch (err){
        console.log(`Objeto Vazio: ${err}`);
        return {};
    }
}

export async function getBosses() {
    return JSONFetcher("bosses");
}

export async function getEnemies() {
    return JSONFetcher("enemies");
}

export async function getGuns() {
    return JSONFetcher("guns");
}

export async function getCharacters() {
    return JSONFetcher("characters");
}