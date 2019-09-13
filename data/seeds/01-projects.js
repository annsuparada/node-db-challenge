exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {project_name: 'A1', description: 'Do something A1', completed: false},
    {project_name: 'A2', description: 'Do something A2', completed: false},
    {project_name: 'A3', description: 'Do something A3', completed: false},
  ]);
};