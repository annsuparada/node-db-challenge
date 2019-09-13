const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getProjectById,
    addProjects,
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
      .where({ id })
      .first();
  }
function addProjects(project) {
    return db('projects')
    .insert(project)
    .then(response => {
        return getProjectById(response[0])
    })
}
