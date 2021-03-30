exports.seed = function (knex) {
  return knex("plant_h2o_frequencies")
    .del()
    .then(function () {
      return knex("plant_h2o_frequencies").insert([
        { plant_h2o_frequency_name: "Trees" },
        { plant_h2o_frequency_name: "Shrubs" },
        { plant_h2o_frequency_name: "Groundcover" },
      ]);
    });
};
