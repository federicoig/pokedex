const list = document.querySelector("#list")
const info = document.querySelector("#info")

function getPokemonInfo(){
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(data => data.json())
        .then(data => {
            list.innerHTML = ""

            data.results.forEach( result => {
                createCard(result)
            })
        })
}

function createCard(pokemon){
    const card = `
        <div class="card">
            <h1>${pokemon.name}</h1>
        </div>
    `
    list.innerHTML += card
    displayMoreInfo()    
}

function displayMoreInfo(){
    const cards = document.querySelectorAll(".card")
    
    cards.forEach( card => {
        const pokemon = card.textContent.trim()

        card.addEventListener("click", () => {
            info.innerHTML = "Loading..."
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(data => data.json())
                .then(pokemon => {
                    const primaryType = pokemon.types[0].type.name
                    const sprite = pokemon.sprites.front_default

                    if(pokemon.types[1]){
                        var secondaryType = pokemon.types[1].type.name
                    }

                    const pokemonInfo = `
                        <div class="pokemon">
                            <img alt="This is a Pokemon" src="${sprite}"/>
                            <div class="pokemon-info">
                                <span class="id">#${pokemon.id}</span>
                                <h1 class="name">${pokemon.name}</h1>
                                <h4>Types</h4>
                                <div class="types">
                                    <span class="type ${primaryType}">${primaryType}</span>
                                    ${pokemon.types[1] ? `<span class="type ${secondaryType}">${secondaryType}</span>` : ""}     
                                </div>
                                <h5>Stats</h5>
                                <div class="wrapper">
                                    <div class="stats">
                                        <span>HP: ${pokemon.stats[0].base_stat}</span>
                                        <span>Attack: ${pokemon.stats[1].base_stat}</span>
                                        <span>Defense: ${pokemon.stats[2].base_stat}</span>
                                    </div>
                                    <div class="more-stats"> 
                                        <span>Special Attack: ${pokemon.stats[3].base_stat}</span>
                                        <span>Special Defense: ${pokemon.stats[4].base_stat}</span>
                                        <span>Speed: ${pokemon.stats[5].base_stat}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `

                    info.innerHTML = pokemonInfo

                })
        })
    })
}

getPokemonInfo()

    