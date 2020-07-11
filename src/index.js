import { setupNavigation } from "./UI/navigation.js"
import { requestPage } from "./service/services.js"
import { setupSearchBar } from "./UI/searchBar.js"

function initialize(){
    const FIRST_PAGE = "0"

    requestPage(FIRST_PAGE)
    setupNavigation()
    setupSearchBar()
}

initialize()