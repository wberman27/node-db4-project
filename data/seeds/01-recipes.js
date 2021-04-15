
exports.seed = function(knex){
    return knex('recipes').insert([
        { recipe_name: "Will's Terrible Food Thing"},
        { recipe_name: "Grandma's Best Recipe"},
        { recipe_name: "Chef's Famous Gourmet Recipe"}
    ])
}