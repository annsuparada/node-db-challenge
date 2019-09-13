const db = require('../data/db-config.js');

module.exports = {
    getTasks,
    getTaskById,
    addTasks
}

function getTasks() {
    return db('projects as p')
        .join('project_task as pt', 'p.id', 'pt.project_id' )
        .join('tasks as t', 't.id', 'pt.task_id')
        .select('p.project_name', 
                'p.description as project_description', 
                't.description as task',
                't.note',
                't.completed')
    }
function getTaskById(id) {
    return db('tasks as t')
    .join('project_task as pt', 'pt.project_id', 't.id')
    .join('projects as p', 'p.id', 'pt.project_id')
    .select('t.id', 't.description', 'p.name as project_name', 'p.description as project_description', 't.completed')
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