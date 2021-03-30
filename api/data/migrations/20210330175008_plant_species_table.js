exports.up = async (knex) => {
  await knex.schema.createTable("plant_species", (table) => {
    table.increments("plant_species_id");
    table.string("plant_species_name", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plant_species");
};
