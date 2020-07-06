import { loadPokemon } from "../api/loadPokemon.js"

const searchInput = document.querySelector(".search")
const info = document.querySelector("#info")

export function searchPokemon(){
    searchInput.addEventListener("keydown", (event) => {
        if (event.keyCode === 13){
            const pokemon = searchInput.value
            info.innerHTML = "Loading..."
            
            loadPokemon(pokemon)             
        }
    })
}