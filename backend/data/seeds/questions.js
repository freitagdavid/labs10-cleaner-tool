const data = require('./data/questionsData.js')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert(data);
    });
};
