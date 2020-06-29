import { handlePokemonInfo } from "../handlePokemonInfo/info.js"
import { navAPI } from "../UI/nav.js"

export async function getPokemonInfo(){
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then( response => response.json())
        .then( function(api) {
            navAPI(api.previous, api.next)
            Object.values(api.results).forEach( (pokemon) => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then( pokemon => {
                        const image = pokemon.sprites.front_default
                        handlePokemonInfo(pokemon.name, pokemon.id, pokemon.types, image)
                    })
            })
        })
        .catch( error => console.error(error))
}

