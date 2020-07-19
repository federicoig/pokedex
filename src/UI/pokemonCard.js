import { requestPokemon } from "../service/services.js"

export const info = document.querySelector("#info")

export function setCardsHandlers(){
    const cards = document.querySelectorAll(".card")
    
    cards.forEach( card => {
        const pokemon = card.textContent.trim()

        card.addEventListener("click", async() => {
            info.innerHTML = "Loading..."
            try {
                console.log(await requestPokemon(pokemon))
                info.innerHTML = await requestPokemon(pokemon)

            } catch (error) {

                info.innerHTML = "ERROR 404: POKEMON NOT FOUND"
                console.error(error)
            }

        })
    })
}

