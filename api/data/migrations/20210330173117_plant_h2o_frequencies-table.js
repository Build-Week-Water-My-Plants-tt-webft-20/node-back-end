exports.up = async (knex) => {
  await knex.schema.createTable("plant_h2o_frequencies", (table) => {
    table.increments("plant_h2o_frequency_id");
    table.string("plant_h2o_frequency_name", 128).notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("plant_h2o_frequencies");
};
