exports.seed = function (knex) {
  return knex("plant_species")
    .del()
    .then(function () {
      return knex("plant_species").insert([
        { plant_species_name: "Hibiscus" },
        { plant_species_name: "Astrophytum" },
        { plant_species_name: "Bunchberry" },
        { plant_species_name: "Forsythia" },
        { plant_species_name: "Maple" },
      ]);
    });
};
