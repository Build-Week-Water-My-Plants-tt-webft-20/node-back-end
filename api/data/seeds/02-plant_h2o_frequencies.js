exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plant_h2o_frequencies")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plant_h2o_frequencies").insert([
        { plant_h2o_frequency_name: "trees" },
        { plant_h2o_frequency_name: "shrubs" },
        { plant_h2o_frequency_name: "groundcover" },
      ]);
    });
};
