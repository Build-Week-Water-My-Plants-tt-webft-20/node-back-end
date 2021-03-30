exports.up = async (knex) => {
  await knex.schema.createTable("plants", (table) => {
    table.increments("plant_id");
    table.string("plant_nickname", 128).notNullable();
    table.string("plant_image", 255);
    table.decimal("plant_diameter").notNullable();
    table
      .integer("plant_species_id")
      .unsigned()
      .notNullable()
      .references("plant_species_id")
      .inTable("plant_species")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    table
      .integer("plant_h2o_frequency_id")
      .unsigned()
      .notNullable()
      .references("plant_h2o_frequency_id")
      .inTable("plant_h2o_frequencies")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants");
};
