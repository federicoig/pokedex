
export async function getPokemon(pokemon){
    const pokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(data => data.json())
    return pokemonInfo
} 
