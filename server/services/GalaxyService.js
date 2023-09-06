import { dbContext } from "../db/DbContext.js"

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
        if(!foundGalaxy) throw new Error(`Unable to find galaxy at ${galaxyId}`)
        foundGalaxy.name = body.name != undefined ? body.name : foundGalaxy.name
        foundGalaxy.type = body.type || foundGalaxy.type
        foundGalaxy.imgUrl = body.imgUrl || foundGalaxy.imgUrl

        await foundGalaxy.save()
        return foundGalaxy

    }

}

export const galaxyService = new GalaxyService()