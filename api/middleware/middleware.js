const Recipes = require('../model')

const checkId = async (req, res, next) => {
    try{
        const recipe = await Recipes.getRecipeById(req.params.recipe_id)
        if(recipe){
            req.recipe = recipe;
            next();
        }
    }catch(err){
        res.status(404).json({message: `404 - Recipe with ID: ${req.params.recipe_id} not found.`})
    }
}

module.exports = {
    checkId
}