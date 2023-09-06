import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PlanetService {

    async getPlanets(query) {
        const planets = await dbContext.Planet.find(query).populate('galaxy')
        return planets
    }
    async getPlanetsByGalaxyId(galaxyId) {
        const planets = await dbContext.Planet.find({ galaxyId }).populate('galaxy')
        return planets
    }

    async createPlanet(body) {
        const newPlanet = await dbContext.Planet.create(body)
        await newPlanet.populate('galaxy')
        return newPlanet
    }

    async editPlanet(planetId, body) {
        const foundPlanet = await dbContext.Planet.findById(planetId)
        if (!foundPlanet) throw new BadRequest(`no planet at ${planetId}`)

        foundPlanet.name = body.name || foundPlanet.name
        foundPlanet.size = body.size != undefined ? body.size : foundPlanet.size

        foundPlanet.save()
        return foundPlanet
    }

    async deletePlanet(planetId) {
        const planetToDelete = await dbContext.Planet.findById(planetId)
        if (!planetToDelete) throw new BadRequest(`no planet at ${planetId}`)

        await planetToDelete.remove()
        return `removed the planet at ${planetId}`
    }
}

export const planetService = new PlanetService()