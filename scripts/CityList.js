import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        const city = cities.find(oneCity => oneCity.id === walker.cityId)
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

