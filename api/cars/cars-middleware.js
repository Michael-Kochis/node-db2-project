const cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  const { id } = req.body;

  cars.getById(id)
    .then((resp) => {
      if (!resp || resp === undefined || resp === null) {
        res.status(404).json({ message: `car with id ${id} is not found` })
      } else {
        next();
      }
    }).catch(next);
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}