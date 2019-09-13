
exports.up = function(knex) {
  return knex.schema 
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name').notNullable();
        tbl.text('description')
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.text('description').notNullable();
        tbl.text('note');
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resouces', tbl => {
        tbl.increments();
        tbl.string('resouce_name').notNullable();
        tbl.text('description');
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
  .dropTableIfExists('resouces')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
