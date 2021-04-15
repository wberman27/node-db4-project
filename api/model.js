const db = require('../data/db-config');

function getRecipeById(recipe_id){
    return db("recipe")
}

module.exports = {
    getRecipeById
}