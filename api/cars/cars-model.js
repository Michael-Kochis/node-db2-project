const db = require('../../data/db-config');

const getAll = () => {
  db('cars');
}

const getById = (id) => {
  db('cars')
    .where( { id })
    .first();
}

const create = (neoCar) => {
  db('cars')
    .insert(neoCar);
}
