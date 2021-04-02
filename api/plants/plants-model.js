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
      "u.user_id"
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
      "u.user_id"
    )
    .orderBy("p.plant_id");
  return data;
};

const findAllByUserId = async (user_id) => {
  let data = await db("plants as p")
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
      "u.user_id"
    )
    .orderBy("p.plant_id")
    .where("p.user_id", user_id);
  return data;
};

const addPlant = async (body) => {
  let species_id = null;
  let species = await db("plant_species")
    .where("plant_species_name", body.plant_species_name)
    .first();
  if (species !== null && typeof species !== "undefined") {
    species_id = species.plant_species_id;
  } else {
    const [id] = await db("plant_species").insert(
      {
        plant_species_name: body.plant_species_name,
      },
      "plant_species_id"
    );
    species_id = id;
  }
  body.plant_species_id = species_id;
  delete body.plant_species_name;
  let plant_h2o_frequency_id = null;
  let plant_h2o_frequency = await db("plant_h2o_frequencies")
    .where("plant_h2o_frequency_name", body.plant_h2o_frequency_name)
    .first();
  if (
    plant_h2o_frequency !== null &&
    typeof plant_h2o_frequency !== "undefined"
  ) {
    plant_h2o_frequency_id = plant_h2o_frequency.plant_h2o_frequency_id;
  } else {
    const [id] = await db("plant_h2o_frequency").insert(
      {
        plant_h2o_frequency_name: body.plant_h2o_frequency_name,
      },
      "plant_h2o_frequency_id"
    );
    plant_h2o_frequency_id = id;
  }
  body.plant_h2o_frequency_id = plant_h2o_frequency_id;
  delete body.plant_h2o_frequency_name;
  const [id] = await db("plants").insert(body, "plant_id");
  return db("plants").where("plant_id", id).first();
};

const updatePlant = async (changes, id) => {
  let species_id = null;
  let species = await db("plant_species")
    .where("plant_species_name", changes.plant_species_name)
    .first();
  if (species !== null && typeof species !== "undefined") {
    species_id = species.plant_species_id;
  } else {
    const [id] = await db("plant_species").insert(
      {
        plant_species_name: changes.plant_species_name,
      },
      "plant_species_id"
    );
    species_id = id;
  }
  changes.plant_species_id = species_id;
  delete changes.plant_species_name;
  let plant_h2o_frequency_id = null;
  let plant_h2o_frequency = await db("plant_h2o_frequencies")
    .where("plant_h2o_frequency_name", changes.plant_h2o_frequency_name)
    .first();
  if (
    plant_h2o_frequency !== null &&
    typeof plant_h2o_frequency !== "undefined"
  ) {
    plant_h2o_frequency_id = plant_h2o_frequency.plant_h2o_frequency_id;
  } else {
    const [id] = await db("plant_h2o_frequency").insert(
      {
        plant_h2o_frequency_name: changes.plant_h2o_frequency_name,
      },
      "plant_h2o_frequency_id"
    );
    plant_h2o_frequency_id = id;
  }
  changes.plant_h2o_frequency_id = plant_h2o_frequency_id;
  delete changes.plant_h2o_frequency_name;
  await db("plants").where("plant_id", id).update(changes);
  return db("plants").where("plant_id", id).first();
};

const removePlant = async (id) => {
  let data = await db("plants").where("plant_id", id).del();
  return data;
};

module.exports = {
  find,
  findById,
  findAllByUserId,
  addPlant,
  updatePlant,
  removePlant,
};
