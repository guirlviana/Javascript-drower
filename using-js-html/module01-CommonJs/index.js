const Planet = require('./planet')
const solarSystem = require('./solarSystem')
const moment = require('moment')

const earth = new Planet("Terra", 50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 144800000))
solarSystem.planets.push(new Planet("Big Planet", 444800000))
solarSystem.planets.push(new Planet("Hot-Dog", 100000))

console.log(solarSystem);
console.log(moment().format("hh:mm - DD/MM/YYYY"))