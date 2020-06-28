import { createPokemonCard } from "../createPokemonCard/card.js"

export function handlePokemonInfo(name, id, types, image){
    id = String(id)

    const upperCaseFirstLetter = name.charAt(0).toUpperCase()
    name = upperCaseFirstLetter + name.slice(1)

    function checkSecondaryType(){
        const primaryType = types[0].type.name

        if(types[1]){
            const secondaryType = types[1].type.name

            return [primaryType, secondaryType]    
            
        }
        else {
            return [primaryType]
        }
    }

    createPokemonCard(name, id, checkSecondaryType(), image)
}