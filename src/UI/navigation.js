import { requestPage } from "../service/services.js"

const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
const list = document.querySelector("#list")

export function setupNavigation(){
    let offset = 0

    previousButton.addEventListener("click", () => {
        if(offset === 0){
            ""
        }
        else{
            offset -= 20
            list.innerHTML = ""
            requestPage(offset)
        }      
    })    
    
    nextButton.addEventListener("click", () => {
        offset += 20
        list.innerHTML = ""
        requestPage(offset)
    })   
} 