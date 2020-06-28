import { getPokemonInfo } from "./getPokemonInfo/pokemon.js"

async function beginProcess(){
    await getPokemonInfo("https://pokeapi.co/api/v2/pokemon")
}

beginProcess()