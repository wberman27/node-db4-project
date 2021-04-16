
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl =>{
      tbl.increments("recipe_id") //primary key
      tbl.string("recipe_name", 128).notNullable().unique() //required, must be unique
      tbl.timestamps(true, true) //adds created_at and updated_at columns (usetimestamp, defaulttonow)
  })
  .createTable("ingredients", tbl =>{
    tbl.increments("ingredient_id")
    tbl.string("ingredient_name", 128) //can be null
  })
  .createTable("steps", tbl =>{
      tbl.increments("step_id")
      tbl.integer("step_number", 128).notNullable()
      tbl.string("step_instructions", 128).notNullable()
      //foreign key
      tbl.integer("recipe_id")
        .unsigned() //cannot be negative
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT") // for foreign key, use restricted deletion for safety (vs. cascade)
  })
  .createTable("StepsIngredients", tbl =>{
      tbl.increments("StepsIngredients_id")
      tbl.integer("quantity", 128).notNullable();
      //foreign key
      tbl.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT")
      //foreign key
      tbl.integer("ingredient_id")
        .unsigned()
        //can be null
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("StepsIngredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes") //drop last, the tables created first
};
