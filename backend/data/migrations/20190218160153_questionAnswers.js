
exports.up = function (knex, Promise) {
    return knex.schema.createTable('questionAnswers', (table) => {
        table.increments('id').unique().primary()
        table.string('answer').notNullable()
        table.integer('question_id').references('questions.id')
        table.integer('stay_id').notNullable().unsigned().references('id').inTable('stay')
    })
};


exports.down = function (knex, Promise) {
    return knex.schema.dropTable('questionAnswers');
};
