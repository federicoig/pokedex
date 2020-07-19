import { loadPage } from "../api/loadPage.js"
import { getPokemon } from "../api/loadPokemon.js"
import { handlePokemonInfo } from "../handlePokemonInfo/handlePokemonInfo.js"

export function requestPage(offset){
    try {
        loadPage(offset)
    }
    catch (error) {
        console.error(error)
    }
}

export async function requestPokemon(pokemon){
    const pokemonInfo = await getPokemon(pokemon)
    return handlePokemonInfo(pokemonInfo)
}