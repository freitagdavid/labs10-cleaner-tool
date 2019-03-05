exports.up = function(knex, Promise) {
  return knex.schema.createTable('questionAnswers', (table) => {
    table
      .increments('id')
      .unique()
      .primary();
    table.string('answer').unsigned();
    table.integer('answer_type')
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
    table.string('name')
    table.string('photo')
    table.integer('house_id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questionAnswers');
};
