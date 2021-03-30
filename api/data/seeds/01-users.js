exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          user_username: "JerryS",
          user_phone_number: 1234567890,
          user_password:
            "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
        },
        {
          user_username: "GeorgeC",
          user_phone_number: 1234567890,
          user_password:
            "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
        },
        {
          user_username: "ElaineB",
          user_phone_number: 1234567890,
          user_password:
            "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
        },
        {
          user_username: "CosmoK",
          user_phone_number: 1234567890,
          user_password:
            "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
        },
      ]);
    });
};
