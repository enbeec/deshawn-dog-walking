import { getPets, getWalkers } from "./database.js"

// QUESTION: pro/con of importing data in top scope of module. Does `pets` just persist (not get GC'd) because I did it this way?
const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    clickEvent => {
        // TODO: finish this click event
        // if clicked a pet of id petId
        // get that pet from pets
        // find a walker with id === pet.walkerId
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

