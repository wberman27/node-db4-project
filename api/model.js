const db = require('../data/db-config');

function getRecipeById(recipe_id){
    return db("recipe as re")
    .leftJoin("steps as st", "re.recipe_id", "st.recipe_id")
    
}

module.exports = {
    getRecipeById
}