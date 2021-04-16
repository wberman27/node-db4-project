exports.seed = function(knex){
    return knex('steps').insert([
        { step_number: 1, step_instructions: "Add three hotdogs into the mixer.", recipe_id: 1},
        { step_number: 2, step_instructions: "Add 1 tbsp olive oil into the pan.", recipe_id: 1},
        { step_number: 1, step_instructions: "Lather in mustard.", recipe_id: 2},
        { step_number: 2, step_instructions: "Decorate with orange peel.", recipe_id: 2},
        { step_number: 1, step_instructions: "Dice in some playdoh.", recipe_id: 3},
        { step_number: 2, step_instructions: "Place into oven at 350 degrees.", recipe_id: 3},
        { step_number: 3, step_instructions: "Deliver a motivational speech to the dish.", recipe_id: 2},
    ])
}