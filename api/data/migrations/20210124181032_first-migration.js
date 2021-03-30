exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.string("user_username", 128).notNullable().unique();
    table.integer("user_phone_number").notNullable();
    table.string("user_password", 128).notNullable();
  });
  // .createTable("plant_species", (table) => {
  //   table.increments("plant_species_id");
  //   table.string("plant_species_name", 128).notNullable().unique();
  // })
  // .createTable("plants", (table) => {
  //   table.increments("plant_id");
  //   table.string("plant_nickname", 128).notNullable();
  //   table.string("plant_image", 255);
  //   table
  //     .integer("plant_species_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("plant_species_id")
  //     .inTable("plant_species")
  //     .onDelete("RESTRICT")
  //     .onUpdate("CASCADE");
  //   table
  //     .integer("plant_h2o_frequency_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("plant_h2o_frequency_id")
  //     .inTable("plant_h2o_frequencies")
  //     .onDelete("RESTRICT")
  //     .onUpdate("CASCADE");
  //   table
  //     .integer("user_Id")
  //     .unsigned()
  //     .notNullable()
  //     .references("user_id")
  //     .inTable("users")
  //     .onDelete("RESTRICT")
  //     .onUpdate("CASCADE");
  // });
};

exports.down = function (knex) {
  return (
    knex.schema
      // .dropTableIfExists("plants")
      // .dropTableIfExists("plant_species")
      .dropTableIfExists("users")
  );
};
