import { getPokemonInfo } from "../PokemonAPI/getNextPages.js"

export function navAPI(previousPage, NextPage){

    const previousButton = document.querySelector(".previous-button")
    const nextButton = document.querySelector(".next-button")

    if(previousPage){
        previousButton.addEventListener("click", function() {
            getPokemonInfo(previousPage)
        })
    }

    nextButton.addEventListener("click", function() {
        getPokemonInfo(NextPage)
    })
}