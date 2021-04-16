const Recipes = require('../model')

const checkId = async (req, res, next) => {
    try{
        const recipe = await Recipes.getRecipeById(req.params.recipe_id)
        if(recipe){
            req.recipe = recipe;
            next();
        }else{
            res.status(404).json({message: `404 - Recipe with ID: ${req.params.recipe_id} not found.`})
        }
    }catch(err){
        res.status(500).json({message: "Error Code 500, "+ err.message})
    }
}

module.exports = {
    checkId
}