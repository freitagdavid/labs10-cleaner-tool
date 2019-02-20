if (process.env.NODE_ENV !== 'test') {
  exports.seed = async function(knex, Promise) {
    // Deletes ALL existing entries
    // await knex.raw('TRUNCATE TABLE questionAnswers RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE surveys RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE questions RESTART IDENTITY CASCADE');
    // await knex.raw('TRUNCATE TABLE houst_ast RESTART IDENTITY CASCADE');
    // await knex.raw('TRUNCATE TABLE items_complete RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE after_list RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE list RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE stay RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE house RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE manager_ast RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE assistant RESTART IDENTITY CASCADE');
    await knex.raw('TRUNCATE TABLE manager RESTART IDENTITY CASCADE');
    // await knex.raw('TRUNCATE TABLE user RESTART IDENTITY CASCADE');
  };
} else {
  exports.seed = () => {};
}
