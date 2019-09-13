exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    { project_id: 1, description: 'Do somthing 1', note: 'Maybe somthing1', completed: false},
    { project_id: 1, description: 'Do somthing 2', note: 'Maybe somthing2', completed: false},
    { project_id: 2, description: 'Do somthing 3', note: 'Maybe somthing3', completed: false},
    { project_id: 2, description: 'Do somthing 4', note: 'Maybe somthing4', completed: false},
    { project_id: 3, description: 'Do somthing 5', note: 'Maybe somthing5', completed: false},
    { project_id: 3, description: 'Do somthing 6', note: 'Maybe somthing6', completed: false},
  ]);
};