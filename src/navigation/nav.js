import { loadPages } from "../api/loadPage.js"

const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
const list = document.querySelector("#list")

export function navThroughPages(){
    let offset = 0

    previousButton.addEventListener("click", () => {
        if(offset === 0){
            ""
        }
        else{
            offset -= 20
            list.innerHTML = ""
            loadPages(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        }      
    })    
    
    nextButton.addEventListener("click", () => {
        offset += 20
        list.innerHTML = ""
        loadPages(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    })   
} 