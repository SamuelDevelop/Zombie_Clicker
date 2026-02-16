export async function JSONFetcher(tipo) {
    try {
        console.log(`../json/${tipo}.json`);
        const response = await fetch(`../json/${tipo}.json`);
        const data = await response.json();
        console.log(data);

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