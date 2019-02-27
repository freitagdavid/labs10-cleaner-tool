exports.up = function (knex, Promise) {
    return knex.schema.createTable('questions', (table) => {
        table
            .increments()
            .unique()
            .primary()
<<<<<<< HEAD
        table
            .string('name')
        table
            .boolean('isGuest')
=======
        table.string('question')
        table.integer('type')
>>>>>>> bad1d0f8514216d390ba53e0e6a8b54b1c275146
        table.integer('survey_id').unsigned();
        table
            .foreign('survey_id')
            .references('house.id')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
