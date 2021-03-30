exports.seed = function (knex) {
  return knex("plant_h2o_frequencies")
    .truncate()
    .then(function () {
      return knex("plant_h2o_frequencies").insert([
        { plant_h2o_frequency_name: "trees" },
        { plant_h2o_frequency_name: "shrubs" },
        { plant_h2o_frequency_name: "groundcover" },
      ]);
    });
};
