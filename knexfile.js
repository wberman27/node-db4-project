module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true, //need for sqlite3
        connection: {
            filename: './data/recipeBook.db3' //connect to db3 file with name recipeBook
        },
        migrations: {
            directory: './data/migrations' //path for migrations
        },
        seeds: {
            directory: './data/seeds' //path of seeds
        },
        pool: {
            afterCreate: (conn, done) =>{
                conn.run("PRAGMA foreign_keys = ON", done) //turns foreign keys on
            }
        }
    }
}