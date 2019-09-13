const db = require('../data/db-config.js');

module.exports = {
    getTasks,
    getTaskById,
    addTasks
}

function getTasks() {
    return db('tasks')
    }
function getTaskById(id) {
    return db('tasks as t')
    .join('projects as p', 'p.id', '=', 't.project_id')
    .select('t.id', 't.description', 'p.project_name', 'p.description as project_description', 't.completed')
    .where({'t.id': id})
    .first()
        .then(response=> {
                return response
            })
    }
function addTasks(task) {
    return db('tasks')
    .insert(task)
    .then(response => {
        return getTaskById(response[0])
    })
}