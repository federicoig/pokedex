import { displayInfo } from "./displayInfo.js" 

export function createCard(pokemon){
    const list = document.querySelector("#list")
    const cards = document.querySelectorAll(".card")

    if(cards.length === 20){
        list.innerHTML = "Loading..."
    }

    const card = `
        <div class="card">
            <h1>${pokemon.name}</h1>
        </div>
    `

    list.innerHTML += card
    displayInfo()    
}