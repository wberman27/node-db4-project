exports.seed = function(knex){
    return knex('StepsIngredients').insert([
        { quantity: 1, step_id: 1, ingredient_id: 4},
        { quantity: 2, step_id: 2, ingredient_id: 3},
        { quantity: 5, step_id: 3, ingredient_id: 2},
        { quantity: 12, step_id: 4, ingredient_id: 1},
        { quantity: 20, step_id: 5, ingredient_id: 5},
        { quantity: 35, step_id: 6},
        { quantity: 50, step_id: 7}
    ])
}