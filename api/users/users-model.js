const db = require("../data/db-config");

const find = () => {
  return db("users").select("user_id", "user_username").orderBy("user_id");
};

const findBy = (filter) => {
  return db("users").where(filter);
};

const findById = (user_id) => {
  let foo = true;
  if (typeof user_id !== "number") {
    user_id = parseInt(user_id);
  }
  return db("users").where("user_id", user_id).first();
};

const add = (user) => {
  return db("users")
    .insert(user)
    .returning("user_id")
    .then((user_id) => {
      return findById(user_id[0]);
    });
};

module.exports = {
  find,
  findBy,
  findById,
  add,
};
