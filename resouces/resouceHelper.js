const db = require('../data/db-config.js');

module.exports = {
    getResouces,
}

function getResouces() {
    return db('resouces')
}