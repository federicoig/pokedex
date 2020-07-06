import { createCard } from "../UI/createCard.js"

export function loadFirstPage(){
    const list = document.querySelector("#list")

    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(data => data.json())
        .then(data => {
            list.innerHTML = ""

            data.results.forEach( result => {
                createCard(result)
            })
        })
}

export function loadPages(page){
    fetch(page)
        .then(data => data.json())
        .then(data => {
                    
            data.results.forEach( result => {
                createCard(result)
            })
        })
}