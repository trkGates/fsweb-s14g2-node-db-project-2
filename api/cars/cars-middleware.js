 const car = require('./cars-model')
 


const checkCarId = async(req, res, next) => {
try {
  const  carId  = await car.getById(req.params.id)
  if (!carId) {
    next({ status: 404, message: `${req.params.id} kimliğine sahip araba bulunamadı"` })
  }
  else {
    req.car = carId
    next()
  }
} catch (error) {
  next(error)
}
}

const checkCarPayload = (req, res, next) => {
 try {
    const { vin, make, model, mileage } = req.body
    if (!vin) {
      next({ status: 400, message: "vin is missing" })
    }
    else if (!make) {
      next({ status: 400, message: "make is missing" })
    }
    else if (!model) {
      next({ status: 400, message: "model is missing" })
    }
    else if (!mileage) {
      next({ status: 400, message: "mileage is missing" })
    }
    else {
      next()
    }
 } catch (error) {
    next(error)
 }
}

const checkVinNumberValid = (req, res, next) => {
try {
  const { vin } = req.body
  if (vin.length !== 17) {
    next({ status: 400, message: `vin ${vin} geçersizdir` })
  }
  else {
    next()
  }
} catch (error) {
  next(error)
}
}

const checkVinNumberUnique = async(req, res, next) => {
try {
  const { vin } = req.body
  const vinNumber = await car.getByVin(vin)
  if (vinNumber) {
    next({ status: 400, message: `vin ${vin} zaten var` })
  }
  else {
    next()
  }
  
} catch (error) {
  
}
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}