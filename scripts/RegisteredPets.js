import { getPets, getWalkers } from "./database.js"

// QUESTION: pro/con of importing data in top scope of module. Does `pets` just persist (not get GC'd) because I did it this way?
const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    clickEvent => {
        const itemClicked = clickEvent.target
        // if clicked a pet of id petId
        if (itemClicked.id.startsWith("pet")) {
            let [,petId] = itemClicked.id.split("--")
            // QUESTION: is this an abuse of dynamic typing?
            petId = parseInt(petId)

            // could also be:
            // const pet = pets.find(onePet => onePet.id === petId)
            const pet = pets.find(
                onePet => {
                    return onePet.id === petId
                }
            ) // but this is more readable for now
            // okay I tried the implicit return way here :)
            const walker = walkers.find(oneWalker => oneWalker.id === pet.walkerId)

            window.alert(`${pet.name} is being walked by ${walker.name}`)
        }
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

