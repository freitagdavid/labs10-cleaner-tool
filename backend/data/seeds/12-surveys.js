const data = require('./data/surveys');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('surveys')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('surveys').insert(data);
    });
};
