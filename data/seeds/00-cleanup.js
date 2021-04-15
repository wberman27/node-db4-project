//Used to truncate

const cleaner = require('knex-cleaner'); //import cleaner

exports.seed = function(knex){
    return cleaner.clean(knex, {
        mode: 'truncate', //resets ids
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'] // don't empty migration tables
    })
}