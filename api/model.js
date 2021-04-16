const db = require('../data/db-config');

async function getRecipeById(recipe_id){
    const recipes = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("StepsIngredients as si", "si.step_id", "s.step_id")
    .select(
        "r.recipe_id",
        "r.recipe_name",
        "s.step_id",
        "s.step_number",
        "s.step_instructions",
        "si.ingredient_id"
    )
    .where("r.recipe_id", recipe_id)

    return recipes
    
}

module.exports = {
    getRecipeById
}