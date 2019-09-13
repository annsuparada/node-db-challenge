const db = require('../data/db-config.js');

module.exports = {
    getResouces,
    getResouceById,
    addResouce
}

function getResouces() {
    return db('resouces')
}
function getResouceById(id) {
    return db('resouces')
      .where({ id })
      .first();
  }


function addResouce(serouce) {
    return db('resouces')
    .insert(serouce)
    .then(response => {
        return  getResouceById(response[0])
    })
}