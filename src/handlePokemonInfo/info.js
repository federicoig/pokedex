import { createPokemonCard } from "../UI/card.js"

function checkSecondaryType(types){
    const primaryType = types[0].type.name

    if(types[1]){
        const secondaryType = types[1].type.name

        return [primaryType, secondaryType]    
        
    }
    else {
        return [primaryType]
    }
}

let array = []

export function handlePokemonInfo(name, id, types, image){
    array.push(id)
    array.sort( (a, b) => a - b)
    
    const upperCaseFirstLetter = name.charAt(0).toUpperCase()
    name = upperCaseFirstLetter + name.slice(1)

    array.forEach(number => {
        if(number === id){
            createPokemonCard(name, id, checkSecondaryType(types), image)
        }
    })
}
