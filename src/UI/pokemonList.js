import { setCardsHandlers } from "./pokemonCard.js" 

export function setupPokemonList(pokemon){
    const list = document.querySelector("#list")
    const cards = document.querySelectorAll(".card")

    const MAX_CARDS_NUMBER = 20

    if(cards.length === MAX_CARDS_NUMBER){
        list.innerHTML = "Loading..."
    }

    const card = `
        <div class="card">
            <h1>${pokemon.name}</h1>
        </div>
    `

    list.innerHTML += card
    setCardsHandlers()    
}