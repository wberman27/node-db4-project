const router = require('express').Router();
const Recipes = require('./model')
const mw = require('./middleware/middleware')

router.get('/:recipe_id', mw.checkId, (req,res) =>{
    res.status(200).json(req.recipe);
})

module.exports = router;