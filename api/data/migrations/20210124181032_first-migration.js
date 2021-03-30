exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.string("user_username", 128).notNullable().unique();
    table.integer("user_phone_number").notNullable();
    table.string("user_password", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
