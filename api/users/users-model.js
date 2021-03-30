const db = require("../data/db-config");

const find = () => {
  return db("users").select("user_id", "user_username").orderBy("user_id");
};

const findById = (user_id) => {
  return db("users").where("user_id", user_id).first();
};

module.exports = {
  find,
  findById,
};
