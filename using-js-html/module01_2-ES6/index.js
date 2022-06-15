import Planet from './planet'
import { convertAuToKM, AU_IN_KILOMETERS } from './planet_operations'


let planets = [
    new Planet("Mercurio", 0.39),
    new Planet("Venus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Jupiter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]

planets.forEach(planet => {
    let distanceFromSun = convertAuToKM(planet.auToSun).toFixed(2)
    console.log(`${planet.name} -> Au = ${planet.auToSun} / Km ${distanceFromSun}`)
})