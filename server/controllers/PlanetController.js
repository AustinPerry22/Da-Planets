import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .post('', this.createPlanet)
            .put('/:planetId', this.editPlanet)
            .delete("/:planetId", this.deletePlanet)
    }

    async getPlanets(req, res, next) {
        try {
            const query = req.query
            const planets = await planetService.getPlanets(query)
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next) {
        try {
            const body = req.body
            const newPlanet = await planetService.createPlanet(body)
            res.send(newPlanet)
        } catch (error) {
            next(error)
        }
    }

    async editPlanet(req, res, next) {
        try {
            const body = req.body
            const planetId = req.params.planetId
            const updatedPlanet = await planetService.editPlanet(planetId, body)
            res.send(updatedPlanet)
        } catch (error) {
            next(error)
        }
    }

    async deletePlanet(req, res, next) {
        try {
            const planetId = req.params.planetId
            const message = await planetService.deletePlanet(planetId)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }
}