exports.up = function (knex) {
  return knex.schema.createTable('tasks', (tbl) => {
    tbl.increments('task_id');
    tbl.string('task_description').notNullable();
    tbl.string('task_notes');
    tbl.boolean('task_completed').notNullable().defaultTo(false);
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks');
};
