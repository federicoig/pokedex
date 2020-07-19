import { setupPokemonList } from "../UI/pokemonList.js"

export function loadPage(offset){
    const list = document.querySelector("#list")

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        .then(data => data.json())
        .then(data => {
            list.innerHTML = ""

            data.results.forEach( result => {
                setupPokemonList(result)
            })
        })
    
}

