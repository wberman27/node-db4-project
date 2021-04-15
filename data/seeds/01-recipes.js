
exports.seed = function(knex){
    return knex('recipes').insert([
        { recipe_name: "William's Terrible Food Book"},
        { recipe_name: "Grandma's Best Recipe Cook Book"},
        { recipe_name: "Chef's Famous Book of Recipes"}
    ])
}