export const root = document.querySelector("#root")

export function createPokemonCard(name, id, types, image) {
    
    const card = `
    <li class="card">
        <div class="pokemon-name-type">
            <span class="pokemon-id">#${id}</span>
            <h4>${name}</h4>
            <div>
                <span class="badge badge-secondary">${types[0]}</span>
                ${types[1] ? `<span class="badge badge-secondary">${types[1]}</span>` : ""}            
            </div>
        </div>
        <img src="${image}"/>
    </li>
    `
    
    if(root.childElementCount === 20){
        root.innerHTML = ""
    }

    return root.insertAdjacentHTML("beforeend", card)
}
