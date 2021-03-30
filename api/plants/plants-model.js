const db = require("../data/db-config");

const find = () => {
  return db("plants as p")
    .leftJoin(
      "plant_species as ps",
      "p.plant_species_id",
      "ps.plant_species_id"
    )
    .leftJoin(
      "plant_h2o_frequencies as pf",
      "p.plant_h2o_frequency_id",
      "pf.plant_h2o_frequency_id"
    )
    .leftJoin("users as u", "p.user_id", "u.user_id")
    .select(
      "p.plant_id",
      "p.plant_nickname",
      "p.plant_image",
      "p.plant_diameter",
      "ps.plant_species_name",
      "pf.plant_h2o_frequency_name",
      "u.user_username"
    )
    .orderBy("p.plant_id");
};

const findById = async (plant_id) => {
  let data = await db("plants as p")
    .where("plant_id", plant_id)
    .leftJoin(
      "plant_species as ps",
      "p.plant_species_id",
      "ps.plant_species_id"
    )
    .leftJoin(
      "plant_h2o_frequencies as pf",
      "p.plant_h2o_frequency_id",
      "pf.plant_h2o_frequency_id"
    )
    .leftJoin("users as u", "p.user_id", "u.user_id")
    .select(
      "p.plant_id",
      "p.plant_nickname",
      "p.plant_image",
      "p.plant_diameter",
      "ps.plant_species_name",
      "pf.plant_h2o_frequency_name",
      "u.user_username"
    )
    .orderBy("p.plant_id");
  return data;
};

module.exports = { find, findById };
