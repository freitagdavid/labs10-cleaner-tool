exports.up = function (knex, Promise) {
    return knex.schema.createTable('questions', (table) => {
        table
            .increments()
            .unique()
            .primary()
        table
            .string('name')
        table
            .boolean('isGuest')
        table.integer('house_id').unsigned();
        table
            .foreign('house_id')
            .references('house.id')
            .onDelete('CASCADE');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('questions')
};
