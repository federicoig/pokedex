import { handlePokemonInfo } from "../handleInfo/handlePokemonInfo.js"
import { info } from "../UI/displayInfo.js" 

export function loadPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(data => data.json())
        .then(pokemon => {
            info.innerHTML = handlePokemonInfo(pokemon)
        })
        .catch( (error) => {
            console.error(error)
            info.innerHTML = "ERROR 404: POKEMON NOT FOUND"
        })
} 
