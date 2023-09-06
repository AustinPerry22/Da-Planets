import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxys')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxys)
            .put('/:galaxyId', this.editGalaxy)
            .delete('/:galaxyId', this.deleteGalaxy)
    }

    async getGalaxys(req, res, next) {
        try {
            const query = req.query
            const galaxys = await galaxyService.getGalaxys(query)
            res.send(galaxys)
        } catch (error) {
            next(error)
        }
    }
    async createGalaxy(req, res, next) {
        try {
            const body = req.body
            const newGalaxy = await galaxyService.createGalaxy(body)
            res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async editGalaxy(req, res, next) {
        try {
            const body = req.body
            const galaxyId = req.params.galaxyId
            const updatedGalaxy = await galaxyService.editGalaxy(galaxyId, body)
            res.send(updatedGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async deleteGalaxy(req, res, next){
        try {
            const galaxyId = req.params.galaxyId
            const message = await galaxyService.deleteGalaxy(galaxyId)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }
}