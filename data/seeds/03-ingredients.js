exports.seed = function(knex){
    return knex('ingredients').insert([
        { ingredient_name: "orange peel"},
        { ingredient_name: "mustard"},
        { ingredient_name: "olive oil"},
        { ingredient_name: "hotdog"},
        { ingredient_name: "playdoh"},
        { ingredient_name: "oven"},
        { ingredient_name: "speech"}
    ])
}