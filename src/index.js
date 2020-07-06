import { navThroughPages } from "./navigation/nav.js"
import { loadFirstPage } from "./api/loadPage.js"
import { searchPokemon } from "./search/searchPokemon.js"

function initialize(){
    loadFirstPage()
    navThroughPages()
    searchPokemon()
}

initialize()