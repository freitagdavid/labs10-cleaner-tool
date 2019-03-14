const knex = require('knex');
const knexConfig = require('../knexfile');

// Change config file based on environment
// default to 'development' if no .env
const environment = process.env.NODE_ENV || 'production';

// const db = knex(knexConfig[environment]);
// db.migrate.rollback();
// db.migrate.latest();
// db.seed.run();

module.exports = db;
