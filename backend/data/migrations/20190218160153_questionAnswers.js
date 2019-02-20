exports.up = function(knex, Promise) {
  return knex.schema.createTable('questionAnswers', (table) => {
    table
      .increments('id')
      .unique()
      .primary();
    table.string('answer').defaultsTo(null);
    table.boolean('yes_no').defaultsTo(null);
    table.integer('stars').defaultsTo(null);
    table.integer('question_id');
    table
      .foreign('question_id')
      .references('questions.id')
      .onDelete('CASCADE');
    table.integer('stay_id').unsigned();
    table
      .foreign('stay_id')
      .references('stay.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questionAnswers');
};
