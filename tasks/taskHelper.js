const db = require('../data/db-config.js');

module.exports = {
    getTasks,
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