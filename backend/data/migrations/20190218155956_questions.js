exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
    table
      .increments()
      .unique()
      .primary();
    table.string('question');
    table.integer('survey_id').unsigned();
    table
      .foreign('survey_id')
      .references('surveys.id')
      .onDelete('CASCADE');
    table
      .integer('question_type')
      .notNullable()
      .defaultsTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
