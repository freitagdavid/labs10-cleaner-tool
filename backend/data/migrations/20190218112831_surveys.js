
exports.up = function(knex, Promise) {
    return knex.schema.createTable('surveys', (table) => {
    table
        .increments()
        .unique()
        .primary()
     table
        .string('name')
    table
        .boolean('isGuest')
    table.integer('user_id').unsigned();
    table
        .foreign('user_id')
        .references('user.id')
        .onDelete('CASCADE');
    table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('surveys')
};
