import { getPokemonInfo } from "./PokemonAPI/getAPI.js"

async function beginProcess(){
    await getPokemonInfo()
}

beginProcess()