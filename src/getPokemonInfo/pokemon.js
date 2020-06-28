import { handlePokemonInfo } from "../handlePokemonInfo/info.js"

export async function getPokemonInfo(api){
    fetch(api)
        .then( response => response.json())
        .then( function(api) {
            Object.values(api.results).forEach(pokemon => {
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
