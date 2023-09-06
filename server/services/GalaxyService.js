import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxyService {


    async getGalaxys(query) {
        const galaxys = await dbContext.Galaxy.find(query)
        return galaxys
    }
    async createGalaxy(body) {
        const newGalaxy = await dbContext.Galaxy.create(body)
        return newGalaxy
    }

    async editGalaxy(galaxyId, body) {
        const foundGalaxy = await dbContext.Galaxy.findById(galaxyId)
        if (!foundGalaxy) throw new BadRequest(`Unable to find galaxy at ${galaxyId}`)
        foundGalaxy.name = body.name != undefined ? body.name : foundGalaxy.name
        foundGalaxy.type = body.type || foundGalaxy.type
        foundGalaxy.imgUrl = body.imgUrl || foundGalaxy.imgUrl

        await foundGalaxy.save()
        return foundGalaxy

    }

    async deleteGalaxy(galaxyId) {
        const galaxyToDelete = await dbContext.Galaxy.findById(galaxyId)
        if (!galaxyToDelete) throw new BadRequest(`No galaxy to delete at ${galaxyId}`)
        await galaxyToDelete.remove()
        return `removed the galaxy at ${galaxyId}`

    }

}

export const galaxyService = new GalaxyService()