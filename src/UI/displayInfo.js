import { loadPokemon } from "../api/loadPokemon.js"

export const info = document.querySelector("#info")

export function displayInfo(){
    const cards = document.querySelectorAll(".card")
    
    cards.forEach( card => {
        const pokemon = card.textContent.trim()

        card.addEventListener("click", () => {
            info.innerHTML = "Loading..."
            loadPokemon(pokemon)
        })
    })
}

