exports.seed = function (knex) {
  return knex("plant_species")
    .truncate()
    .then(function () {
      return knex("plant_species").insert([
        { plant_species_name: "bamboo" },
        { plant_species_name: "black alder" },
        { plant_species_name: "cat grass" },
        { plant_species_name: "yarrow" },
      ]);
    });
};
