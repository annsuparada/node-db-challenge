exports.seed = function(knex, Promise) {
  return knex('resouces').insert([
    {resouce_name: 'book001', description: 'text book'},
    {resouce_name: 'book002', description: 'text book'},
    {resouce_name: 'book003', description: 'text book'}
  ]);
};