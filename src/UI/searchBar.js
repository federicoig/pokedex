import { requestPokemon } from "../service/services.js"

const searchInput = document.querySelector(".search")
const info = document.querySelector("#info")

export function setupSearchBar(){
    searchInput.addEventListener("keydown", async(event) => {
        const ENTER_KEY = 13
        
        if (event.keyCode === ENTER_KEY){
            const pokemon = searchInput.value
            info.innerHTML = "Loading..."

            info.innerHTML = await requestPokemon(pokemon)
        }
    })
}