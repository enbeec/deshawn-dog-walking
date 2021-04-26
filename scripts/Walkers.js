import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

// when you click a walker, display their service area
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            // extract the walker id from the id property of the list item
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const city = cities.find(oneCity => oneCity.id === walker.cityId)
                    window.alert(`${walker.name} services ${city.name}`)
                }
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

