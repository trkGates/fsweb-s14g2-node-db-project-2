const carsRouter = require("express").Router()
const Car = require("./cars-model")
const mid = require("./cars-middleware")

carsRouter.get("/", async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (error) {
        next(error)
    }
    }
)

carsRouter.get("/:id", mid.checkCarId, async (req, res, next) => {
    try {
        res.json(req.car)
    } catch (error) {
        next(error)
    }
    }
)

carsRouter.post("/", mid.checkCarPayload, mid.checkVinNumberValid, mid.checkVinNumberUnique, async (req, res, next) => {
    try {
        const newCar = await Car.create(req.body)
        res.json(newCar)
    } catch (error) {
        next(error)
    }
    } )

module.exports = carsRouter
