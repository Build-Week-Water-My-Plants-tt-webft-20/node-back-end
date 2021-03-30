const db = require("../data/db-config");

const find = () => {
  return db("users").select("user_id", "user_username").orderBy("user_id");
};

const findBy = (filter) => {
  return db("users").where(filter);
};

const findById = (user_id) => {
  return db("users").where("user_id", user_id).first();
};

const add = (user) => {
  return db("users")
    .insert(user)
    .then((user_id) => {
      return findById(user_id);
    });
};

module.exports = {
  find,
  findBy,
  findById,
  add,
};
