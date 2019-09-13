
exports.up = function(knex) {
  return knex.schema 
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name').notNullable();
        tbl.text('discription')
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('discription').notNullable();
        tbl.text('note');
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resouces', tbl => {
        tbl.increments();
        tbl.string('resouce_name').notNullable();
        tbl.text('discription');
    })
    .createTable('project_task', tbl => {
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            tbl
            .integer('task_id')
            .unsigned()
            .references('id')
            .inTable('tasks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.primary(['project_id', 'task_id']);
    })
    .createTable('project_resouce', tbl => {
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            tbl
            .integer('resouce_id')
            .unsigned()
            .references('id')
            .inTable('resouces')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resouce_id']);
    })
};

exports.down = function(knex) {
  return knex.shema 
  .dropTableIfExists('project_resouce')
  .dropTableIfExists('project_task')
  .dropTableIfExists('resouces')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
